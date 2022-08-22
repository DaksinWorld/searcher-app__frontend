<template>
  <div>
    <div v-if="message.text !== ''" :class="message.type" class="message">
      {{message.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {

    }
  },
  computed: {
    message() {
      return this.$store.state.message
    },
  }
}
</script>
<style scoped>

:root {
  --topHeight: 5px;
}

.message {
  bottom: 50px;
  right: 25px;
  padding: 20px;
  position: fixed;
  background-color: white;
}

.primary {
  border-top: 5px solid #7bc62f;
}

.warning {
  border-top: 5px solid #c6aa2f;
}

.danger {
  border-top: 5px solid #c62f2f;
}
</style>