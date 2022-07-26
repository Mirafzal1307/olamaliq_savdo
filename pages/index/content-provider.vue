<template>
  <div :style="{ backgroundImage: `url(${image})` }" class="bg-cover h-full pb-10 bg-opacity-10">
    <div class="max-w-6xl mx-auto p-4 lg:px-8 xl:px-0">
      <div class="max-w-2xl mx-auto mt-10">
        <div class="grid grid-cols-2 bg-white rounded-md p-6 gap-4">
          <div class="flex justify-center text-gray-600 font-semibold col-span-2 text-xl mb-4">
            {{ $t('registration-for-content-provider') }}
          </div>
          <div>
            <label for="organization-name" class="block mb-1 text-sm font-medium text-gray-700">
              {{ $t('organization-name') }}</label
            >
            <input
              type="text"
              name="organization-name"
              id="organization-name"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="position" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('position-at-organization')
            }}</label>
            <input
              type="text"
              name="position"
              id="position"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="name" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('contact-name')
            }}</label>
            <input
              type="name"
              name="name"
              id="name"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div>
            <label for="phone" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('phone')
            }}</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div class="col-span-2">
            <label for="email" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('email')
            }}</label>
            <input
              type="email"
              name="email"
              id="email"
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div class="col-span-2">
            <label for="summary" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('short-summary')
            }}</label>
            <textarea
              type="text"
              name="activity-type"
              id="activity-type"
              rows="4"
              placeholder="Short summary of agricultural/ environmental experience and activities of organization in Karakalpakstan "
              class="focus:outline-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
            />
          </div>
          <div class="col-span-2">
            <label for="description" class="block mb-1 text-sm font-medium text-gray-700">{{
              $t('short-description')
            }}</label>
            <textarea
              type="text"
              name="description"
              id="description"
              rows="4"
              placeholder="Short description of organization, size, relationship to agricultural/environmental sectors in Karakalpakstan..."
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
