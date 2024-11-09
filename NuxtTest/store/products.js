import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    totalProducts: 0, // Total number of products
    pageSize: 8,      // Number of products per page
    currentPage: 1,   // Current page number
  }),
  actions: {
    async fetchProducts(page = 1, limit = this.pageSize) {
      try {
        const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`)
        const data = await response.json()

        this.products = data.products
        this.totalProducts = data.total // Total number of products from API
        this.currentPage = page
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },

    // Add method to fetch product by ID
    getProductById(id) {
      return this.products.find(product => product.id === id)
    },
  },
  getters: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.pageSize)
    },
  },
})
