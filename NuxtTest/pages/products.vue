<template>
    <section class="page-content">
      <div class="container">
        <!-- Breadcrumb Component -->
        <Breadcrumb :breadcrumbs="breadcrumbs" />
  
        <div class="product-list" v-if="products && products.length">
          <!-- Product overview item -->
          <div v-for="product in products" :key="product.id" class="product-item">
            <nuxt-link v-if="product.id" :to="`/product/${product.id}`">
              <div class="product-image-wrapper">
                <img :src="product.image || 'https://picsum.photos/250'" alt="Product image" />
                <div class="product-category">{{ product.category }}</div>
              </div>
              <h2 class="product-title">{{ product.title }}</h2>
              <div class="product-price">Price: ${{ product.price }}</div>
              <div class="product-rating">Rating: {{ product.rating }}</div>
            </nuxt-link>
          </div>
        </div>
  
        <!-- No products -->
        <div v-else>
          <p>No products found.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Import the product store from Pinia
  import { useProductStore } from '~/store/products'
  
  // Access the Pinia store
  const productStore = useProductStore()
  
  // Fetch products if they are not already in the store
  if (!productStore.products.length) {
    await productStore.fetchProducts()
  }
  
  // Get the products from the store
  const products = productStore.products
  
  const breadcrumbs = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' }
  ]
  </script>  
  
  <style scoped lang="scss">
  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .product-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $color-black;

        h2 {
            margin: 0;
            font-size: 1.2rem;
            color: inherit;
        }

        a {
            text-decoration: none;
            color: inherit;
            &:hover {
                color: $color-primary;
                img {
                    transform: scale(1.1);
                }
            }
        }

    .product-image-wrapper {
        position: relative;
        margin-bottom: 1.5rem;
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
            top: 1rem;
            right: 1rem;
        }
    }

  }
  
  </style>
  