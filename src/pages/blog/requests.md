---
title: Are you still using requests?
---

# Are you still using requests?

![](/images/requests.png)

`2023-02-20`

## TL;DR

If you are using `requests` in your project, you should consider migrating to `httpx` or `aiohttp` as soon as possible.

## Why?

Asynchronous programming is a technique used to improve the performance of programs that need to perform I/O operations, such as reading or writing to a file or sending a request over a network. Traditional synchronous programming blocks the execution of the program while waiting for I/O operations to complete, which can lead to long wait times and reduced performance. Asynchronous programming, on the other hand, allows the program to continue executing other tasks while waiting for I/O operations to complete, which can lead to improved performance and faster response times.
In Python, asynchronous programming can be achieved using the asyncio module, which provides a framework for writing asynchronous code using async and await keywords.
The async and await keywords were introduced in Python 3.5 to make it easier to write asynchronous code. The async keyword is used to define a coroutine, which is a special type of function that can be suspended and resumed at certain points in its execution. The await keyword is used to suspend the execution of a coroutine until a certain condition is met, such as the completion of an I/O operation. Coroutines need to be executed within an event loop which is a programming construct that manages the execution of coroutines.

## The Event Loop

The event loop in Python is implemented in the asyncio module and provides a way to schedule and execute coroutines in an asynchronous fashion. The event loop consists of a central loop that continuously waits for new events and executes coroutines that are waiting for I/O operations to complete.
Coroutines in Python are defined using the async keyword and can be suspended and resumed using the await keyword. When a coroutine encounters an I/O operation, it can yield control back to the event loop, allowing other coroutines to execute while the I/O operation is in progress.
The event loop in Python uses an event queue to manage the scheduling of coroutines. Coroutines are added to the event queue when they are created or when they are resumed after being suspended. When an I/O operation completes, the event loop selects the next coroutine from the event queue and resumes its execution.

## Talk is cheap, show me the code

We will compare the performance of two http modules, requests and aiohttp. The requests module is a synchronous http client for Python, while the aiohttp module is an asynchronous http module for Python.

**Requests**

```python

from requests import Session
from time import perf_counter


def fetch(url: str) -> str:
    with Session() as session:
        response = session.get(url)
        return response.json()


base_url = "https://jsonplaceholder.typicode.com/todos/"


def main():
    start = perf_counter()
    for i in range(1, 101):
        url = base_url + str(i)
        print(fetch(url))
    end = perf_counter()
    print(f"Total time: {end - start}")
    print(f"Requests per second: {60 / (end - start)}")


if __name__ == "__main__":
    main()


# Total time: 21.9579128080004
# Requests per second: 4.554166913513057n
```

**Aiohttp**

```python
import asyncio
from aiohttp import ClientSession
from time import perf_counter


async def fetch(url: str, session: ClientSession) -> str:
    async with session.get(url) as response:
        return await response.json()


base_url = "https://jsonplaceholder.typicode.com/todos/"


async def main():
    start = perf_counter()
    async with ClientSession() as session:
        tasks = []
        for i in range(1, 101):
            url = base_url + str(i)
            task = asyncio.create_task(fetch(url, session))
            tasks.append(task)
        responses = await asyncio.gather(*tasks)
        for response in responses:
            print(response)
    end = perf_counter()
    print(f"Total time: {end - start}")
    print(f"Requests per second: {60 / (end - start)}")


if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())


# Total time: 0.71235577200423
# Requests per second: 140.37929350757923o
```

## Conclusion

As you can see, the aiohttp module is around 30 times faster than the requests module. This is because the aiohttp module is asynchronous, while the requests module is synchronous. The aiohttp module uses the asyncio module to perform asynchronous I/O operations, which allows it to perform multiple I/O operations at the same time. The requests module, on the other hand, performs I/O operations synchronously, which means that it blocks the execution of the program while waiting for I/O operations to complete. This can lead to long wait times and reduced performance.
