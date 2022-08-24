<template>
  <footer>
    <div class="container">
      <div class="flex justify-between">
        <div class="logo">
          <img src="/Logo.png" alt="Logo">
        </div>
        <div class="flex items-center ml-5 text-white text">
          <span>©Bitcoin Searcher {{new Date(Date.now()).getFullYear()}}</span>
          <router-link class="ml-3" to="/terms-of-service">Terms Of Service</router-link>
          <router-link class="ml-3" to="/privacy-policy">Privacy Policy</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  margin-top: 50px;
  width: 100%;
  padding: 25px 0px;
  background-color: var(--dark-primary);
}

text {
  font-family: 'Montserrat', serif, -apple-system;
}

</style>