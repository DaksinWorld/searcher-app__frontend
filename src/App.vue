<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  padding: 0;
  margin: 0;
  background-color: var(--white);
}

:root {
  --dark-primary: #276678;
  --primary: #1687A7;
  --light-primary: #D3E0EA;
  --white: #F6F5F5;
  --green: #27782A;

  /*colors*/
  --blue: #1647A7;
  --purple: #A716A1;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
}

</style>
