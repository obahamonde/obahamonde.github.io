<script setup lang="ts">
const currentSkill = ref(0)
const long = ref(false)
const skills = ref([
    {
        name: 'Python',
        icon: 'logos:python',
    },
    {
        name: 'Javascript',
        icon: 'logos:javascript',
    },
    {
        name: 'Vue',
        icon: 'logos:vue',
    },
    {
        name: 'Typescript',
        icon: 'logos:typescript-icon',
    },
    {
        name: 'Flask',
        icon: 'logos:flask',
    },
    {
        name: 'FastAPI',
        icon: 'simple-icons:fastapi',
    },
    {
        name: 'AWS',
        icon: 'logos:aws',
    },
    {
        name: 'GCP',
        icon: 'logos:google-cloud',
    },
    {
        name: 'Docker',
        icon: 'logos:docker-icon',
    },
    {
        name: 'Linux',
        icon: 'logos:linux-tux',
    },
    {
        name: 'MongoDB',
        icon: 'logos:mongodb',
    },
    {
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
    },
    {
        name: 'MySQL',
        icon: 'logos:mysql',
    },
    {
        name: 'Redis',
        icon: 'logos:redis',
    },
    {
        name: 'RabbitMQ',
        icon: 'logos:rabbitmq-icon',
    },
    {
        name: 'Github',
        icon: 'logos:github-icon',
    }
])

setInterval(() => {
    currentSkill.value = (currentSkill.value + 1) % skills.value.length
}, 1000)

</script>
<template>
<p underline cp  hover:font-extrabold
v-if="!long" @click="long = true"
>Long version</p>
<p v-else @click="long = false">
<p underline cp  hover:font-extrabold>Short Version</p>

<p>Hi, I'm <b>Oscar</b> and I'm a <b>Telecommunications Engineer</b> from <b>Lima, Perú</b>.
I am a seasoned Full-Stack Engineer with 10 years of relevant working experience, the former 4 years advocated to Software and Cloud Engineering.
Holding several certifications from different vendors such as <i>AWS</i>,<i>IBM</i>,<i>Certiprof</i>,<i>Fortinet</i>,<i>ITIL</i>, among others,
I enjoy learning new technologies and applying them to solve real-world problems. My curiosity and being able to see the full picture paying attention to the details has led me to work for great companies like <i>Huawei</i>, <i>Telefonica</i>, <i>Indra</i> among others.
I am a self motivated, versatile and well rounded Engineer, holding always an apprentice attitude and focusing on customer satisfaction and my own team working experience.
</p>
</p>

<strong>Skills</strong>
<div col center gap-2
>
<Icon :icon="skills[currentSkill].icon" x4 />
<span>{{ skills[currentSkill].name }}</span>
</div>

</template>