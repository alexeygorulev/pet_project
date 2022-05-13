<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes"  />
</template>

<script>
import Form from '@/components/comments/Form.vue'
import List from '@/components/comments/List.vue'
import DataService from '@/services/DataService.js'

import {defineComponent} from 'vue'
export default defineComponent ({
  setup() {},

  components: { Form, List, DataService },
  data() {
    return {
      notes: [
        {
          title: 'Example of comment ',
          name: 'Your name',
          time: 'Time',
          id: '23'
        },
      ],
    }
  },
  mounted() {
    this.getNotes()
  },
  methods: {
    getTime(items) {
      const arr = items.map(item => item.time)
      const arr2 = arr.map(item => item.slice(0,10) + " " + item.slice(11,19)  )
      return arr2
    },
//get request
      getNotes() {
      DataService.getComment()
      .then((res) => {
        const dates = res.data.values
        const timestamp = this.getTime(dates)
        const datesReverse = dates.reverse()
        for (let index = 0; index < datesReverse.length; index++) {
          datesReverse[index].time = timestamp[index]
          this.notes[index] = datesReverse[index]
        }

      })
      .catch((e) => console.log(e))

    },
//post request
//--------------------------------------------------------------
    handleSubmit(title,name, date_now) {
      const note = [{
        title: title,
        name: name,
      }]
      console.log(JSON.stringify(note))
      DataService.setComment(note)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    },



    handleRemove(id) {
      console.log(id)
      DataService.deleteUser(id)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    }
  }



});


</script>
