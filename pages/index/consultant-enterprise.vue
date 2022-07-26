<template>
  <div :style="{ backgroundImage: `url(${image})` }" class="bg-cover h-full pb-10 bg-opacity-10">
    <div class="max-w-6xl mx-auto p-4 lg:px-8 xl:px-0">
      <div class="max-w-2xl mx-auto mt-10">
        <div class="grid grid-cols-2 bg-white rounded-md p-6 gap-4">
          <div class="flex justify-center text-gray-600 font-semibold col-span-2 text-xl mb-4">
             {{ $t('registration-for-consultant-enterprise') }}
          </div>
          <div>
            <label for="company-name" class="block mb-1 text-sm font-medium text-gray-700"
              > {{ $t('company-name') }}</label
            >
            <input
              type="text"
              name="company-name"
              id="company-name"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="tin" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('tin') }}</label>
            <input
              type="text"
              name="tin"
              id="tin"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="area" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('area-of-agriculture-and-environment') }}</label>
            <input
              type="area"
              name="area"
              id="area"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="consultancy" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('area-of-consultancy') }}</label>
            <input
              type="consultancy"
              name="consultancy"
              id="consultancy"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
           <div class="col-span-2">
            <label for="experience" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('experience-in-agriculture-and-environment') }}</label>
            <textarea
              type="experience"
              name="experience"
              id="experience"
              rows="4"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
           <div class="col-span-2">
            <label for="region" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('region') }}</label>
            <input
              type="region"
              name="region"
              id="region"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
           <div class="col-span-2">
            <label for="resume" class="block mb-1 text-sm font-medium text-gray-700">{{ $t('upload-resume') }}</label>
            <input
              type="resume"
              name="resume"
              id="resume"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="name" class="block mb-1 text-sm font-medium text-gray-700"
              >{{ $t('contact-name') }}</label
            >
            <input
              type="name"
              name="name"
              id="name"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="phone" class="block mb-1 text-sm font-medium text-gray-700"
              >{{ $t('phone') }}</label
            >
            <input
              type="phone"
              name="phone"
              id="phone"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
         
          <div class="flex items-center mt-2">
            <input
              name="termsOfUse"
              type="checkbox"
              :value="true"
              class="h-5 w-5 text-green-600 focus:ring-green-600 border-gray-300 rounded"
            />
            <label for="termsOfUse" class="ml-2 block text-gray-600 text-base">
              {{ $t('i-agree-with') }}
              <span class="text-green-600 border-b border-green-600">{{ $t('terms-of-use') }}</span>
            </label>
          </div>
          <button class="col-span-2 rounded-md bg-gray-300 py-3 mt-6">{{ $t('register') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background from '/assets/images/background.png'
export default {
  name: 'UserInterprise',
  auth: false,
  data() {
    return {
      image: background,
    }
  },
}
</script>
