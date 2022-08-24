<template>
  <DefaultLayout>
    <div class="container">
      <table class="w-full mt-[120px]">
        <thead>
        <tr class="bg-gray-200 text-left uppercase text-sm text-gray-600">
          <th class="p-2 border-white">
            Amount
          </th>
          <th class="p-2 border-white">
            Date
          </th>
          <th class="p-2 border-white">
            Status
          </th>
          <th class="p-2 border-white">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
          <tr class="font-[montserrat] section p-3">
            <td class="p-3 font-semibold color-primary">$ 1000</td>
            <td class="p-3">{{new Date(dateNow).getDate()}}.{{new Date(dateNow).getMonth() + 1}}.{{new Date(dateNow).getFullYear()}} {{new Date(dateNow).getHours()}}:{{new Date(dateNow).getMinutes()}}</td>
            <td class="p-3">
              <span class="p-2 px-3 rounded-[25px] font-semibold"
                    :class="{
                      'bg-red-100 text-reg-500': status === 'active',
                     'bg-yellow-100 text-yellow-500': status === 'warning',
                     'bg-green-100 text-green-500': status === 'completed',
                     }">
                {{ status }}
              </span>
            </td>
            <td class="p-3">
              <button class="p-2 bg-red-500 font-bold rounded-xl text-white">
                Cancel
              </button>
            </td>
          </tr>
          <tr class="font-[montserrat] section p-3">
            <td class="p-3 font-semibold color-primary">$ 1000</td>
            <td class="p-3">{{new Date(dateNow).getDate()}}.{{new Date(dateNow).getMonth() + 1}}.{{new Date(dateNow).getFullYear()}} {{new Date(dateNow).getHours()}}:{{new Date(dateNow).getMinutes()}}</td>
            <td class="p-3">
              <span class="p-2 px-3 rounded-[25px] font-semibold"
                    :class="{
                      'bg-red-100 text-reg-500': status === 'active',
                     'bg-yellow-100 text-yellow-500': status === 'warning',
                     'bg-green-100 text-green-500': status === 'completed',
                     }">
                {{ status }}
              </span>
            </td>
            <td class="p-3">
              <button class="p-2 bg-red-500 font-bold rounded-xl text-white">
                Cancel
              </button>
            </td>
          </tr>
          <tr class="font-[montserrat] section p-3">
            <td class="p-3 font-semibold color-primary">$ 1000</td>
            <td class="p-3">{{new Date(dateNow).getDate()}}.{{new Date(dateNow).getMonth() + 1}}.{{new Date(dateNow).getFullYear()}} {{new Date(dateNow).getHours()}}:{{new Date(dateNow).getMinutes()}}</td>
            <td class="p-3">
              <span class="p-2 px-3 rounded-[25px] font-semibold" :class="{
                      'bg-red-100 text-reg-500': status === 'active',
                     'bg-yellow-100 text-yellow-500': status === 'warning',
                     'bg-green-100 text-green-500': status === 'completed',
                     }">
                {{ status }}
              </span>
            </td>
            <td class="p-3">
              <button class="p-2 bg-red-500 font-bold rounded-xl text-white">
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "WithdrawPage",
  components: {DefaultLayout},
  data: () => ({
    status: 'warning'
  }),
  computed: {
    dateNow() {
      return Date.now()
    }
  }
}
</script>

<style scoped>
.section {
  border-bottom: 1px solid #b0aeae;
  padding-bottom: 15px;
}

.section:nth-child(2n) {
  background-color: #eaeaea;
}

.color-primary {
  color: var(--primary);
}

</style>