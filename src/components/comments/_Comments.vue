<template>
  <Form @onSubmit="handleSubmit"
  @onUpdate="updateComment"
  :updateItems="updateItems"
  />
  <List @onRemove="Remove"
  @update='handleUpdate'
  :items="notes"  />
</template>

<script>
import Form from '@/components/comments/Form.vue'
import List from '@/components/comments/List.vue'
import DataService from '@/services/DataService.js'
import _ from 'lodash'

import {defineComponent} from 'vue'
export default defineComponent ({
  setup() {},

  components: { Form, List, DataService },
  data() {
    return {
      updateItems:[
        {
          title: '',
          name: '',
          id: '',
          marker: false,
        }
      ],
      notes: [
        {
          title: 'Если вы видите это сообщение - скорее всего вам нужно запустить сервер ',
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
  watch: {
    notes: {
      handler(updatedList) {
        console.log(updatedList)
        this.getNotes()
      },
      deep: true
    }
  },

  methods: {
    getFixedTime(items) {
      const arrTime = items.map(item => item.time)
      const fulltime = arrTime.map(item => {
        const getDate = new Date(item)
        const year = getDate.getFullYear()
        const month = getDate.getMonth()
        const day = getDate.getDate()
        const hours = getDate.getHours()
        const minutes = getDate.getMinutes()
        const seconds = getDate.getSeconds()
        return `${year}` + "-" + `${month}`  + "-" + `${day}` + " " + `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`

        })
      return fulltime
    },
//get request
      getNotes() {
      DataService.getComment()
      .then((res) => {
        const dates = res.data.values
        const timestamp = this.getFixedTime(dates)
        for (let index = 0; index < dates.length; index++) {
          dates[index].time = timestamp[index]
          console.log(dates)
        }
        this.notes = dates.reverse()

      })
      .catch((e) => console.log(e))

    },
//post request
//--------------------------------------------------------------
    handleSubmit(title,name) {
      const note = [{
        title: title,
        name: name,
      }]
      DataService.setComment(note)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    },

    //---------------------------------------------------------
    //Put Reauest
    handleUpdate(id) {
      for (let index = 0; index < this.notes.length; index++) {
        if(this.notes[index].id === id) {
          this.updateItems = this.notes[index]
          this.updateItems.marker = true;
        }
      }
    },
    updateComment(title,name, id) {
      const note = [{
        title: title,
        name: name,
        id: id,
      }]
      DataService.putComment(note)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
      this.updateItems.marker = null;
    },

//---------------------------------------------------
// Delete Request
    Remove(commentId) {
      console.log(commentId)
      const deleteId = [{id: commentId}]
      DataService.deleteComment(deleteId)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    }
  }



});


</script>
