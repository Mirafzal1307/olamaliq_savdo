<template>
    <div>
        <h2 class="text-lg font-semibold text-center mb-9 mt-4">{{$t('services.arzon')}}</h2>
        <div class="flex justify-between items-center gap-9 ">
            <div v-for="service in services" :key="service.id"
                class="service flex flex-col items-center gap-3 justify-around 1/4">
                <div class="circle flex items-center justify-center bg-green w-10 h-10 rounded-full">
                    <img :src="require(`~/assets/icons_svg/${service.image}`)" alt="ddd" class="" />
                </div>
                <div class="text text-center">
                    <h3 class="text-dark-blue font-semibold text-md">{{ $t('service.title') }}</h3>
                    <p class="text-sm">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import constants from '~/utils/constants'
export default {
    name: "Services",
    data() {
        return {
            services: constants.services,
        }
    }
}
</script>
