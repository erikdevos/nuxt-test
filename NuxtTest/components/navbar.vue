<template>
    <nav class="nav-bar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </template>
  
  <style scoped lang="scss">
  .nav-bar {
    background-color: $color-darkgray;
    padding: 10px;
    display: flex;
    gap: 15px;
    margin-bottom: 0;

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: $color-primary;
      }
    }
    
  }
  </style>