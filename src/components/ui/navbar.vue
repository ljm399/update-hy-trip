<template>
  <div class="flex items-center gap-3 border-b border-gray-100 bg-white px-3 py-3">
    <button type="button" class="text-sm text-gray-700" @click="$emit('click-left')">
      {{ leftText }}
    </button>
    <div class="flex-1 text-center text-sm font-medium text-gray-900">{{ title }}</div>
    <div class="w-[48px]"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  leftText?: string
}>()

defineEmits<{
  (e: 'click-left'): void
}>()
</script>
