<template>
  <div class="home">
    My items  [+]
    <br>
    <div @click="$router.push({ name: 'item' })">
      item #1
    </div>
    <div @click="$router.push({ name: 'item' })">
      item #2
    </div>
    <div @click="$router.push({ name: 'item' })">
      item #3
    </div>
    <br>
    <h2 @click="$router.push({ name: 'new' })">+ Adicionar item</h2>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
