<template>
  <div class="inline-flex items-center gap-0.5" :aria-label="ariaLabel">
    <button
      v-for="i in max"
      :key="i"
      type="button"
      class="h-4 w-4"
      :class="readonly ? 'cursor-default' : 'cursor-pointer'"
      :disabled="readonly"
      @click="onClick(i)"
    >
      <svg
        viewBox="0 0 24 24"
        class="h-4 w-4"
        :fill="i <= fullStars ? color : voidColor"
        aria-hidden="true"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: number
    max?: number
    readonly?: boolean
    color?: string
    voidColor?: string
  }>(),
  {
    max: 5,
    readonly: true,
    color: '#ffb800',
    voidColor: '#d1d5db',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const fullStars = computed(() => {
  const v = Number(props.modelValue)
  if (Number.isNaN(v)) return 0
  return Math.max(0, Math.min(props.max, Math.round(v)))
})

const ariaLabel = computed(() => `rating ${props.modelValue} / ${props.max}`)

function onClick(i: number) {
  if (props.readonly) return
  emit('update:modelValue', i)
}
</script>
