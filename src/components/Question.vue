<template>
  <div class="question__card">
    <div class="question" @click="isActive = ! isActive">
      {{ question }}
    </div>
    <transition>
      <span v-if="isActive" :class="{'active': isActive}" class="answer">
        {{ answer }}
    </span>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String
    },
    answer: {
      type: String
    }
  },
  name: "Question",
  data: () => ({
    isActive: false
  })
}
</script>

<style scoped>
.question__card {
  border-radius: 35px;
  width: 500px;
  padding: 25px;
  background-color: var(--light-primary);
  transition: all .2s ease-in-out;
  margin-top: 34px;
}

.question {
  font-size: 36px;
  font-family: 'Montserrat', serif, -apple-system;
  font-weight: 700;
}

.answer {
  font-size: 24px;
  font-family: 'Montserrat', serif, -apple-system;
  color: #888888;
  font-weight: 500;
  margin-top: 25px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>