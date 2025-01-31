<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '~/store/products.ts';
import ProductCard from '~/components/productcard.vue';
import Pagination from '~/components/pagination.vue';
import Loader from '~/components/loader.vue';
import ProductFiltering from '~/components/productfiltering.vue';
import ProductSearchBar from '~/components/productsearchbar.vue';
import { computed } from 'vue';
const productStore = useProductStore();
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
]);

const loading = ref(true);
const categories = ref([]); // Define categories as a ref

// Fetch all products and categories on mount
onMounted(async () => {
  await productStore.fetchAllProducts();
  categories.value = productStore.allCategories || [];
  await productStore.fetchProducts(1);
  loading.value = false;
});

// Pagination functions
const handlePageChange = (newPage) => {
  if (!productStore.searchQuery && !productStore.selectedCategory) {
    productStore.fetchProducts(newPage); // Only handle pagination when not searching or filtering by category
  }
};

// Filter products by selected category
const filterByCategory = (category) => {
  productStore.filterByCategory(category);
};

// Filter products based on search query
const handleSearch = (query) => {
  productStore.filterProducts(query);
};

const filteredProductsCount = computed(() => {
  // Filter all products by the selected category and count the number of items
  return productStore.allProducts.filter(product => 
    product.category === productStore.selectedCategory
  ).length;
});

</script>

<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />

      <!-- Loading state -->
      <div v-if="loading">
        <Loader message="Loading products..." />
      </div>

      <!-- Product Filtering Component (pass categories as a prop) -->
      <ProductFiltering 
        :categories="productStore.allCategories" 
        @category-select="filterByCategory" 
      />

      <!-- Product Search Bar -->
      <ProductSearchBar @search="handleSearch" />

      <h2 v-if="productStore.selectedCategory">Currently showing <em>{{ productStore.selectedCategory }} ({{ filteredProductsCount }})</em></h2>

      <div class="product-list" v-if="productStore.filteredProducts && productStore.filteredProducts.length">
        <ProductCard
          v-for="product in productStore.filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div v-else class="product-list-error">
        <p>No products found for current selection.</p>
      </div>

      <!-- Pagination Component - only show if not searching -->
      <Pagination
        v-if="!productStore.searchQuery && !productStore.selectedCategory"
        :currentPage="productStore.currentPage"
        :totalPages="productStore.totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-list {
    display: grid;
    margin-bottom: 4rem;
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media only screen and (min-width: 600px) {
      gap: 2rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }    
}

.product-list-error {
  margin-bottom: 3rem;
}

</style>
