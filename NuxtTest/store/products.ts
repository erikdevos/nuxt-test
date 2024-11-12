import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    totalProducts: 0,
    pageSize: 8,
    currentPage: 1,
  }),
  actions: {
    async fetchProducts(page = 1, limit = this.pageSize) {
      try {
        const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`)
        const data = await response.json()

        // Add slug field to each product
        this.products = data.products.map(product => ({
          ...product,
          slug: this.generateSlug(product.title)
        }))
        this.totalProducts = data.total
        this.currentPage = page

        // Debugging: log the fetched products to check slugs and IDs
        console.log('Fetched Products:', this.products)

      } catch (error) {
        console.error('Error fetching products:', error)
      }

      // Log the fetched products to check slugs and IDs
      console.log('Fetched Products:', JSON.parse(JSON.stringify(this.products)))
    },

    // Fetch product by ID (only)
    getProductById(id) {
      // Find the product by ID only
      return this.products.find(product => product.id === id)
    }, // <-- Missing comma added here

    // Generate a slug for product title
    generateSlug(title) {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    },
  },
  getters: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.pageSize)
    },
  },
})
