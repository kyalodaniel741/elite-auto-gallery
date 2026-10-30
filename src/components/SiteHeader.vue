<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'

const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#home" @click="close">
      <span class="brand-mark">E</span>
      <span class="brand-copy"><strong>ELITE</strong><small>AUTO GALLERY</small></span>
    </a>
    <button class="mobile-toggle" aria-label="Toggle navigation" @click="open = !open">
      <X v-if="open" :size="22" /><Menu v-else :size="22" />
    </button>
    <nav :class="{ 'nav-open': open }">
      <a href="#collection" @click="close">Collection</a>
      <a href="#experience" @click="close">Our experience</a>
      <a href="#about" @click="close">About</a>
      <a class="nav-contact" href="#contact" @click="close">Enquire <ArrowUpRight :size="15" /></a>
    </nav>
  </header>
</template>