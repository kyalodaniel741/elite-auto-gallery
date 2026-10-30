<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowDown, ArrowUpRight, ShieldCheck, Globe2, Sparkles } from 'lucide-vue-next'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import VehicleCard from './components/VehicleCard.vue'
import SiteFooter from './components/SiteFooter.vue'
import { vehicles } from './data/vehicles'

const activeCategory = ref('All')
const categories = ['All', 'Saloon', 'SUV', 'Sports']
const visibleVehicles = computed(() => activeCategory.value === 'All'
  ? vehicles
  : vehicles.filter(vehicle => vehicle.category === activeCategory.value))
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />

    <section id="collection" class="collection-section page-wrap section-pad">
      <div class="section-heading">
        <div><p class="eyebrow">THE COLLECTION</p><h2>Exceptional by <em>nature.</em></h2></div>
        <p class="section-description">Every vehicle is selected for its provenance, condition and ability to make every arrival unforgettable.</p>
      </div>
      <div class="collection-toolbar">
        <div class="filters" aria-label="Filter vehicles">
          <button v-for="category in categories" :key="category" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button>
        </div>
        <span class="inventory-count">CURATED SELECTION <b>{{ String(visibleVehicles.length).padStart(2, '0') }}</b></span>
      </div>
      <div class="vehicle-grid">
        <VehicleCard v-for="vehicle in visibleVehicles" :key="vehicle.id" :vehicle="vehicle" />
      </div>
      <div class="collection-foot"><span>More exceptional vehicles available on request.</span><a href="#contact">Request our full inventory <ArrowUpRight :size="16" /></a></div>
    </section>

    <section id="experience" class="experience-section">
      <div class="experience-photo"></div>
      <div class="experience-copy">
        <p class="eyebrow">THE ELITE EXPERIENCE</p>
        <h2>Beyond the<br /><em>expected.</em></h2>
        <p>Acquiring an exceptional automobile should feel as considered as the vehicle itself. From the first conversation to the moment the keys are yours, we make every detail count.</p>
        <a class="text-link" href="#contact">Experience the difference <span>→</span></a>
      </div>
    </section>

    <section id="about" class="promise-section page-wrap section-pad">
      <div class="promise-intro"><p class="eyebrow">A HIGHER STANDARD</p><h2>Confidence in<br /><em>every detail.</em></h2></div>
      <div class="promise-grid">
        <article><ShieldCheck :size="25" /><h3>Considered quality</h3><p>Each vehicle is selected against exacting standards for condition, specification and provenance.</p></article>
        <article><Globe2 :size="25" /><h3>International reach</h3><p>A global outlook for clients seeking remarkable vehicles and a seamless acquisition journey.</p></article>
        <article><Sparkles :size="25" /><h3>Personal service</h3><p>Discreet, tailored guidance shaped around your preferences and expectations.</p></article>
      </div>
    </section>

    <section class="quote-section">
      <p class="eyebrow">THE ELITE PERSPECTIVE</p>
      <blockquote>“Luxury is not simply what you drive.<br />It is how every moment makes you feel.”</blockquote>
      <span>THE ELITE AUTO GALLERY APPROACH</span>
    </section>
  </main>
  <SiteFooter />
</template>