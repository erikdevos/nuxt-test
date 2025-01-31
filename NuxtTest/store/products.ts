import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [], // Paginated list of products
    allProducts: [], // Cached full list of all products
    filteredProducts: [], // Filtered list for search functionality
    totalProducts: 0,
    pageSize: 25, // Update page size to 25
    currentPage: 1,
    allCategories: [], // Full list of categories extracted from allProducts
    searchQuery: '', // Track search query for live updates
    selectedCategory: '', // Track selected category
  }),
  actions: {
    async fetchAllProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');
        const data = await response.json();
        this.allProducts = data.products.map(product => ({
          ...product,
          slug: this.generateSlug(product.title),
        }));
        this.filteredProducts = this.allProducts;
        this.updateCategories(this.allProducts);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    },

    async fetchProducts(page = 1, limit = this.pageSize) {
      try {
        const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}&delay=1000`);
        const data = await response.json();
        this.products = data.products.map(product => ({
          ...product,
          slug: this.generateSlug(product.title),
        }));
        this.totalProducts = data.total;
        this.currentPage = page;
      } catch (error) {
        console.error('Error fetching products for page:', error);
      }
    },

    filterProducts(query) {
      this.searchQuery = query; // Update search query
      if (!query) {
        this.filteredProducts = this.allProducts;
        this.fetchProducts(1); // Reset to first page when search is cleared
      } else {
        this.filteredProducts = this.allProducts.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
      }
    },

    filterByCategory(category) {
      this.selectedCategory = category;
      if (category) {
        this.filteredProducts = this.allProducts.filter(product => product.category === category);
      } else {
        this.filteredProducts = this.allProducts;
      }
      this.fetchProducts(1); // Reset pagination to first page
    },

    updateCategories(products) {
      this.allCategories = [...new Set(products.map(product => product.category))];
    },

    generateSlug(title) {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    },
  },
  getters: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.pageSize);
    },
  },
});
