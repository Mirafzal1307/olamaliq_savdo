<template>
  <div>
    <div class="bg-green p-7 text-white text-center mt-7">
      <Container>
        <div class="flex w-full content-between xsm:hidden lg:block">
          <div class="flex flex-col">
            <h3 class="font-semibold text-lg mr-auto">{{ $t('footer.service') }}</h3>
            <div class="flex gap-1 my-1">
              <img src="~/assets/icons_svg/Phone.svg" alt="phone" />
              <span class="text-sm">+998 (94) 412 70 70</span>
            </div>
            <div class="flex gap-1">
              <img src="~/assets/icons_svg/Calendar.svg" alt="phone" />
              <span class="text-sm">09:00 - 20:00 ({{ $t('footer.time') }})</span>
            </div>
          </div>
          <div class="flex flex-col ml-auto w-1/4">
            <h3 class="font-semibold text-lg mr-auto">
              <span class="underline">Olmaliq</span> Savdo
            </h3>
            <div class="flex gap-1 text-left w-3/4 my-1">
              <img src="~/assets/icons_svg/Location.svg" alt="phone" />
              <span class="text-sm"
                >Olmaliq shahar, Kamalak tumani, Amir Timur ko`chasi 29-a uy</span
              >
            </div>
          </div>
        </div>
      </Container>
    </div>
  
  </div>
</template>

<script>
import Container from '../Container.vue'
import FooterNavbar from './FooterNavbar.vue'
export default {
  name: 'Footer',
  components: { Container, FooterNavbar },
}
</script>

<style scoped>
</style>