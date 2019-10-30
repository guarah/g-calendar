<template>
  <div class="home">
    <!-- Nav bar -->
    <div class="nav-bar">
      <h2>
        Meus Itens
        <span
          @click="$router.push({ name: 'new' })"
          style="color: white;"
        >
          <b>[+]</b>
        </span>
      </h2>
    </div>
    <!-- List -->
    <div class="list">
      <div
        v-for="item in itens"
        :key="item.id"
        @click="$router.push({ name: 'item', params: { id: item.id } })"
        class="item-card">
        <caption>{{ item.id }}</caption>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <h2 style="color: white;" class="add" @click="$router.push({ name: 'new' })">
      <b>[+]</b>
      Adicionar item
    </h2>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {};
  },
  computed: {
    itens() {
      return this.$store.getters.items;
    },
  },
};
</script>

<style lang="scss">
.list {
  padding-top: 75px;
  padding-bottom: 65px;
}
.item-card {
  margin: 2px;
  height: 70px;
  background: #f7fff8;
}
.nav-bar {
  background: #68e977;
  padding: 1px;
  position: fixed;
  right: 0;
  left: 0;
  color: white;
}
.add {
  background: #68e977;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 15px;
}
</style>
