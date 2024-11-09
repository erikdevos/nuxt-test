<template>
    <header class="header">
      <h1>My Nuxt App</h1>
      <NuxtLink to="/contact" class="header-cta">Contact</NuxtLink>
    </header>
  </template>
  
  <style scoped lang="scss">
  .header {
    background-color: #3490dc;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    h1 {
      color: white;
      margin-bottom: 0
    }

    .header-cta {
      @include cta-button;
      margin-left: auto;
      font-size: 1rem;
    }
  }
  </style>