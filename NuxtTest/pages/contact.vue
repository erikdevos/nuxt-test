<template>
    <div class="page-content contact-page">
      <h1>Contact us</h1>
      <p class="contact-intro">We love to hear from you! Questions, compliments, offers? Let us know.</p>

      <form @submit.prevent="submitForm">
        <!-- Name Field -->
        <div class="input-row">
          <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
        </div>
  
        <!-- Email Field -->
        <div class="input-row">
          <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="example@example.com"
            />
      </div>
  
        <!-- Message Field -->
         <div class="input-row">
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
         <div class="button-row">
          <button type="submit">Send Message</button>
        </div>
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
    form {
      .button-row {
        display: flex;
        justify-content: flex-end;
      }
      button[type=submit] {
        align-self: flex-end;
      }
    }

    .input-row {
      display: flex;
      margin-bottom: 1rem;
      label {
        flex: 1;
      }
      input,
      textarea,
      select {
        flex: 3;
      }
    }
  }
  </style>
  