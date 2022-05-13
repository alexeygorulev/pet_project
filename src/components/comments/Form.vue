<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit" id="test">
      <textarea required v-model="value" placeholder="Что об этом думаете?" id="comments"/>
      <input type="text" required v-model="name" placeholder="Введите ваше имя" id="name" form="test">
      <button class="btn btnPrimary" type="submit">Добавить комментарий</button>
    </form>
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      value: '',
      name: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value, this.name)
      this.value = ''
      this.name = ''
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
