<template>
    <nav class="nav-bar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </template>
  
  <style scoped>
  .nav-bar {
    background-color: #333;
    padding: 10px;
    display: flex;
    gap: 15px;
  }
  
  .nav-bar a {
    color: #fff;
    text-decoration: none;
  }
  </style>