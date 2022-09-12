<template>
  <div>
    <Cart />
  </div>
</template>

<script>
import Cart from '~/components/cart/Cart.vue'
import PaymentModal from '~/components/cart/payments/PaymentModal.vue'
export default {
  name: 'CartRoute',
  components: { Cart, PaymentModal },
}
</script>

<style scoped>
</style>