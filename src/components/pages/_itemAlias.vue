<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr">
      <h1 style="color #ffffff" class="title">{{item.title}}</h1>
      <div>
        <router-link to="/" class="btn btnPrimary"> Вернуться </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import items from '@/seeders/items.js'
export default {
  data () {
    return {
      item: null,
    }
  },
  created () {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    this.item = item
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  }
</style>
