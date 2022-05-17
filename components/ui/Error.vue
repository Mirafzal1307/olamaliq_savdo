<template>
  <div class="h-full pt-16 pb-12 flex flex-col bg-white">
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <NuxtLink to="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img class="h-14 w-auto" src="/logo-with-name.svg" alt="Akfa university AIS" />
        </NuxtLink>
      </div>
      <div class="py-12">
        <div class="text-center">
          <p class="text-sm font-semibold text-red-600 uppercase tracking-wide">
            {{ error.statusCode }} error
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            {{ error.message }}.
          </h1>
          <p v-if="error.statusCode === 500" class="mt-2 text-base text-gray-500">
            Sorry, we will try to fix this issue as soon as possible.
          </p>
          <div class="mt-6">
            <NuxtLink to="/" class="text-base font-medium text-red-600 hover:text-red-500">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    <!-- <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Contact Support</a
        >
        <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true"></span>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
      </nav>
    </footer> -->
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 500, message: 'Server error' }),
    },
  },
}
</script>

<style></style>
