<script setup lang="ts">
const { notify, state, setState } = useStore();

const contact = reactive({
  name: "",
  email: "",
  message: "",
});

const sendContactForm = async () => {
  const { data } = await useFetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ ...contact }), // { name: contact.name, email: contact.email, message: contact.message
    headers: {
      "Content-Type": "application/json",
    },
  }).json();
  const { status, message, reference } = unref(data);
  notify(message, status);

  setSource(reference);
};

const setSource = (source: string) => {
  setState({
    eventSource: new EventSource(`/api/stream?ref=${source}`),
  });
};
</script>
<template>
    <div class="col center p-8 m-8 rounded bg-gray-100 sh w-96 mx-auto">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="contact.name" class="input" />
      <label for="email">Email</label>
      <input type="email" id="email" v-model="contact.email" class="input" />
      <label for="message">Message</label>
      <textarea
        id="message"
        v-model="contact.message"
        class="input w-64"
      ></textarea>
      <button btn-get @click="sendContactForm">Send</button>
    </div>
</template>
