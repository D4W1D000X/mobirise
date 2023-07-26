<template>
   <div class="flex flex-col w-full ">
         <h1 class="text-primary text-[72px]">Automated Software</h1>
         <div class="w-full grid grid-cols-3 auto-cols-auto gap-8 mt-10 relative">
         <template v-for="step,index in data.softwareSteps"  >
            <div v-if="index !== data.softwareSteps.length - 1" class="flex flex-col gap-4 w-full relative after:absolute after:h-full after:w-[1px] after:bg-light after:right-[-9px]">
               <p  class="text-[#92c3be] text-[32px]">/0{{ index + 1 }}</p>
               <h2 class="text-primary text-[32px]">{{ step.title }}</h2>
               <p  class="text-[#767676] text-[20px]">{{ step.description }}</p>
            </div>
            <div v-if="index === data.softwareSteps.length - 1" class="flex flex-col items-center gap-4 w-[35%] h-full bg-primary absolute right-[-20px] bottom-[-54%] p-4">
               <h2 class="text-white text-[32px] mt-12">{{ step.title }}</h2>
               <p class="text-white text-[20px] text-center"> {{ step.description }}</p>
               <button class="h-12 font-medium bg-light px-8 w-2/3 rounded-full text-white">Create your own site!</button>

            </div>
         </template>
         </div>
   </div>
</template>

<script setup>
import data from '../data.js'
</script>