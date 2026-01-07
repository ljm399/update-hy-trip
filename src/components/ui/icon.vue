<template>
  <span :class="wrapperClass" aria-hidden="true">
    <svg
      v-if="name === 'arrow-left'"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
    <svg
      v-else-if="name === 'back-top'"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
    <svg
      v-else-if="name === 'arrow'"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: 'arrow-left' | 'back-top' | 'arrow'
    class?: string
  }>(),
  {},
)

const wrapperClass = computed(() => props.class)
</script>

<style scoped>
span {
  display: inline-flex;
  width: 1em;
  height: 1em;
}
svg {
  width: 100%;
  height: 100%;
}
</style>
