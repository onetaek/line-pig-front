<template>
  <main style="margin-top: 48px">
    <div class="container py-4">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

console.log('router:', router)

// const goPage = () => {
// 	router.push({
// 		name: 'PostCreate',
// 	});
// };
</script>

<style lang="scss" scoped></style>
