<template>
    <Miku />
    <div class="app">
        <h1>EcyPink</h1>
        <Nav :navs="navs" />
        <GG>
            <hitokoto />
        </GG>
        <RouterView></RouterView>
        <Footer text="www.miku.show" icp="萌ICP备20233993号"></Footer>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import GG from './components/GG.vue';
import Miku from './components/Miku.vue';
import Hitokoto from './components/Hitokoto.vue';
import Footer from './components/Footer.vue';
import Nav from './components/Nav.vue';
import navs from './data/navs'
</script>

<style  scoped>
.app {
    max-width: 720px;
    padding: 20px;
    margin: auto;
}

a,
a:visited,
a:hover,
a:active {
    color: #39c5bb;
}
</style>