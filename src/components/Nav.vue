<template>
  <nav>
    <div class="container flex items-center justify-between">
      <img src="/Logo.png" alt="Logo">
      <router-link to="/profile" class="person">
        <img src="/svg/non-profile.svg" alt="non-profile">
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: var(--dark-primary);
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

.person {
  width: 60px;
  height: 60px;
  background-color: var(--light-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .2s linear;
}

.person:hover {
  background-color: #90b2d4;
}
</style>