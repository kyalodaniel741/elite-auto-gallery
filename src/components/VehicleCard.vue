<script setup lang="ts">
import type { Vehicle } from '../types'
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ vehicle: Vehicle }>()
const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
</script>

<template>
  <article class="vehicle-card">
    <div class="vehicle-image-wrap">
      <img :src="vehicle.image" :alt="`${vehicle.year} ${vehicle.brand} ${vehicle.name}`" loading="lazy" />
      <span v-if="vehicle.badge" class="vehicle-badge">{{ vehicle.badge }}</span>
      <span class="vehicle-year">{{ vehicle.year }}</span>
    </div>
    <div class="vehicle-info">
      <div><p class="vehicle-brand">{{ vehicle.brand }}</p><h3>{{ vehicle.name }}</h3></div>
      <p class="vehicle-price">{{ money(vehicle.price) }}</p>
    </div>
    <div class="vehicle-meta"><span>{{ vehicle.mileage }}</span><span>{{ vehicle.category }}</span><a :href="`mailto:enquiries@eliteautogallery.example?subject=${encodeURIComponent('Enquiry: ' + vehicle.brand + ' ' + vehicle.name)}`" :aria-label="`Enquire about ${vehicle.name}`"><ArrowUpRight :size="18" /></a></div>
  </article>
</template>