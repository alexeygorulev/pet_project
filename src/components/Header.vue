<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a href="/" class="navbar-logo">logo</a>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a :href="link.url" class="navbar-item">{{link.title}}</a>
          </li>
          <li class="navbar-item" v-for="icon in icons" :key="icon">
            <a :href="icon.url" class="navbar-item">
              <img class="img" :src="icon.path" alt="ops">
            </a>
          </li>

        </ul>
      </div>
    </div>

  </header>
</template>

<script>
import {links, icons} from '@/_config.js';
export default {
  data () {
    return {
      links: links,
      icons: icons,
    }
  }
}
</script>
