<template>
  <div v-if="terminals">
    <div class="card w-full flex flex-col items-start" v-for="terminal in terminals" :key="terminal._id">
      <div class="flex items-center">
        <div class="color">
          <span>{{terminal.name}}</span>
        </div>
        <span class="last-change">
          {{new Date(terminal.lastChange).getDate()}}.{{new Date(terminal.lastChange).getMonth() + 1}}.{{new Date(terminal.lastChange).getFullYear()}} {{new Date(terminal.lastChange).getHours()}}:{{new Date(terminal.lastChange).getMinutes()}}
        </span>
      </div>
      <router-link :to="`/terminal/${terminal._id}`" class="button">
        <button class="btn-open">Open</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {baseUrl} from "@/assets/config";

export default {
  name: "Terminals",
  props: {
    terminals: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      baseUrl
    }
  },
  async mounted() {
    if(!localStorage.getItem('jwt')) {
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  min-width: 400px;
  border-radius: 12px;
  padding: 15px;
  border: 1px solid #c4c4c4;
}

.color {
  padding: 5px 12px;
  color: #ffffff;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  width: auto;
  border-radius: 5px;
  background-color: #95c664;
}

.last-change {
  margin-left: 15px;
  font-weight: 500;
  font-family: 'Montserrat', Serif, SansSerif, -apple-system;
}

.last-change:before {
  content: 'Last Launch: ';
}

.btn-open {
  padding: 7px 15px;
  background: var(--primary);
  color: var(--white);
  margin-top: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  transition: background-color .2s ease-in-out;
}

.btn-open:hover {
  background: var(--dark-primary);
}
</style>