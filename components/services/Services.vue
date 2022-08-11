<template>
    <div>
        <h2 class="text-lg font-semibold text-center mb-9 mt-4">{{$t('arzon')}}</h2>
        <div class="flex justify-between items-center gap-9 ">
            <div v-for="service in services" :key="service.id"
                class="service flex flex-col items-center gap-3 justify-around 1/4">
                <div class="circle flex items-center justify-center bg-green w-10 h-10 rounded-full">
                    <img :src="require(`~/assets/icons_svg/${service.image}`)" alt="ddd" class="" />
                </div>
                <div class="text text-center">
                    <h3 class="text-dark-blue font-semibold text-md">{{ service.title }}</h3>
                    <p class="text-sm">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Services",
    data() {
        return {
            services: [
                {
                    id: 1,
                    image: 'Dostavka.svg',
                    title: 'Bepul yetkazib berish',
                    desc: 'With big discounts, free delivery and a dedicated support specialist.'
                },
                {
                    id: 2,
                    image: 'Click.svg',
                    title: 'Bo’lib to’lash ',
                    desc: 'Up to 3 years on-site warranty available for your peace of mind.',

                },
                {
                    id: 3,
                    image: 'Badge.svg',
                    title: '1 yil garantiya',
                    desc: 'Up to 70% off new Products, you can be sure of the best price.'
                },
                {
                    id: 4,
                    image: 'Connection.svg',
                    title: 'Qo’llab quvatlash xizmati',
                    desc: 'Up to 70% off new Products, you can be sure of the best price.'
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>