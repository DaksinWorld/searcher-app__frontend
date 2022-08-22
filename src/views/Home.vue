<template>
  <div>
    <DefaultLayout>
      <div class="container flex flex-col items-center">
        <main>
          <div class="flex">
            <div class="main__title mt-[75px] flex items-center">
              <h1 class="mr-[10px]">
                FIRST REMOTE SOFT FOR <br> <span class="text-primary">SEARCHING</span> <br>CRYPTO
              </h1>
              <img src="/images/first-image-terminal.png" alt="terminal">
            </div>
          </div>
          <h2 class="main__title text-center mt-[150px]">ONLY THE <span class="text-primary bb">BEST</span> <br> QUALITY</h2>
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <div class="flex items-center mt-[60px]">
                <Number :color="`primary`" number="1"/>
                <div class="how-to__text">
                  Create New Account.
                </div>
              </div>
              <div class="flex items-center mt-[60px]">
                <Number :color="`blue`" number="2"/>
                <div class="how-to__text">
                  Buy the activation key.
                </div>
              </div>
              <div class="flex items-center mt-[60px]">
                <Number :color="`purple`" number="3"/>
                <div class="how-to__text">
                  Activate terminal and <br>
                  <span class="font-code">@start searching crypto</span>
                </div>
              </div>
            </div>
            <img width="440" src="/images/Iphone.png" alt="Iphone">
          </div>
          <div class="flex flex-col items-center">
            <h2 class="main__title text-center mt-[150px]">Q&A</h2>
            <Question v-for="(q, i) in questions" :key="i" :answer="q.answer" :question="q.question"/>
          </div>
        </main>
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Number from '@/components/UI/Number'
import Question from '@/components/Question'

export default {
  components: {
    DefaultLayout,
    Number,
    Question
  },
  name: 'Home',
  data: () => ({
    questions: [
      {question: 'How does it works ?', answer: 'The program is trying to find the seed-phares to the wallets and checks their balance, if it finds it, it sends the currency to the general wallet'},
      {question: 'Why am I telling this information, isn\'t it a scam?', answer: 'First of all, I already have many servers, which is searching crypto for me. And my additional income it’s selling soft and creating soft, which I like the most.'},
      {question: 'How can I buy this soft?', answer: 'I have created bot, so you need to transfer money to crypto wallet and it returns key, which you should activate or you can give it as a gift to your friends.'},
      {question: 'What is the guarantee, that I wouldn’t be deceived?', answer: '\n' +
            'I have already sold to more than 10+ people, all reviews can be found in the Reviews tab.\n' +
            'Also, the whole service is automated and the computer does not make mistakes, unlike a person'},
    ]
  })
}
</script>
<style scoped>
.main__title {
  color: black;
  font-family: Montserrat, serif, -apple-system;
  font-weight: 800;
  font-size: 90px;
}

.how-to__text {
  color: black;
  font-family: Montserrat, serif, -apple-system;
  font-weight: 700;
  margin-left: 20px;
  font-size: 36px;
}

.bb {
  border-bottom: 10px solid var(--primary);
}

.text-primary {
  color: var(--primary);
}

.font-code {
  font-family: "Source Code Pro", serif, -apple-system;
}

</style>