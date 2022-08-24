<template>
  <div v-if="profile && terminals">
    <DefaultLayout>
      <div v-if="profile.isActivated !== false" class="container flex flex-col items-center">
        <button class="btn-logout" @click="logout">Logout</button>
        <form v-if="terminals.length < 1" class="flex flex-col" @submit.prevent="onSubmit">
          <input class="input" type="text" v-model="name" placeholder="Terminal name">
          <button class="py-2 px-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl rounded-[12px]">Create New Terminal</button>
        </form>
        <span v-if="profile.amount" class="text-[18px] font-bold mb-[15px]">${{profile.amount.toFixed(2)}} (You need to have at least 150$ to withdraw your money)</span>
        <button class="btn-logout disabled:bg-gray-300" v-if="profile.amount < 150">
          <router-link to="/withdraw-page">
            Withdraw
          </router-link>
        </button>
        <Terminals :terminals="terminals"/>
      </div>
      <div v-else class="container text-center">
        <h1 class="text-[36x] font-bold">You need activate your account, before using terminals</h1>
        <div>
          <input type="text" class="input" placeholder="Activation Key" v-model="activationKey">
          <button class="btn-logout" @click="activate">Activate</button>
        </div>
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
      name: '',
      profile: [],
      activationKey: ''
    }
  },
  async mounted() {
    await this.checkJwt()
  },
  methods: {
    async checkJwt() {
      try {
        const res = await axios.get(baseUrl + '/auth/1', {
          headers: {
            "Authorization": `Bearer ` + localStorage.getItem('jwt')
          }
        })
        this.profile = res.data
        await this.fetchMyTerminals()
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
    logout() {
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    },
    async activate() {
      try {
        await axios.post(baseUrl+'/activation/' + this.activationKey, {}, {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt')
          }
        })
        await this.checkJwt()
      } catch (e) {
        this.$store.commit('setMessage', {type: 'danger', text: e.response.data.message})
      }
    }
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

.btn-logout {
  padding: 7px 15px;
  background: var(--primary);
  color: white;
  font-weight: 700;
  font-family: 'Montserrat', serif, -apple-system;
  margin: 15px;
  border-radius: 5px;

  transition: background-color .3s ease-in-out;
}

.btn-logout:hover {
  background-color: var(--dark-primary);
}
</style>
