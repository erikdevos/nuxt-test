<template>
    <div class="product-item">
      <nuxt-link :to="`/product/${product.slug}-${product.id}`">
        <div class="product-image-wrapper">
          <img :src="product.image || 'https://picsum.photos/250'" alt="Product image"  loading="lazy"/>
          <div class="product-category">{{ product.category }}</div>
        </div>
        <h2 class="product-title">{{ product.title }}</h2>
        <div class="product-price">Price: ${{ product.price }}</div>
        <div class="product-rating">Rating: {{ product.rating }}</div>
      </nuxt-link>
    </div>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped lang="scss">  
  .product-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $color-black;
  
    h2 {
      margin: 0;
      font-size: 1.1rem;
      color: inherit;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: $color-primary-dark;
        .product-category {
            background-color: $color-primary-dark;
        }
        img {
          transform: scale(1.1);
        }
      }
    }
  
    .product-image-wrapper {
      position: relative;
      margin-bottom: 1.3rem;
      border-radius: 10px;
      overflow: hidden;
  
      img {
        display: block;
        width: 100%;
        object-fit: cover;
        aspect-ratio: 5/4;
        transition: 0.2s transform ease-in-out;
      }
  
      .product-category {
        @include product-label;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        @media only screen and (min-width: 600px) {
          top: 1rem;
          right: 1rem;   
        }
      }
    }
  }
  </style>