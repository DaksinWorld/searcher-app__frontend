<template>
  <div>
    <DefaultLayout>
      <div class="container flex flex-col items-center">
        <div class="flex flex-col items-center">
          <span class="earned">Total Earned:</span>
          <span class="earned-blue">~{{(+amount).toFixed(2)}}$</span>
        </div>
        <Console @amount="getAmount"/>
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Console from '@/components/Console'

export default {
  components: {
    DefaultLayout,
    Console
  },
  name: 'Home',
  data() {
    return {
      amount: ''
    }
  },
  methods: {
    getAmount(val) {
      this.amount = val
    }
  }
}
</script>
<style scoped>
.earned {
  color: black;
  font-size: 40px;
  font-family: 'Montserrat', Serif, -apple-system,serif;
  font-weight: 600;
  line-height: 40px;
  margin-top: 15px;
}

.earned-blue {
  color: var(--primary);
  font-size: 40px;
  font-family: 'Montserrat', Serif, -apple-system,serif;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 15px;
}
</style>
