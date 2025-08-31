<template>
  <div class="home-container text-center bg-dark text-white">
    <h1>Welcome to Mo . Bendary Shop</h1>
    <p class="lead">The best place to buy amazing products.</p>
    <img src="@/assets/mp_photo.jpg" alt="My Photo" class="profile-img" />
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-img {
  margin-top: 50px;
  width: 400px;
  border-radius: 15px;
}
</style>
