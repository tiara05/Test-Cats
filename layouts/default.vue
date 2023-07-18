<template>
  <div>
    <app-navbar />
    <div class="flex flex-row flex-wrap md:w-full ">
      <app-sidebar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Layouts/sidebar.vue'
import navbar from '@/components/Layouts/navbar.vue'
export default {
  components: {
    'app-sidebar': sidebar,
    'app-navbar': navbar
  }
}
</script>
