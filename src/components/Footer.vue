<template>
  <footer class="footer">
    <div class="container">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="icon in icons" :key="icon">
            <a :href="icon.url" class="navbar-item">
              <img class="img" :src="icon.path" alt="ops">
            </a>
          </li>
        </ul>
    </div>

  </footer>
</template>

<script>
import {icons} from '@/_config.js';
export default {
  data () {
    return {
      icons: icons,
    }
  }
}
</script>
