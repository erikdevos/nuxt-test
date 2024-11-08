<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav aria-label="Breadcrumbs">
    <ul>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.to">{{ breadcrumb.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

  <style scoped>
    ul {
      list-style: none;
      display: flex;
      gap: 8px;
      padding: 0;
      display: flex;
      margin-bottom: 3%;
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

      span {
        color: gray;
      }
      a {
        color: #3490dc;
        text-decoration: none;
      }
    }
  
  </style>
  