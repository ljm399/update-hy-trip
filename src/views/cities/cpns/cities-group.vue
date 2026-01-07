<template>
  <div class="cities-group">
    <div class="px-3 py-2">
      <div class="text-xs font-medium text-gray-500">热门城市</div>
      <div class="mt-2 flex flex-wrap justify-start gap-2">
        <template v-for="hotCity in hotCities" :key="hotCity.cityName">
          <button
            type="button"
            class="rounded-full bg-muted px-3 py-1 text-sm"
            @click="cityClick(hotCity)"
          >
            {{ hotCity.cityName }}
          </button>
        </template>
      </div>
    </div>

    <div class="px-3 pb-3">
      <template v-for="item in citiesGroup" :key="item.group">
        <div class="sticky top-0 bg-white py-2 text-xs font-semibold text-gray-600">
          {{ item.group }}
        </div>
        <template v-for="city in item.cities" :key="city.cityName">
          <button
            type="button"
            class="block w-full border-b border-gray-100 px-1 py-3 text-left text-sm"
            @click="cityClick(city)"
          >
            {{ city.cityName }}
          </button>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCityStore } from '@/pinia/modules/city'
import { useRouter } from 'vue-router'

type City = {
  cityName: string
  [key: string]: unknown
}

type CityGroup = {
  group: string
  cities: City[]
}

const props = withDefaults(
  defineProps<{
    citiesGroup?: CityGroup[]
    hotCities?: City[]
  }>(),
  {
    citiesGroup: () => [],
    hotCities: () => [],
  },
)

const cityStore = useCityStore()
const router = useRouter()
const cityClick = (city: City) => {
  cityStore.currentCity = city
  router.back()
}
</script>
