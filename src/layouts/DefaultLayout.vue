<template>
  <div>
    <Nav/>
    <div class="mt-[100px]">
      <slot/>
    </div>
    <Message/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Message from '@/components/Message'

export default {
  components: {
    Nav,
    Message
  },
  name: "DefaultLayout"
}
</script>

<style scoped>

</style>