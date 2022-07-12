<template>
  <div class="max-w-6xl sm:px-6 lg:px-8 xl:px-0 px-4 mx-auto lg:mt-12 mt-4">
    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
      <div class="col-span-2">
        <div class="h-auto cursor-pointer w-full">
          <iframe
            width="100%"
            height="345"
            loading="lazy"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameborder="0"
            allowfullscreen
            class="responsive-iframe rounded-md"
          />
        </div>
        <div class="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div class="flex space-x-6">
            <p>Sep 6 -2021</p>
            <p>By admin</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bx bx-chat text-lg"></i>
            <p>Comments 10</p>
          </div>
        </div>
        <div class="border-b border-gray-300 pb-6">
          <div class="my-6 text-gray-700 font-semibold text-4xl">
            Ask The Agronomists: Lawncare Tips From The Experts
          </div>
          <p class="text-sm text-gray-500 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget
            risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum
            a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque
            tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec
            sapien convallis vulputate rhoncus vel dui.
          </p>
          <br />
          <p class="text-sm text-gray-500 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget
            risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum
            a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque
            tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec
            sapien convallis vulputate rhoncus vel dui.
          </p>
          <br />
          <p class="text-sm text-gray-500 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget
            risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum
            a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
            posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque
            tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec
            sapien convallis vulputate rhoncus vel dui.
          </p>
        </div>
        <div class="my-6 lg:flex block items-center justify-between">
          <div class="flex items-center space-x-4">
            <p class="text-gray-600 text-sm">Share:</p>
            <img src="~/assets/images/socials/facebook.png" class="w-8" />
            <img src="~/assets/images/socials/twitter.png" class="w-8" />
            <img src="~/assets/images/socials/google.png" class="w-8" />
            <img src="~/assets/images/socials/pinterest.png" class="w-8" />
            <img src="~/assets/images/socials/linkedin.png" class="w-8" />
          </div>
          <div class="flex items-center lg:mt-0 mt-6 text-xs space-x-4">
            <div class="rounded-md bg-yellow-100 text-gray-600 py-1 px-2">Landscaping</div>
            <div class="rounded-md bg-yellow-100 text-gray-600 py-1 px-2">Garden</div>
            <div class="rounded-md bg-yellow-100 text-gray-600 py-1 px-2">Projects</div>
          </div>
        </div>
        <div class="lg:flex block items-center justify-between">
          <div class="flex items-center space-x-3 my-4">
            <img
              src="~/assets/images/about.png"
              class="rounded-md w-28 h-20 object-cover"
              alt="about"
            />
            <div class="grid content-between text-gray-600 text-sm h-14">
              <p class="">16 Garden design ideas to do</p>
              <p>Sep 12, 2021</p>
            </div>
          </div>
          <button
            class="
              flex
              lg:justify-start
              justify-end
              items-center
              border
              rounded-md
              border-green-700
              py-2
              px-3
              text-green-700 text-sm
              focus:outline-none
            "
          >
            Newer post
            <i class="bx bx-chevrons-right text-xl text-green-700 ml-1"></i>
          </button>
        </div>
        <div class="text-gray-700 font-semibold text-2xl my-6">Leave a comment</div>
        <div class="grid grid-cols-2 gap-5">
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
          <div class="flex justify-start w-auto mt-4">
            <button class="text-white focus:outline-none bg-green-700 rounded-md py-2 px-5">
              Post comment
            </button>
          </div>
        </div>
      </div>
      <div class="space-y-5">
        <div class="bg-white rounded-md border border-gray-100 shadow-md p-5 lg:mt-0 mt-6">
          <div class="text-gray-700 font-semibold text-xl">Useful materials</div>
          <div class="flex items-center justify-between rounded-md bg-green-700 p-3 my-4">
            <div class="flex items-center space-x-3">
              <i class="bx bx-file text-white text-xl"></i>
              <p class="text-base text-white">Guidelenes</p>
            </div>
            <div><i class="bx bx-download text-white text-xl"></i></div>
          </div>
          <div class="flex items-center justify-between rounded-md bg-yellow-100 p-3">
            <div class="flex items-center space-x-3">
              <i class="bx bxs-file-pdf text-gray-700 text-2xl"></i>
              <p class="text-base text-gray-700">Analitical documents</p>
            </div>
            <div><i class="bx bx-download text-gray-700 text-xl"></i></div>
          </div>
        </div>
        <div class="bg-white rounded-md border border-gray-100 shadow-md p-5">
          <div class="text-gray-700 font-semibold text-xl">Related videos</div>
          <div class="flex items-center space-x-3 my-4">
            <img
              src="~/assets/images/about.png"
              class="rounded-md w-28 h-20 object-cover"
              alt="about"
            />
            <div class="grid content-between text-gray-600 text-sm h-14">
              <p class="">16 Garden design ideas to do</p>
              <p>Sep 12, 2021</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 my-4">
            <img
              src="~/assets/images/about.png"
              class="rounded-md w-28 h-20 object-cover"
              alt="about"
            />
            <div class="grid content-between text-gray-600 text-sm h-14">
              <p class="">Spring Lawn Care Tips</p>
              <p>Sep 12, 2021</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 my-4">
            <img
              src="~/assets/images/about.png"
              class="rounded-md w-28 h-20 object-cover"
              alt="about"
            />
            <div class="grid content-between text-gray-600 text-sm h-14">
              <p class="">How to Make Fresh Flowers</p>
              <p>Sep 12, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ELearningDetails',
  auth: false,
}
</script>

<style scoped>
/* .responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
} */
</style>
