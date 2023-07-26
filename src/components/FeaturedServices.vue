<template>
   <div class="flex flex-col w-full ">
      <h1 class="text-primary text-[72px]">Our featured services</h1>
      <div class="flex flex-row gap-4 justify-center mt-10">
         <ServiceTile v-for="service,index in data.services" :key="index" :title="service.title" :description="service.description"/>
      </div>
   </div>
</template>

<script setup>
import ServiceTile from './ServiceTile.vue';
import data from '../data.js'
</script>