<template>
  <div class="relative">
    <div class="relative overflow-hidden">
      <img :src="housePics[activeIndex]?.url" alt="" class="block w-full" />

      <button
        type="button"
        class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white"
        @click="prev"
      >
        ‹
      </button>
      <button
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white"
        @click="next"
      >
        ›
      </button>
    </div>

    <div
      class="absolute bottom-2 right-2 flex gap-2 rounded bg-black/80 px-2 py-1 text-xs text-white"
    >
      <template v-for="(value, key) in hyHousePics" :key="key">
        <div
          class="rounded-full px-2"
          :class="housePics[activeIndex]?.enumPictureCategory == key ? 'bg-white text-black' : ''"
        >
          {{ reviseName(value[0].title) }}
          <span v-if="housePics[activeIndex]?.enumPictureCategory == key"
            >{{ getHyIndex(housePics[activeIndex]) }}/{{ value.length }}</span
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
const props = defineProps({
  housePics: {
    type: Array,
    default: () => [],
  },
})

const activeIndex = ref(0)
const housePics = computed(() => props.housePics ?? [])

const hyHousePics = {}
for (const item of housePics.value) {
  let arr = hyHousePics[item.enumPictureCategory]
  if (!arr) {
    hyHousePics[item.enumPictureCategory] = []
    arr = hyHousePics[item.enumPictureCategory]
  }
  arr.push(item)
}

// 对hyHousePics数据的text的处理
const nameReg = /【(.*?)】/i
const reviseName = (name) => {
  const results = nameReg.exec(name)
  return results[1]
}

// 获取当前图片在hyHousePics中的序号
const getHyIndex = (item) => {
  return hyHousePics[item.enumPictureCategory].findIndex((data) => data === item) + 1
}

const prev = () => {
  if (!housePics.value.length) return
  activeIndex.value = (activeIndex.value - 1 + housePics.value.length) % housePics.value.length
}
const next = () => {
  if (!housePics.value.length) return
  activeIndex.value = (activeIndex.value + 1) % housePics.value.length
}
</script>
