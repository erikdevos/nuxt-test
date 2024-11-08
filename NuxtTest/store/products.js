import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      console.log("Fetching products...");
      if (process.client) {
        const storedData = localStorage.getItem('products')
        if (storedData) {
          this.products = JSON.parse(storedData) // Load from localStorage
          console.log("Loaded products from localStorage:", this.products)
        } else {
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          this.products = data.products
          localStorage.setItem('products', JSON.stringify(this.products)) // Store in localStorage
          console.log("Fetched products from API:", this.products)
        }
      }
    },

    getProductById(id) {
      console.log("Searching for product with id:", id)
      return this.products.find(product => product.id === id) || null
    }
  }
})
