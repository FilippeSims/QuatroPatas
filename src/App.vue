<template>
<div>
  <site-header></site-header>

  <router-view></router-view>

  <site-footer></site-footer>
</div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  components: {
    'site-header' : Header,
    'site-footer' : Footer
  }

}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    background: #E5E5E5;
  }
</style>
