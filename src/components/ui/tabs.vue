<template>
  <div class="w-full">
    <div class="flex w-full gap-2 overflow-x-auto border-b border-gray-100 bg-white px-2 py-2">
      <button
        v-for="t in tabs"
        :key="t.value"
        type="button"
        class="shrink-0 rounded-md px-3 py-1 text-sm"
        :class="
          modelValue === t.value ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
        "
        @click="$emit('update:modelValue', t.value)"
      >
        {{ t.label }}
      </button>
    </div>
    <div class="min-w-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export type TabItem = {
  label: string
  value: string
}

defineProps<{
  modelValue: string
  tabs: TabItem[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
