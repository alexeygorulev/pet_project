<template>
  <Form @onSubmit="handleSubmit"
  @onUpdate="updateComment"
  :updateItems="updateItems"
  />
  <List @onRemove="Remove"
  @update='handleUpdate'
  :items="notes"  />
</template>

<script lang="ts">
import {CommentsUpdate, Notes} from "@/types/Comments.interface"
import Form from '@/components/comments/Form.vue';
import List from '@/components/comments/List.vue';
import DataService from '@/services/DataService.ts';



import {defineComponent} from 'vue'
export default defineComponent ({



  components: { Form, List, DataService },
  data() {
    return {
      updateItems:[
        {
          title: '',
          id: '',
          name: '',
          marker: false,
        }
      ] as CommentsUpdate[],
      notes: [
        {
          title: 'Если вы видите это сообщение - скорее всего вам нужно запустить сервер:) ',
          name: 'Your name',
          id: 23,
          time: 'Time',
        },
      ] as Notes[],
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler() {
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
        }
        this.notes = dates.reverse()

      })
      .catch((e) => console.log(e))

    },
//post request
//--------------------------------------------------------------
    handleSubmit(title:string,name:string) {
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
    handleUpdate(id: number) {
      for (let index = 0; index < this.notes.length; index++) {
        if(this.notes[index].id === id) {
          this.updateItems = this.notes[index]
          this.updateItems.marker = true;
        }
      }
    },
    updateComment(title:string,name:string, id:number) {
      const note = [{
        title: title,
        name: name,
        id: id,
      }] as Notes[]
      DataService.putComment(note)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
      this.updateItems.marker = null;
    },

//---------------------------------------------------
// Delete Request
    Remove(commentId: number) {
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
