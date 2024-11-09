<template>
    <nav class="nav-bar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </template>
  
  <style scoped lang="scss">
  .nav-bar {
    background-color: #333;
    padding: 10px;
    display: flex;
    gap: 15px;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: $color-primary;
      }
    }
  }
  

  </style>