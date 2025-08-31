<script setup>
import { reactive, computed, watch } from 'vue'

const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"))

const increase = (item) => { 
  item.qty = (item.qty || 1) + 1
}
const decrease = (item) => { 
  if(item.qty > 1) item.qty-- 
}
const removeItem = (id) => {
  const idx = cart.findIndex(i => i.id === id)
  if (idx > -1) cart.splice(idx, 1)
}

const total = computed(() => 
  cart.reduce((sum, i) => sum + (parseFloat(i.price) || 0) * (i.qty || 1), 0).toFixed(2)
)

// أي تعديل على cart يتسجل تلقائي
watch(cart, (val) => {
  localStorage.setItem("cart", JSON.stringify(val))
}, { deep: true })
</script>

<template>
  <div class="cart-page">
    <div class="container mt-4 content-box">
      <h2>Your Cart</h2>
      <table class="table table-striped">
        <thead>
          <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.title }}</td>
            <td>${{ parseFloat(item.price).toFixed(2) }}</td>
            <td>
              <button class="btn btn-sm btn-secondary" @click="decrease(item)">-</button>
              <span class="mx-2">{{ item.qty }}</span>
              <button class="btn btn-sm btn-secondary" @click="increase(item)">+</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="mt-3">Total: ${{ total }}</h4>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  background: url("https://www.shutterstock.com/image-photo/3d-render-fashion-shop-600nw-2338894705.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 40px 0;
}

.content-box {
  background: rgba(255, 255, 255, 0.85); 
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  color: #000; 
}
</style>
