<template>
  <base-menu v-if="is" @footerClick="is = false" />
  <vertical-menu v-else @backClick="is = true" />
</template>

<script>
import BaseMenu from '@/components/BaseMenu.vue'
import VerticalMenu from '@/components/VerticalMenu.vue'
export default {
  name: 'Ap-a',
  components: {
    BaseMenu,
    VerticalMenu
  },
  data() {
    return {
      is: false
    }
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
