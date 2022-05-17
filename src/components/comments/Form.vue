<template>
  <div class="note-form__wrapper">
    <form v-if="updateItems.marker == undefined || null  " class="note-form" @submit.prevent="onSubmit" id="test">
      <textarea required v-model="value" placeholder="Что об этом думаете?" id="comments"/>
      <input type="text" required v-model="name" placeholder="Введите ваше имя" id="name" form="test">
      <button class="btn btnPrimary" type="submit">Добавить комментарий</button>
    </form>
    <form v-if="updateItems.marker " class="note-form" @submit.prevent="onUpdate" id="test">
      <textarea required v-model="updateItems.title" placeholder="Что об этом думаете?" id="comments"/>
      <input type="text" required v-model="updateItems.name" placeholder="Введите ваше имя" id="name" form="test">
      <button class="btn btnPrimary" type="submit">Изменить комментарий</button>
    </form>
  </div>
</template>



<script >
import {Form} from "@/types/Comments.interface"
export default {
  components: {},
  props: {
    updateItems: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      value: '',
      name: '',
      id: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value, this.name)
      this.value = ''
      this.name = ''
    },
    onUpdate() {
      this.$emit('onUpdate', this.updateItems.title, this.updateItems.name, this.updateItems.id)
      this.value = ''
      this.name = ''
      this.id = this.updateItems.id
    },
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
