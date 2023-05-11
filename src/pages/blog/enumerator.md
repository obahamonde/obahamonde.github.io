---
title: Build your own cybersecurity enumeration tool
---

# Build your own cybersecurity enumeration tool

![](/images/enumerator.png)

First we need to import all the necessary dependencies:

```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from json import loads, dumps
from socket import gethostbyname
from pydantic import BaseModel
from aiohttp import ClientSession
from dns.resolver import resolve
from bs4 import BeautifulSoup
from geocoder import ip as geo
```

Remember the DNS records? We need a list to iterate over them later, also we will fake out out http headers for the http head requests as headers from a browser client, this way most blockers will forward our requests.

```python
browser_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
}
```

We need a Model to blueprint the DNS records we are going to enumerate:

```python

class Record(BaseModel):
    domain:str
    ttl:int
    type_:str
    value:str

```

Here comes the interesting part, we will build an Enumerator construct that will be initialized with the target domain name, will pull all the DNS records from our list using the resolver from the python-dns package, will also capture the geolocation data with the ip method from the geocoder package, will enumerate the subdomains from a txt file we will provide (subdomains.txt) by bruteforcing with the resolver and lastly will fetch the domain headers with the head method from aiohttp asynchronously.

```python

class Enumerator(object):

    domain:str

    def __init__(self, domain:str):
        self.domain = domain

    @property
    def records(self):

        records = []
        for record_type in record_types:
            try:
                records.extend(str(resolve(self.domain, record_type).rrset).split('\\n'))
            except Exception:
                pass
        responses = []
        for record in records:
            if record not in responses:
                record = record.split(' ')
                record.pop(2)
                record.pop(0)
                responses.append(record)
            if record[1] == 'MX':
                record.pop(2)
        return dumps([Record(domain=self.domain, ttl=int(record[0]), type_=record[1], value=record[2]).dict() for record in responses])

    @property
    def geo(self):
        """Get's geo information for a domain"""
        return dumps(geo(gethostbyname(self.domain)).json['raw'])

    @property
    def subdomains(self):
        """Get's all subdomains for a domain"""
        response = []
        with open('./subdomains.txt', 'r', encoding='utf-8') as file:
            subdomains = file.read().split('\\n')
            for subdomain in subdomains:
                try:
                    res = resolve(f"{subdomain}.{self.domain}", 'A')
                    for ipval in res:
                        response.append({"ip":str(ipval),"domain": f"{subdomain}.{self.domain}"})
                except Exception:
        return dumps(response)

    async def headers(self):
        """Get's all headers for a domain"""
        async with ClientSession(headers=browser_headers) as session:
            async with session.head(f"https://{self.domain}") as response:
                return dumps(dict(response.headers))

```

Then as usual we will instantiate our FastAPI api and implement a single Http endpoint that given the domain as path parameter will instantiate the Enumerator and proceed to gather all the information required.

```python


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/{domain}")
async def enumerate_(domain: str):
    """Gets all subdomains, headers, and records for a domain"""
    enumerator = Enumerator(domain)
    try:
        return {
            "domain": domain,
            "headers": loads(await enumerator.headers()),
            "records": loads(enumerator.records),
            "geo": loads(enumerator.geo),
            "subdomains": loads(enumerator.subdomains),

        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

```

Then we test using the FastAPI auto-documented UI:

![](/images/enumerator-1.png)

On the second part we will build our VueJS frontend.

<hr/>
