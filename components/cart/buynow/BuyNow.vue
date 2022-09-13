<template>
  <div class="md:flex gap-4 w-full">
    <div class=" xsm:w-full md:w-2/3 ">
    <Wraper title="Haridor haqida ma'lumot">
      <div class="flex justify-center items-center">
        <div class="flex flex-col my-3 w-4/5">
          <div class="relative mt-3">
            <input class=" border-2 py-0.5 px-1 w-full  outline-none border-black rounded-md " type="phone"
              maxlength="13">
            <span
              class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputPhone")}}</span>
          </div>
          <div class="relative my-4">
            <input class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
              maxlength="13">
            <span
              class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputPassword")}}</span>
          </div>
        </div>
      </div>
    </Wraper>
    <Wraper title="Yuk tashish haqida ma'lumot">
      <div class="px-4 py-4">
        <p>Tovarlarni yetkazib berish uchun qulay vaqt va joyni belgilang. O'z vaqtida yetkazib berishga harakat
          qilamiz. Standart yetkazib berish buyurtma tasdiqlangandan keyin 48 soat ichida amalga oshiriladi.</p>
        <div class="my-1">
          <label class="text-green" for="regions">Viloyat</label>
          <select class="border-2 py-0.5 px-2  outline-none border-black rounded-md w-full" id="regions" name="regions">
            <option value="qashqadaryo">Qashqadaryo</option>
            <option value="toshkent">Toshkent</option>
            <option value="namangan">Namangan</option>
            <option value="fargona">Fargona</option>
          </select>
        </div>
        <div class="my-2">
          <label class="text-red" for="regions">Tuman</label>
          <select class="border-2 py-0.5 px-2  outline-none border-black rounded-md w-full" id="regions" name="regions">
            <option value="qashqadaryo">Qashqadaryo</option>
            <option value="toshkent">Toshkent</option>
            <option value="namangan">Namangan</option>
            <option value="fargona">Fargona</option>
          </select>
        </div>
        <div>
          <label class="text-red" for="regions">Manzil</label>
          <input placeholder="Manzilingizni kiriting..." type="text" class="border-2 py-0.5 px-2  outline-none border-black rounded-md w-full">
        </div>
        <div class="mt-2">
          <label class="text-red" for="regions">Yetkazib berish uchun qo'shimcha ma'lumot</label>
          <textarea placeholder="(500 ta belgidan oshmasligi kerak.)" class="border-2 py-0.5 px-2  outline-none border-black rounded-md w-full" name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </Wraper>
    <Wraper title="To'lov haqida ma'lumot">
      <div class="px-4 py-4">
          <p>Tovarlarni yetkazib berish uchun qulay vaqt va joyni belgilang. O'z vaqtida yetkazib berishga harakat qilamiz. </p>
          <h3 class="font-semibold my-2">To'lov usuli haqida</h3>
          <div>
            <div>
            <label class="inline-flex items-center">
                <input type="radio" class="form-checkbox">
                <span class="ml-2 font-sans">Uzcart</span>
            </label>
        </div>
        <div>
            <label class="inline-flex items-center">
                <input type="radio" class="form-checkbox">
                <span class="ml-2 font-sans">Humo</span>
            </label>
        </div>
        <div>
            <label class="inline-flex items-center">
                <input type="radio" class="form-checkbox">
                <span class="ml-2 font-sans">Visa / Master Cart</span>
            </label>
        </div>
        <div>
            <label class="inline-flex items-center">
                <input type="radio" class="form-checkbox">
                <span class="ml-2 font-sans">Naqt</span>
            </label>
        </div>
          </div>
        </div>
    </Wraper>
  </div>
  <Wraper title="Buyurtmalaringiz" class=" xsm:w-full md:w-1/3  self-start">
    <Orders/>
  </Wraper>
  </div>
</template>

<script>
import Wraper from './Wraper.vue';
import Orders from './Orders.vue';
export default {
  name: "byNow",
  components: { Wraper, Orders },
}
</script>

<style scoped>

</style>