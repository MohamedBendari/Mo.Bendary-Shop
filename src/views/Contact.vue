<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const errors = ref({})
const success = ref(false)

function submitForm() {
  errors.value = {}
  success.value = false

  if (!name.value) errors.value.name = 'Name is required'
  if (!email.value) errors.value.email = 'Email is required'
  if (!message.value) errors.value.message = 'Message is required'

  if (Object.keys(errors.value).length === 0) {
    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  }
}
</script>

<template>
  <div class="contact-page d-flex align-items-center justify-content-center">
    <div class="form-box p-4 shadow-lg rounded">
      <h2 class="mb-3 text-center">Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label>Name</label>
          <input v-model="name" class="form-control" />
          <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" />
          <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
        </div>
        <div class="mb-3">
          <label>Message</label>
          <textarea v-model="message" class="form-control"></textarea>
          <small v-if="errors.message" class="text-danger">{{ errors.message }}</small>
        </div>
        <button type="submit" class="btn btn-primary w-100">Send</button>
      </form>
      <div v-if="success" class="alert alert-success mt-3 text-center">
        Thank you for contacting us!
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  height: 100vh;
  background: url('https://www.shutterstock.com/image-photo/3d-render-fashion-shop-600nw-2338894705.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
}

.form-box {
  background-color: rgba(209, 206, 206, 0.84); 
  max-width: 500px;
  width: 100%;
}
</style>
