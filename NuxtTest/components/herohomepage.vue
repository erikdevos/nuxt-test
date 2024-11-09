<template>
    <section class="hero">
        <img src="assets/resources/homepage-header.webp" alt="">
        <div class="container">
            <h1>Welcome to My Nuxt App</h1>
        </div>
    </section>
</template>

<style scoped lang="scss">
    /* Homepage specific */
    section.hero {
        display: flex;
        position: relative;

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            height: 100%;
            top: 0;
            left: auto;
            right: auto;
        }
        img {
            object-fit: cover;
            width: 100%;
            max-height: 300px;
            position: relative;
        }

        h1 {
            position: absolute;
            z-index: 2;
        }
    }
</style>