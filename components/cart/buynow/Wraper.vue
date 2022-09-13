<template>
    <div class="shadow-sm rounded-md items-center mb-5">
        <div class="w-full 
        text-white flex 
        items-center 
        justify-center 
        font-semibold 
        font-sans 
        py-1 
        bg-green 
        rounded-t-md">
            {{title}}
        </div>
        <slot>
            
        </slot>
    </div>
</template>

<script>
    export default {
      name:"wraperComp",
      props:{
        title:{
            type: Object | String,
        }
      }  
    }
</script>

<style scoped>

</style>