<template>
  <div class="fixed left-0 right-0 top-0 z-10 bg-white px-[60px] py-[15px]">
    <button type="button" class="absolute left-[15px] top-1/2 -translate-y-1/2" @click="back">
      <Icon name="arrow-left" class="h-5 w-5 text-[var(--primary-color)]" />
    </button>
    <img
      src="@/assets/img/home/icon-right-menu.png"
      alt=""
      class="absolute right-[15px] top-1/2 h-5 w-5 -translate-y-1/2"
    />

    <div class="flex h-[45px] items-center bg-gray-100 px-[10px]">
      <div class="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
        <div class="w-[60px] shrink-0 text-center text-sm">广州</div>
        <div class="flex shrink-0 flex-col items-center justify-center text-sm">
          <div class="mb-[3px]">
            <span class="mr-[3px] text-[13px] text-black/50">住</span>{{ startDateStr }}
          </div>
          <div>
            <span class="text-[13px] text-black/50">离</span>
            <span class="relative pl-1">
              {{ endDateStr }}
              <span
                class="absolute -right-[9px] bottom-0 inline-block h-[10px] w-[10px]"
                :style="{
                  backgroundImage:
                    'url(' +
                    new URL('@/assets/img/home/home-sprite.png', import.meta.url).toString() +
                    ')',
                  backgroundPosition: '-199px -155px',
                  backgroundSize: '207px 192px',
                }"
              ></span>
            </span>
          </div>
        </div>
        <input
          type="text"
          class="min-w-0 flex-1 bg-transparent text-sm outline-none"
          placeholder="关键字/位置/民宿"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/pinia/modules/main'
import { storeToRefs } from 'pinia'
import { formatTime } from '@/utils/formatTime'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/ui/icon.vue'
const mainStore = useMainStore()

const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatTime(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatTime(endDate.value, 'MM.DD'))

const router = useRouter()
const back = () => {
  router.back()
}
</script>
