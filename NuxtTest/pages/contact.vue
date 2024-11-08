<template>
    <div class="page-content contact-page">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <!-- Name Field -->
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
  
        <!-- Email Field -->
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="example@example.com"
        />
  
        <!-- Message Field -->
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
        ></textarea>
  
        <!-- Submit Button -->
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const formData = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  const submitForm = () => {
    // Basic example - just logs form data to console
    console.log("Form Submitted:", formData)
    // In a real app, you'd send the data to a backend API
    alert('Thank you for reaching out!')
  }
  </script>
  
  <style scoped lang="scss">
  .contact-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  