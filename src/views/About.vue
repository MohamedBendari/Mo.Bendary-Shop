<template>
  <div class="about-section">
    <div class="content-text">
      <h2>About Mo . Bendary Shop</h2>
      <p>
        Vue Shop is a simple e-commerce demo project built with 
        <strong>Vue 3</strong>, <strong>Vue Router</strong>, and <strong>Bootstrap 5</strong>. 
        It demonstrates the core concepts of Vue such as components, props, events, and routing.
      </p>
      <p>
        The project includes a product listing page, product details, and a shopping cart system. 
        It is designed to help beginners understand how to structure a Vue application and 
        manage state between components.
      </p>
      <p>Key features include:</p>
      <ul>
        <li>Modern responsive UI using Bootstrap 5</li>
        <li>Reusable Vue components for scalability</li>
        <li>Dynamic product rendering with mock data</li>
        <li>Basic cart functionality with add/remove options</li>
        <li>Router navigation between pages</li>
      </ul>
      <p>
        This project can be expanded with <strong>Vuex / Pinia</strong> for state management, 
        and backend integration (e.g., Firebase, Node.js, or Django REST API).
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  background: url("https://www.shutterstock.com/image-photo/3d-render-fashion-shop-600nw-2338894705.jpg") no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 40px;
}

.content-text {
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.8;
  color: #000;
  background-color: rgba(221, 219, 219, 0.69); 
  padding: 20px;
  border-radius: 10px;
}

.content-text h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.content-text ul {
  margin-left: 20px;
}
</style>
