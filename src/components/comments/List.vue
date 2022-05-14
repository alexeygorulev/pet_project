<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in items" :key="index">
      <div class="note-header">
        <div>
        <p>{{ note.name }}</p>
        <p>{{ note.time }}</p>
        </div>
        <p>{{ note.title }}</p>
        <div>
        <p style="cursor: pointer;" @click="$emit('onRemove', note.id)">
          &#10005;
        </p>
        <p style="cursor: pointer;" @click="$emit('update', note.id)">
          <img class="img__button" src="@/assets/img/pine.png" alt="vk">
        </p>
        </div>
      </div>
      <div class="note-footer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  props: {
    items: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss">
.img__button{
  margin-top: 9px;
  max-width: 18px;
}
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #fff;
  color:#110e0e;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(231, 27, 27, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(148, 50, 50, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

}
</style>

