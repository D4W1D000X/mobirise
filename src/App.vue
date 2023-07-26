<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import FeaturedServices from './components/FeaturedServices.vue';
import AutomatedSoftware from './components/AutomatedSoftware.vue';
</script>

<template >
  <Header />
  
  <section class="my-16 px-[192px] flex flex-col gap-32">
    <FeaturedServices />
    <AutomatedSoftware />
  </section>

  <Footer />
</template>

 
