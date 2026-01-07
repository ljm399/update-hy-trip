<template>
  <nav class="fixed bottom-0 left-0 right-0 z-10 border-t border-gray-100 bg-white">
    <div class="mx-auto flex max-w-screen-sm items-center justify-around py-2">
      <RouterLink
        v-for="(item, index) in tabBarData"
        :key="index"
        :to="item.path"
        class="flex flex-col items-center gap-1 text-xs"
      >
        <img
          :src="currentIndex === index ? item.active : item.image"
          alt=""
          class="h-[30px] w-[30px]"
        />
        <div class="text-[15px]">{{ item.text }}</div>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import tabBarData from '@/assets/localData'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
let currentIndex = ref(0)
const route = useRoute()
watch(route, () => {
  const index = tabBarData.findIndex((item) => item.path === route.path)
  if (index === -1) return // 作用: 防止出现-1的情况, 说明没有找到
  currentIndex.value = index
})
</script>
