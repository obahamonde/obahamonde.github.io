<script setup lang="ts">
const state = reactive({
    skills: [
        {
            name: "Python",
            icon: "logos:python",
        },
        {
            name: "Javascript",
            icon: "logos:javascript",
        },
        {
            name: "Vue",
            icon: "logos:vue",
        },
        {
            name: "Typescript",
            icon: "logos:typescript-icon",
        },
        {
            name: "Flask",
            icon: "logos:flask",
        },
        {
            name: "FastAPI",
            icon: "simple-icons:fastapi",
        },
        {
            name: "AWS",
            icon: "logos:aws",
        },
        {
            name: "GCP",
            icon: "logos:google-cloud",
        },
        {
            name: "Docker",
            icon: "logos:docker-icon",
        },
        {
            name: "Kubernetes",
            icon: "logos:kubernetes",
        },
        {
            name: "Linux",
            icon: "logos:linux-tux",
        },
        {
            name: "FaunaDB",
            icon: "logos:fauna-icon",
        },
        {
            name: "PostgreSQL",
            icon: "logos:postgresql",
        },
        {
            name: "MySQL",
            icon: "logos:mysql",
        },
        {
            name: "Redis",
            icon: "logos:redis",
        },
        {
            name: "RabbitMQ",
            icon: "logos:rabbitmq-icon",
        },
        {
            name: "Github",
            icon: "logos:github-icon",
        },
        {
            name: "ExpressJS",
            icon: "logos:express",
        },
        {
            name: "NuxtJS",
            icon: "logos:nuxt-icon",
        },
        {
            name: "TailwindCSS",
            icon: "logos:tailwindcss-icon",
        },
        {
            name: "NodeJS",
            icon: "logos:nodejs-icon",
        },
        {
            name: "Cybersecurity",
            icon: "simple-icons:kalilinux",
        },
        {
            name: "MongoDB",
            icon: "logos:mongodb-icon",
        },
        {
            name: "DigitalOcean",
            icon: "logos:digital-ocean",
        },
    ],
    experience: [
        {
            name: "Huawei",
            logo: "https://cdn.worldvectorlogo.com/logos/huawei.svg",
            position: "Service Engineer",
            time: "2014 - 2016",
        },
        {
            name: "Telefónica",
            logo: "https://cdn.worldvectorlogo.com/logos/telefonica.svg",
            position: "Pre-Sales Engineer",
            time: "2016 - 2018",
        },
        {
            name: "Valtx",
            logo: "/images/valtx.png",
            position: "IT Analyst",
            time: "2019 - 2020",
        },
        {
            name: "Indra",
            logo: "https://cdn.worldvectorlogo.com/logos/indra-sistemas-logo.svg",
            position: "Data Engineer",
            time: "2021",
        },
        {
            name: "Bluetab an IBM Company",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahLP4DDtGdaf5ctTKpJTknVHRAYmBhvFwuZSJx3ZjQukR75Uk7ss8lJuC312lJG9tPM0&usqp=CAU",
            position: "Data Developer",
            time: "2022",
        },
        {
            name: "Pronti.ai",
            logo: "https://www.cengn.ca/wp-content/uploads/2021/09/pronti-white-1024x417.png",
            position: "DevOps Engineer",
            time: "2023",
        },
    ],
});


const showModal = ref(false);
const selectedSkill = ref("");

const openModal = (skillName: string) => {
    selectedSkill.value = skillName;
    showModal.value = true;
};



</script>
<template>
                                                                                            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                                                                                                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                                                                                                    <div
                                                                                                        class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                                                                                    </div>
                                                                                                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                                                                                        <div class="max-w-md mx-auto">
                                                                                                            <div class="divide-y divide-gray-200">
                                                                                                                <div class="pb-8 text-center">
                                                                                                                    <h1 class="text-2xl font-semibold">My Resume</h1>
                                                                                                                </div>
                                                                                                                <div class="mt-8">
                                                                                                                    <h2 class="text-xl font-semibold mb-4">Skills</h2>
                                                                                                                    <div class="grid grid-cols-3 gap-6">
                                                                                                                        <template v-for="skill in state.skills">
                                                                                                                            <div
                                                                                                                                class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow cursor-pointer group relative overflow-hidden"
                                                  
                                                                                                                                >
                                                                                                                                <div
                                                                                                                                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in">
                                                                                                                                </div>
                                                                                                                                <div class="flex-1 flex flex-col p-8 z-10">
                                                                                                                                    <Icon 
                                                                                                                                    @click="openModal(skill.name)"
                                                                                                                                    class="mx-auto h-12 w-auto" :icon="skill.icon" alt="" />
                                                                                                                                    <h3
                                                                                                                                        class="mt-6 text-gray-900 text-sm font-medium invisible group-hover:visible group-hover:text-white group-hover:shadow-text transition duration-200 ease-in">
                                                                                                                                        {{ skill.name }}
                                                                                                                                    </h3>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </template>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="mt-8">
                                                                                                                    <h2 class="text-xl font-semibold mb-4">Experience</h2>
                                                                                                                    <div class="space-y-4">
                                                                                                                        <template v-for="exp in state.experience">
                                                                                                                            <div
                                                                                                                                class="bg-white rounded-lg shadow p-6 cursor-pointer group relative overflow-hidden">
                                                                                                                                <div
                                                                                                                                    class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in">
                                                                                                                                </div>
                                                                                                                                <img class="h-auto w-12 mb-4 z-10" :src="exp.logo" :alt="exp.name" />
                                                                                                                                <h3 class="text-gray-900 text-lg">{{ exp.name }}</h3>
                                                                                                                                <p class="text-gray-900 text-sm">{{ exp.position }}</p>
                                                                                                                                <p class="text-gray-900 text-sm">{{ exp.time }}</p>
                                                                                                                            </div>
                                                                                                                        </template>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                    
                                                                                                </div>
                                                                                            </div>

                                                                                            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                          <div class="bg-white p-8 rounded-lg w-1/2 shadow-lg d">
                                                            <Icon icon="mdi-close" class="x2 top-4 right-4 cursor-pointer text-red-500 hover:red-700" @click="showModal = false" />
                                                            <h1 class="text-2xl col  font-semibold mb-4 text-center">{{ selectedSkill }}</h1>
                                                            <video :src="`${selectedSkill}.mp4`" controls class="w-full rounded-lg" />
                                                          </div>
                                                        </div>

</template>
<style>
.group-hover\:shadow-text:hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
}
</style>
