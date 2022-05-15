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


<script lang="ts">
import items from '@/seeders/items.ts'
export default {
  data () {
    return {
      item: null,
    }
  },
  created () {
    const alias: string = this.$route.params.itemAlias
    const item: string = items.find(el => el.alias === alias)
    this.item = item
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  }
</style>
