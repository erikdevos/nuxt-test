import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],  // Paginated list of products
    allProducts: [],  // Cached full list of all products
    totalProducts: 0,
    pageSize: 8,
    currentPage: 1,
    allCategories: [],  // Full list of categories extracted from allProducts
  }),
  actions: {
    // Fetch all products (not paginated) and store them in `allProducts`
    async fetchAllProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');
        const data = await response.json();
    
        // Assign slugs to each product
        this.allProducts = data.products.map(product => ({
          ...product,
          slug: this.generateSlug(product.title),
        }));
    
        // Update categories based on all products
        this.updateCategories(this.allProducts);
    
        console.log('Fetched All Products:', this.allProducts.length);
        console.log('Categories:', this.allCategories);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    },    

    // Fetch paginated products (used for product overview page)
    async fetchProducts(page = 1, limit = this.pageSize) {
      try {
        const response = await fetch(`https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`);
        const data = await response.json();

        // Assign slugs to each product
        this.products = data.products.map(product => ({
          ...product,
          slug: this.generateSlug(product.title),
        }));

        this.totalProducts = data.total;
        this.currentPage = page;

        console.log('Fetched Products for Page:', this.products);
      } catch (error) {
        console.error('Error fetching products for page:', error);
      }
    },

    // Fetch product by ID (from allProducts cache)
    getProductById(id) {
      console.log('Looking for product with ID:', id);
      console.log('All Products:', this.allProducts);

      const product = this.allProducts.find(product => product.id === parseInt(id));
      console.log('Matched Product:', product);

      return product;
    },

    // Extract and update all categories (called only once)
    updateCategories(products) {
      const newCategories = products
        .map(product => product.category)  // Extract categories from products
        .filter((value, index, self) => self.indexOf(value) === index);  // Remove duplicates

      this.allCategories = newCategories;  // Update allCategories with unique categories
    },

    // Generate a slug for product title
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
