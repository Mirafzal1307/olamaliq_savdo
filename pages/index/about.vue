<template>
  <div>
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 xl:px-0 px-4 lg:my-12 my-4">
      <div class="text-2xl font-semibold text-gray-700">{{ about.attributes.title }}</div>
      <div v-html="about.attributes.content"></div>
    </div>
    <div class="bg-green-900 my-10 py-10">
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 xl:px-0 px-4">
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="grid content-center">
            <div class="lg:text-4xl text-2xl font-semibold text-white">
              We are ready to corporate with service provider
            </div>
            <div class="text-white my-6 mr-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-white flex items-center">
                <i class="bx bx-check-circle text-lg text-white"></i>
                <div class="ml-2">Proper Take Care</div>
              </div>
              <div class="text-white flex items-center">
                <i class="bx bx-check-circle text-lg text-white"></i>
                <div class="ml-2">Experts</div>
              </div>
              <div class="text-white flex items-center">
                <i class="bx bx-check-circle text-lg text-white"></i>
                <div class="ml-2">Community with farmers</div>
              </div>
              <div class="text-white flex items-center">
                <i class="bx bx-check-circle text-lg text-white"></i>
                <div class="ml-2">Marketing</div>
              </div>
            </div>
            <div class="lg:mt-5 my-5">
              <button
                class="text-white focus:outline-none text-sm bg-green-500 rounded-md py-3 px-5"
              >
                Discover more
              </button>
            </div>
          </div>
          <div class="">
            <img src="~/assets/images/about.png" class="rounded-md" alt="about" />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 xl:px-0 px-4">
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-gray-700 text-2xl">
          Working <span class="text-green-800">Process</span>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <div class="rounded-md border border-gray-200 shadow-md bg-white p-8">
            <div class="flex items-center justify-between">
              <img src="~/assets/images/consultation.png" class="rounded-md" alt="about" />
              <p class="text-gray-200 text-5xl font-extrabold">1</p>
            </div>
            <div class="text-gray-700 font-semibold text-lg mb-4 mt-8">Consultation</div>
            <div class="text-sm text-gray-500">
              Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum
              has been the industry's standard.
            </div>
          </div>
          <div class="rounded-md border border-gray-200 shadow-md bg-white p-8">
            <div class="flex items-center justify-between">
              <img src="~/assets/images/recommendation.png" class="rounded-md" alt="about" />
              <p class="text-gray-200 text-5xl font-extrabold">2</p>
            </div>
            <div class="text-gray-700 font-semibold text-lg mb-4 mt-8">Recommendation</div>
            <div class="text-sm text-gray-500">
              Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum
              has been the industry's standard.
            </div>
          </div>
          <div class="rounded-md border border-gray-200 shadow-md bg-white p-8">
            <div class="flex items-center justify-between">
              <img src="~/assets/images/financial.png" class="rounded-md" alt="about" />
              <p class="text-gray-200 text-5xl font-extrabold">3</p>
            </div>
            <div class="text-gray-700 font-semibold text-lg mb-4 mt-8">Financial support</div>
            <div class="text-sm text-gray-500">
              Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum
              has been the industry's standard.
            </div>
          </div>
          <div class="rounded-md border border-gray-200 shadow-md bg-white p-8">
            <div class="flex items-center justify-between">
              <img src="~/assets/images/management.png" class="rounded-md" alt="about" />
              <p class="text-gray-200 text-5xl font-extrabold">4</p>
            </div>
            <div class="text-gray-700 font-semibold text-lg mb-4 mt-8">Management support</div>
            <div class="text-sm text-gray-500">
              Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum
              has been the industry's standard.
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div class="grid grid-cols-2 col-span-2 gap-4">
            <div class="font-semibold text-gray-700 text-2xl col-span-2">
              <span class="text-green-800">Contact</span> us
            </div>
            <div>
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                  p-3
                "
                placeholder="Name"
              />
            </div>
            <div>
              <label for="name" class="sr-only">Last name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                  p-3
                "
                placeholder="Last name"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                type="text"
                name="email"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                  p-3
                "
                placeholder="Email"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                  p-3
                "
                placeholder="Phone"
              />
            </div>
            <div class="col-span-2">
              <label for="email" class="sr-only">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                  p-3
                "
                placeholder="Subject"
              />
            </div>
            <div class="col-span-2">
              <label for="comment" class="sr-only">Message</label>
              <div class="mt-1">
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  placeholder="Write message"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    p-3
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                  "
                />
              </div>
            </div>
            <div class="flex col-start-2 justify-end w-auto">
              <button class="text-white focus:outline-none bg-green-700 rounded-md py-2 px-5">
                Submit now
              </button>
            </div>
          </div>
          <div class="bg-yellow-50 rounded-md p-5">
            <div class="text-gray-700 font-semibold text-2xl">Get in touch</div>
            <div class="text-gray-500 text-sm my-5">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum
              has been the industry.
            </div>
            <div class="space-y-6">
              <div class="flex items-center py-2 px-5 bg-green-700 rounded-md text-white">
                <i class="bx bx-phone text-lg"></i>
                <p class="text-sm ml-2">+99870 123 4567</p>
              </div>
              <div class="flex items-center py-2 px-5 bg-white rounded-md text-gray-700">
                <i class="bx bx-envelope text-green-700 text-lg"></i>
                <p class="text-sm ml-2">info@ggi.com</p>
              </div>
              <div class="flex items-center py-2 px-5 bg-white rounded-md text-green-700">
                <i class="bx bx-map text-xl"></i>
                <p class="text-sm ml-2">
                  31, Islam Karimov st, Nukus,<br />
                  Autonom Republic of Karakalpakstan, Uzbekistan,
                </p>
              </div>
              <div class="flex items-center justify-center space-x-4">
                <img src="~/assets/images/socials/facebook.png" class="w-8" />
                <img src="~/assets/images/socials/twitter.png" class="w-8" />
                <img src="~/assets/images/socials/google.png" class="w-8" />
                <img src="~/assets/images/socials/pinterest.png" class="w-8" />
                <img src="~/assets/images/socials/linkedin.png" class="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <partners-swiper :partners="dataPartners"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PartnersSwiper from '~/components/swipers/partners-swiper.vue'
import { actions, getters } from '~/utils/store_schema'
const _page = 'about'
const { get } = actions(_page)
export default {
  name: 'About',
  auth: false,
  data() {
    return {
      about: {
        attributes: {
          title: '',
          description: '',
        },
      }
    }
  },
  components: {
    PartnersSwiper,
  },
  computed: {
    ...mapGetters(getters(_page)),
    ...mapGetters(['dataPartners']),
  },
  mounted() {
    this.fetchDirectories().then(() => {
      this.fetchData()
    })
  },
  methods: {
    async fetchData() {
      await this.$store
        .dispatch(get, {
          link: '/about',
          query: {
            populate: '*',
            locale: this.$i18n.locale,
          }
        })
        .then((res) => {
          console.log('about', res)
          this.about = res.data.data
        })
    },
    async fetchDirectories() {
      await this.$store.dispatch('getPartners', {
        populate: '*',
        locale: this.$i18n.locale,
      })
    }
  },
}
</script>
