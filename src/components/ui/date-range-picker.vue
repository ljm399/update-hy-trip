<template>
  <div v-if="show" class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
    <div class="grid grid-cols-2 gap-3">
      <label class="flex flex-col gap-1 text-xs text-gray-600">
        入住
        <input
          v-model="start"
          type="date"
          class="h-9 rounded-md border border-gray-200 px-2 text-sm"
        />
      </label>
      <label class="flex flex-col gap-1 text-xs text-gray-600">
        离店
        <input
          v-model="end"
          type="date"
          class="h-9 rounded-md border border-gray-200 px-2 text-sm"
        />
      </label>
    </div>

    <div class="mt-3 flex justify-end gap-2">
      <button
        type="button"
        class="h-9 rounded-md px-3 text-sm text-gray-700"
        @click="$emit('update:show', false)"
      >
        取消
      </button>
      <button
        type="button"
        class="h-9 rounded-md bg-primary px-3 text-sm text-primary-foreground"
        @click="confirm"
      >
        确定
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    show: boolean
    modelValue: [string, string]
  }>(),
  {
    modelValue: () => ['', ''],
  },
)

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
  (e: 'update:modelValue', value: [string, string]): void
  (e: 'confirm', value: [string, string]): void
}>()

const start = computed({
  get: () => props.modelValue[0],
  set: (v: string) => emit('update:modelValue', [v, props.modelValue[1]]),
})

const end = computed({
  get: () => props.modelValue[1],
  set: (v: string) => emit('update:modelValue', [props.modelValue[0], v]),
})

function confirm() {
  emit('confirm', [start.value, end.value])
  emit('update:show', false)
}
</script>
