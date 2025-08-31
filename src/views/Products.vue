<script setup>
import { ref, watch, onMounted } from 'vue'

const products = ref([])
const search = ref('')
const filteredProducts = ref([])
const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])
const message = ref('')   
const showMessage = ref(false)  

onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  products.value = await res.json()
  filteredProducts.value = products.value
})

watch(search, (newVal) => {
  filteredProducts.value = products.value.filter(p =>
    p.title.toLowerCase().includes(newVal.toLowerCase())
  )
})

function addToCart(product) {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  localStorage.setItem('cart', JSON.stringify(cart.value))

  message.value = `"${product.title}" added to cart successfully!`
  showMessage.value = true

  setTimeout(() => {
    showMessage.value = false
  }, 3000)
}
</script>

<template>
  <div class="products-section">
    <div class="overlay"></div> <!-- فلتر خفيف عشان النصوص تكون واضحة -->

    <div class="container mt-4 position-relative">
      <div v-if="showMessage" class="alert alert-success text-center">
        {{ message }}
      </div>

      <input v-model="search" type="text" class="form-control mb-3" placeholder="Search products..." />

      <div class="row">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-3">
          <div class="card h-100 shadow-lg">
            <img :src="product.image" class="card-img-top" style="height:200px; object-fit:contain;" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text fw-bold">$ {{ product.price }}</p>
              <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-section {
  background: url("https://www.shutterstock.com/image-photo/3d-render-fashion-shop-600nw-2338894705.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  padding: 40px 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.6); 
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2; 
}

.card {
  border-radius: 12px;
  overflow: hidden;
}
</style>
