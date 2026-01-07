<template>
  <div class="cities top-page">
    <div class="flex items-center gap-2 px-3 py-2">
      <Button variant="ghost" size="sm" @click="onCancel">返回</Button>
      <div class="text-sm font-medium">选择城市</div>
    </div>
    <div class="top">
      <div class="px-3 pb-2">
        <input
          v-model="value"
          type="text"
          class="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm"
          placeholder="城市/区域/位置"
        />
      </div>
      <Tabs v-model="active" :tabs="tabs" />
    </div>

    <div class="content">
      <template v-for="(group, key) in allCitiesMap" :key="key">
        <!-- <div>{{ value }}</div> key对应的值,然后你通过value.cities拿到具体的值,而不是key.cities -->
        <!-- <hr> -->
        <!-- <div>{{ key }}</div> cities, hotCities,title -->
        <!-- <hr></hr> -->
        <!-- <div>{{ index }}</div> -->
        <CitiesGroup
          v-show="active === key"
          :cities-group="group.cities"
          :hot-cities="group.hotCities"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/pinia/modules/city'
import { storeToRefs } from 'pinia'
import CitiesGroup from './cpns/cities-group.vue'
import Button from '@/components/ui/button.vue'
import Tabs, { type TabItem } from '@/components/ui/tabs.vue'

type City = {
  cityName: string
  [key: string]: unknown
}

type CityGroup = {
  group: string
  cities: City[]
}

type CitiesGroupData = {
  title: string
  hotCities: City[]
  cities: CityGroup[]
}

type AllCities = Record<string, CitiesGroupData>

const value = ref('')
const router = useRouter()
const onCancel = () => {
  router.back()
}

//网络请求
// const getCitiesData = async () => {
//   const res = await getCities()
//   console.log(res)
// }
// getCitiesData()
// 优化: 因为网络请求多次,占位置, 而且网络请求代码不应该写在组件中 (solve: 使用pinia)
const cityStore = useCityStore()
cityStore?.fetchAllCities()
const { allCities } = storeToRefs(cityStore)

const allCitiesMap = computed<AllCities>(() => {
  return (allCities.value ?? {}) as unknown as AllCities
})

const tabs = computed<TabItem[]>(() => {
  return Object.entries(allCitiesMap.value).map(([key, val]) => ({
    value: key,
    label: val.title,
  }))
})

const active = ref<string>('')
watch(
  allCitiesMap,
  (val) => {
    const keys = Object.keys(val)
    if (!active.value && keys.length) active.value = keys[0]
  },
  { immediate: true },
)
</script>

<style scoped>
.content {
  height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
