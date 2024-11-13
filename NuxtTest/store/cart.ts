// store/cart.ts
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  // Load cart from localStorage on initialization
  if (process.client) {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      cart.value = JSON.parse(savedCart)
    }
  }

  // Sync cart to localStorage whenever it changes
  watch(
    cart,
    (newCart) => {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
    },
    { deep: true }
  )

  // Add item to cart
  function addToCart(product) {
    const existingItem = cart.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  // Remove item from cart
  function removeFromCart(productId) {
    cart.value = cart.value.filter((item) => item.id !== productId)
  }

  // Clear entire cart
  function clearCart() {
    cart.value = []
  }

  // Computed total item count
  const totalItems = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  )

  // Computed total price of items in cart
  const totalPrice = computed(() => 
    cart.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  )

  return { cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }
})
