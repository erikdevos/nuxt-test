<template>
  <section class="page-content payment-view">
    <div class="container" v-if="cartStore.cart.length">
      <h1>Order payment</h1>

      <h2>Your order total</h2>
      <div class="payment-summary">
        <div class="checkout-totals-row">
          <div class="cart-total-qty">Total items: <strong>{{ cartStore.totalItems }}</strong></div>
          <strong>
            <span class="cart-total-price-label">Total price:&nbsp;</span>
            <span class="cart-total-price-value">&euro;{{ cartStore.totalPrice }}</span>
          </strong>
        </div>
      </div>

      <div class="payment-options">
        <h2>Select your payment provider</h2>
        <ul>
          <li
            v-for="(option, index) in paymentOptions"
            :key="index"
            :class="{ active: selectedOption === index }"
            @click="selectOption(index)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
      <div class="button-bar">
        <NuxtLink to="/shopping-cart" class="btn neutral">
          &lsaquo; Back to cart
        </NuxtLink>
        <NuxtLink
          v-if="selectedOption !== null"
          to="/checkout"
          class="btn pos"
        >
          Start payment &rsaquo;
        </NuxtLink>
        <button
          v-else
          class="btn pos disabled"
          disabled
        >
          Start payment &rsaquo;
        </button>
      </div>
    </div>

    <div class="container" v-else>
      <h1>No cart available</h1>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

// List of payment options
const paymentOptions = ['iDeal', 'Paypal', 'Creditcard', 'iDeal', 'Bancontact', 'Sofort'];

// Track the selected payment option
const selectedOption = ref(null);

// Function to handle selection
const selectOption = (index) => {
  selectedOption.value = index;
};
</script>
  
  <style scoped lang="scss">

  .checkout-totals-row {
    display: grid;
    margin-bottom: 1.5rem;
  }

  .payment-view {
    margin-top: 3rem;
    h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    } 
    h2 {
      margin-bottom: 1rem;
    }
  }
  
  .button-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .payment-options {
    margin-bottom: 3rem;

    ul {
      display: grid;
      list-style-type: none;
      grid-template-columns: repeat(1fr);
      gap: 0.5rem;
      @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(3, minmax(0px, 1fr));
        gap: 1rem;
      }

      li {
        border: solid 1px gray;
        border-radius: $border-radius-label;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        text-align: center;
        background-color: lightgray;
        cursor: pointer;
        @media only screen and (min-width: 600px) {
          padding: 1rem;
        }

        &:hover {
          background-color: $color-primary;
          color: $color-white;
          border-color: $color-primary;
        }

        &.active {
          background-color: $color-primary;
          color: $color-white;
          border-color: $color-primary;   
        }
      }

    }
  }
  
  </style>
  