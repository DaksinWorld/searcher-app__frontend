<template>
  <div>
    <DefaultLayout>
      <div class="container flex flex-col items-center">
        <h1>Profile</h1>
        <button class="btn-logout" @click="logout">Logout</button>
        <form v-if="terminals.length < 1" class="flex flex-col" @submit.prevent="onSubmit">
          <input class="input" type="text" v-model="name" placeholder="Terminal name">
          <Button class="py-2 px-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl rounded-[12px]">Create New Terminal</Button>
        </form>
        <Terminals :terminals="terminals"/>
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Terminals from '@/components/Terminals'
import axios from "axios";
import {baseUrl} from "@/assets/config";

export default {
  components: {
    DefaultLayout,
    Terminals
  },
  name: 'Home',
  data() {
    return {
      baseUrl,
      terminals: [],
      name: ''
    }
  },
  async mounted() {
    await this.checkJwt()
    await this.fetchMyTerminals()
  },
  methods: {
    async checkJwt() {
      try {
        await axios.get(baseUrl + '/auth/checkJwt', {
          headers: {
            "Authorization": `Bearer ` + localStorage.getItem('jwt')
          }
        })
      } catch (e) {
        localStorage.removeItem('jwt')
        this.$router.push('/login')
      }
    },
    async fetchMyTerminals() {
      try {
        const res = await axios.get(baseUrl + '/terminal/myTerminals',{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        })
        this.terminals = res.data
      } catch (e) {
        this.$store.commit('setMessage', {text: e.message, type: 'danger'})
      }
    },
    async onSubmit() {
      try {
        await axios.post(baseUrl+'/terminal/', {
          name: this.name
        }, {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt')
          }
        })
        await this.fetchMyTerminals()
      } catch (e) {
        this.$store.commit('setMessage', {type: 'danger', text: e.response.data.message})
      }
    },
  }
}
</script>
<style scoped>
.input {
  background-color: var(--white);
  padding: 10px 15px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  margin: 10px 0;
}
</style>
