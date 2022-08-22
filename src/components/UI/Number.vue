<template>
  <div class="number" :class="color">
    {{number}}
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    number: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.number {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, serif, -apple-system;
  font-size: 44px;
  font-weight: 800;
  color: var(--white);
  border-radius: 50%;
}

.purple {
  background: var(--purple);
}

.primary {
  background: var(--primary);
}

.blue {
  background: var(--blue);
}

</style>