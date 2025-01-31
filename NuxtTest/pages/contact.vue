<template>
    <section class="page-content no-hero">
      <div class="container">
      <h1>Contact us</h1>
      <p class="contact-intro">We love to hear from you! Questions, compliments, offers? Let us know.</p>

      <div class="grid col-1 gap-3 mobile-row">
        <form @submit.prevent="submitForm" class="col-2">
          <!-- Name Field -->
          <div class="input-row">
            <label for="name">Name:</label>
              <input type="text" id="name" v-model="formData.name" required />
          </div>
    
          <!-- Email Field -->
          <div class="input-row">
            <label for="email">E-mail:</label>
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
        <div class="map-wrapper col-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5037.715619528668!2d5.872867389231248!3d50.852317285314754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0957716f93f27%3A0x23a37b5b76ca6426!2sValkenburgerweg%20139C%2C%206305%20EC%20Schin%20op%20Geul!5e0!3m2!1snl!2snl!4v1738319788357!5m2!1snl!2snl" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>  

    </section>
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
    h1 {
      margin-bottom: 0;
    }
    h1+p {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  </style>
  