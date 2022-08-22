<template>
  <div class="console flex flex-col justify-between">
    <div class="lines" id="lines">
      <div v-for="line in lines" :key="line.id">
      <span :class="`color-${line.color}`">
        <span class="green">dir/{{ terminalName }}/script-searching.java: $</span><span class="text">{{
          line.text
        }}</span>
      </span>
      </div>
    </div>
    <div class="flex">
      <div class="input flex w-full">
        <label class="mr-2">> </label>
        <input v-model="inputValue" type="text" v-on:keyup.enter="onEnter">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {baseUrl} from "@/assets/config";

export default {
  name: "Console",
  data() {
    return {
      lines: [
        {text: 'Hi, Great to see you again!', color: 'black', id: Math.floor(Math.random() * 124059)},
      ],
      inputValue: '',
      baseUrl,
      terminalName: '',
      amount: ''
    }
  },
  async mounted() {
    this.initialize()
    await this.getTerminalName()
    await this.getOne()
  },
  methods: {
    initialize() {
      setTimeout(() => {
        this.lines.push({
          text: 'type: "@start searching btc" to continue.',
          color: 'black',
          id: Math.floor(Math.random() * 124059)
        })
      }, 2000)
    },
    onEnter() {
      const inputVal = this.inputValue

      if (inputVal.trim() === '@start searching btc') {
        this.runScript()
      } else {
        const obj = {
          text: `Error: '${inputVal}' - undefined command`,
          color: 'red',
          id: Math.floor(Math.random() * 124059)
        }
        this.lines.push(obj)
        this.inputValue = ''
      }
    },
    async runScript() {
      const res = await this.fetchData()
      const data = res.data

      if (data.length > 0) {

        let i = 0;

        const el = document.getElementById('lines')

        const handle = setInterval(async () => {
          if (data.length !== i) {
            this.lines.push({text: data[i].text, color: 'black', id: Math.floor(Math.random() * 125039)})

            if (el.scrollHeight - el.scrollTop < 660 * 3) {
              el.scrollTo(0, el.scrollTop + 96)
            }
            i++
          }

          if (data.length === i) {
            clearInterval(handle)
            await this.getOne()
            this.runScript()
          }
        }, 30)
      }
    },
    log(bitcoinAddress, amount) {
      this.lines.push({
        text: `${bitcoinAddress} - ${amount}`
      })
    },
    async fetchData() {
      try {
        const res = await axios.post(baseUrl + '/terminal/start-searching', {
          id: this.$route.params.id
        }, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
        })
        return res
      } catch (e) {
        this.$store.commit('setMessage', {text: e.response.data.message, type: 'danger'})
        if(e.response.data.message.toLowerCase() === 'calm down, please') {
          setTimeout(() => {
            this.runScript()
          }, 10 * 1000)
        }
      }
    },
    async getTerminalName() {
      try {
        const res = await axios.get(baseUrl + '/terminal/getName/' + this.$route.params.id, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
        })
        this.terminalName = res.data.name
      } catch (e) {
        this.$store.commit('setMessage', {text: e.message, type: 'danger'})
      }
    },
    async getOne() {
      try {
        const res = await axios.get(baseUrl + '/auth/1', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
        })

        this.$emit('amount', res.data.amount)
      } catch (e) {
        this.$store.commit('setMessage', {text: e.response.data.message, type: 'danger'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.console {
  width: 50%;
  height: 700px;
  background-color: var(--light-primary);
  border-radius: 20px;
  padding: 15px 20px;
  margin-bottom: 10px;
}

.color-black {
  color: black;
}

.color-red {
  font-weight: 600;
  color: #860808;
}

.green {
  color: var(--green);
  font-weight: 700;
}

.text {
  font-family: 'Source Code Pro', serif;
  font-weight: 500;
}

.lines {
  max-height: 600px;
  overflow-y: scroll;
}

.lines::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.lines::-webkit-scrollbar-thumb {
  border-radius: 20px !important;
  background-color: var(--primary);
}

.lines::-webkit-scrollbar-track {
  background-color: var(--dark-primary);
  border-radius: 20px !important;
}

.input {
  input {
    background: none;
    outline: none;
    width: 100%;
    font-family: 'Source Code Pro', serif, -apple-system;
  }
}

@media (max-width: 1200px) {
  .console {
    width: 100%;
  }

}

</style>