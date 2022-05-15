<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <div class="card-stats">
            <div
              v-for="(stat, index) in item.info"
              :key="index"
              class="one-third"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        </template>
      </Card>
    </slide>

    <!-- addons -->
    <template #addons>
      <navigation />
    </template>
  </carousel>

  <Comments/>

</template>

<script lang="ts">
import items from '@/seeders/items'
import Card from '@/components/UI/Card.vue'
import Comments from '@/components/comments/_Comments.vue'
import {Person, PersonInfo} from "@/types/Items.Interface"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation,
    Comments

  },
  data() {
    return {
      items: items as Person[],

      // corousel
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    }
  },

}
</script>
