<template>
    
    <section class="hero">
        <img src="assets/resources/homepage-header.webp" alt="">
        <div class="container">
            <h1>Welcome to My Nuxt App</h1>
        </div>
    </section>

    <section>
        <div class="container">
            <h2>This is acutally quite cool</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non aliquet eros. Aenean euismod ligula ex, in sollicitudin lacus accumsan eu. Vestibulum cursus, dolor quis dictum tempor, neque elit facilisis elit, vitae convallis ex lacus vestibulum magna. Maecenas sodales orci pharetra justo viverra suscipit. Nulla sagittis, sem id imperdiet tristique, erat eros ultrices quam, sed vestibulum lacus libero at turpis. Morbi ac dolor eget mi euismod porta eu euismod sapien. Pellentesque id enim quis erat vulputate auctor eu ac tortor.</p>
            <p>Phasellus malesuada blandit velit at aliquet. Morbi rutrum orci eget dolor imperdiet lacinia. Donec vehicula molestie sem, eu vestibulum enim ornare vitae. Sed felis risus, bibendum et condimentum sit amet, efficitur sit amet elit. Donec condimentum leo sit amet iaculis pulvinar. Fusce fringilla, leo volutpat consequat consectetur, magna erat aliquet justo, ac bibendum sem eros et ex. Cras tincidunt suscipit tortor, id vehicula lacus efficitur eget. Nunc ornare faucibus rhoncus. Nunc ut lacus neque. Fusce lobortis augue vitae tincidunt gravida.</p>
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