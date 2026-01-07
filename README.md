# hy-trip (vue3-app)

关于旅游住宿的 Web 应用

## 项目展示

![首页截图](./docs/images/1.png)

### 日历组件

![详情页截图](./docs/images/2.png)

### 网络加载中

![功能演示](./docs/images/3.png)

## 技术栈

- Vue 3 (Script Setup)
- TypeScript
- Pinia
- TailwindCSS
- shadcn/ui (Vue)
- Vant UI 4 (逐步替换中)
- Vite
- Axios
- PostCSS
- dayjs

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 重构记录（已修改文件路径）

### Tailwind 化（样式迁移到 class）

- src/views/home/cpns/header-bar.vue

### Vant → shadcn/ui / 原生替换（已完成项）

- src/views/cities/cities.vue (顶部操作按钮：Button)
- src/views/cities/cpns/cities-group.vue (van-cell → button)
- src/components/detail-section/detail-section.vue (van-icon → 纯文本箭头)

### 新增的 ui 组件（用于替换 Vant）

- src/components/ui/icon.vue
- src/components/ui/navbar.vue
- src/components/ui/tabs.vue
- src/components/ui/rating.vue
- src/components/ui/date-range-picker.vue

### 进一步移除 Vant（已完成项）

- src/views/search/search.vue (van-icon → Icon)
- src/views/home/cpns/header-search-box.vue (van-calendar → DateRangePicker)
- src/views/detail/detail.vue (van-nav-bar/van-icon → Navbar/Icon)
- src/views/detail/cpns/detail_05-comments.vue (van-rate → Rating)
- src/components/home-item-v9/home-item-v9.vue (van-rate → Rating)
- src/components/tab-bar/tab-bar.vue (van-tabbar → RouterLink + Tailwind)
- src/views/detail/cpns/detail_01-swiper.vue (van-swipe → 原生轮播实现)
- src/views/detail/detail-useComponentLibrary.vue (原 Vant 版本页面改为复用 detail.vue)
