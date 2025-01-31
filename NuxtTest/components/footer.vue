<template>
    <footer class="footer">
      <p>&copy; 2024 - {{ new Date().getFullYear() }} | Erik de Vos</p>
    </footer>
  </template>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    background-color: #222;
    color: #fff;
    text-align: center;
    height: auto;
    min-height: 15rem;
    justify-content: center;
    align-items: flex-end;
    margin-top: 3rem;
  }
  </style>
  