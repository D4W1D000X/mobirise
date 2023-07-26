<template>
   <div class="w-1/3 bg-tertiary rounded-3xl p-12 pb-24 flex flex-col gap-6 group hover:scale-[105%] ease-linear duration-[250ms] relative">
      <div class="flex flex-row gap-1 group-hover:hidden">
         <div class="bg-[#92c3be] h-4 w-4 rounded-full"></div>
         <div class="bg-[#ffffff] h-4 w-4 rounded-full"></div>
         <div class="bg-[#92c3be] h-4 w-4 rounded-full"></div>
      </div>
      <div class="group-hover:flex flex-row gap-1 hidden">
         <div class="w-0h-0 border-x-[9px] border-x-transparent border-b-[15px] border-b-[#92c3be]"></div>
         <div class="w-0h-0 border-x-[9px] border-x-transparent border-b-[15px] border-b-[#ffffff]"></div>
         <div class="w-0h-0 border-x-[9px] border-x-transparent border-b-[15px] border-b-[#92c3be]"></div>
      </div>
      <h1 class="font-semibold text-white text-[32px]">{{title}}</h1>
      <p class="text-light text-[20px] text-wrap">{{description}}</p>

      <button class="h-12 w-1/2 font-medium bg-[#91c2be] rounded-full text-white absolute bottom-5">Learn More ></button>

   </div>
</template>

<script setup>
const {title , description} = defineProps(["title", "description"])
</script>