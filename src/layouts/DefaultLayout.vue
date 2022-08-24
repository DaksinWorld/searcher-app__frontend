<template>
  <div>
    <Nav/>
    <div class="mt-[100px] main">
      <slot/>
    </div>
    <Footer/>
    <Message/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Message from '@/components/Message'

export default {
  components: {
    Nav,
    Footer,
    Message
  },
  name: "DefaultLayout"
}
</script>

<style scoped>
.main {
  min-height: calc(100vh - 266px);
}
</style>