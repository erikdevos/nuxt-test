<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav class="breacrumbs-nav" aria-label="Breadcrumbs">
    <ul>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.to">{{ breadcrumb.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

  <style scoped>
  .breacrumbs-nav {
    margin-top: 1rem;
    ul {
      list-style: none;
      display: flex;
      gap: 8px;
      padding: 0;
      display: flex;
      margin-bottom: 1rem;
    }

    li {
      display: inline-flex;
      font-size: 14px;

      &:not(:last-of-type):after {
        margin-left: 0.4rem;
        content: ">";
        display: inline-block;
        position: relative;
        color: gray;
      }

      &:last-of-type {
        color: gray;
        a {
          color: inherit;
        }
      }

      span {
        color: gray;
      }
      a {
        color: #3490dc;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  </style>
  