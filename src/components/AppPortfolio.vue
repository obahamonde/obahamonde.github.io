<script setup lang="ts">
const items = ref([
  {
    url: "https://www.smartpro.solutions",
    title: "Cubecloud",
    image: "/images/cubecloud.png",
  },
  {
    url: "https://github.com/obahamonde/faudantic",
    title: "Faudantic",
    image: "/images/faudantic.png",
  },
  {
    url: "https://github.com/obahamonde/aiofauna",
    title: "AioFauna",
    image: "/images/aiofauna.png",
  },
  {
    url: "https://searchengine-fwuw7gz7oq-uc.a.run.app/",
    title: "Search Engine",
    image: "/images/searchengine.png",
  },
  {
    url: "https://codepen-fwuw7gz7oq-uc.a.run.app",
    title: "CodePencil",
    image: "/images/codepencil.png",
  },
  {
    url: "https://chatgpt-fwuw7gz7oq-uc.a.run.app/",
    title: "ChatGPT Voice",
    image: "/images/chatgpt.png",
  },
  {
    url: "https://aiofaunastreams-fwuw7gz7oq-uc.a.run.app/",
    title: "AIOFaunaStreams",
    image: "/images/faunastream.png",
  },
  {
    url: "https://threeshirt-fwuw7gz7oq-uc.a.run.app",
    title: "3D T-Shirt Designer",
    image: "/images/3dshirt.png",
  },
  {
    url: "https://ytapi-fwuw7gz7oq-uc.a.run.app",
    title: "Youtube Video API",
    image: "/images/ytapi.png",
  },
  {
    url: "https://burpysuite-fwuw7gz7oq-uc.a.run.app",
    title: "BurpSuite inspired mini-clone App",
    image: "/images/burpysuite.png",
  },
  {
    url: "https://geoloc-map.netlify.app/",
    title: "Google Maps reactive geolocalization",
    image: "/images/geolocation.jpeg",
  },
  {
    url: "https://hhmc-fwuw7gz7oq-uc.a.run.app",
    title: "Web Application for artists and creators",
    image: "/images/hhmc.png",
  },
]);





</script>
<template>
                <section grid3 gap-4>
                  <div v-for="item in items" :key="item.title" class="portfolio-item">
                    <a :href="item.url" target="_blank">
                      <img :src="item.image" alt="portfolio item" />
                      <div class="portfolio-item-overlay">
                        <div class="portfolio-item-details">
                          <h5>{{ item.title }}</h5>
                          <p>Click to view</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </section>
</template>
<style scoped>
.portfolio-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
} 
 

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease;
}

.portfolio-item:hover .portfolio-item-overlay {
  opacity: 1;
}

.portfolio-item-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.portfolio-item-details h5 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.portfolio-item-details p {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
}

.portfolio-item-details a {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease;
}

.portfolio-item-details a:hover {
  background: #fff;
  color: #000;
}

.portfolio-item-details a i {
  margin-right: 5px;
}

.portfolio-item-details a i:last-child {
  margin-right: 0;
}

.portfolio-item-details a:hover i {
  color: #000;
}

.portfolio-item-details a:hover i:last-child {
  color: #000;
}

.portfolio-item-details a:hover i:first-child {
  color: #000;
}

.portfolio-item-details a:hover i:nth-child(2) {
  color: #000;
}

.portfolio-item-details a:hover i:nth-child(3) {
  color: #000;
}

.portfolio-item-details a:hover i:nth-child(4) {
  color: #000;
}
</style>
