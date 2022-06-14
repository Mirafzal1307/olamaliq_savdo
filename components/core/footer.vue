<template>
  <div class="bg-green-900 mt-20 relative">
    <div
      class="
        max-w-6xl
        mx-auto
        grid
        lg:grid-cols-4
        grid-cols-1
        lg:px-0
        px-4
        gap-10
        text-white
        pt-10
        pb-10
      "
    >
      <div class="block">
        <div class="font-semibold text-base pb-6">Business Development Platform</div>
        <div class="text-xs leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget
          risus sollicitudin pellentes queet non erat. Maecenas nibh dolor.
        </div>
      </div>
      <div class="block">
        <div class="grid justify-end">
          <div class="font-semibold text-base pb-6">Contacts</div>
          <div class="text-xs space-y-3">
            <div class="leading-5">
              31, Islam Karimov st, Nukus, Autonom Republic of Karakalpakstan, Uzbekistan,
            </div>
            <p>+99890 123 45 67</p>
            <p>+99871 111 11 11</p>
            <p>indo@gggi.com</p>
          </div>
        </div>
      </div>
      <div class="grid lg:justify-end justify-start">
        <div class="font-semibold text-base pb-5">Useful Links</div>
        <div class="grid grid-cols-2 text-xs gap-3">
          <div v-for="(item, index) in footer" :key="index">
            <router-link :to="{ path: localePath('/') }" class="flex items-center">
              <i class="bx bx-chevron-right text-white text-lg"></i>
              <p>{{ item.title }}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="grid jlg:justify-end justify-start">
          <div class="font-semibold text-base pb-6">Services</div>
          <div class="space-y-3 text-xs">
            <div v-for="(service, index) in services" :key="index">
              <router-link :to="{ path: localePath('/') }" class="flex items-center gap-3">
                <p>{{ service.title }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-start space-x-4">
        <img src="~/assets/images/socials/facebook.png" class="w-8" />
        <img src="~/assets/images/socials/twitter.png" class="w-8" />
        <img src="~/assets/images/socials/google.png" class="w-8" />
        <img src="~/assets/images/socials/pinterest.png" class="w-8" />
        <img src="~/assets/images/socials/linkedin.png" class="w-8" />
      </div>
    </div>
    <div class="border-t border-white py-5"></div>
    <div class="flex items-center justify-center space-x-5 text-white text-sm pb-10">
      <div>Privacy Policy</div>
      <div>Sitemap</div>
      <div>Terms of Use</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footer: [
        { title: 'Home', route: '/' },
        { title: 'Agri-business', route: '/' },
        { title: 'About', route: '/about' },
        { title: 'Agri-finance', route: '/' },
        { title: 'Tutorials', route: '/' },
        { title: 'Agri-market', route: '/' },
        { title: 'Advisory', route: '/advisory' },
      ],
      services: [
        { title: 'Consultation', route: '/' },
        { title: 'Market price', route: '/' },
        { title: 'E-learning', route: '/' },
        { title: 'How to open business', route: '/' },
      ],
    }
  },
}
</script>
