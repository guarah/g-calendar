<template>
  <div>
    <!-- Nav bar -->
    <div class="nav-bar">
      <h2>Detalhes do Item #{{ itemId }}</h2>
    </div>
    <div class="details">
      <p>{{ itemId }}</p>
      <p>{{ wItem.name || 'name' }}</p>
      <p>{{ wItem.type || 'type' }}</p>
      <p>{{ wItem.desc || 'desc' }}</p>
      <p>{{ wItem.qtd || 'qtd' }}</p>
      <p>{{ wItem.d1 || 'd1' }}</p>
      <p>{{ wItem.d2 ||'d2' }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  padding-top: 80px;
  padding-bottom: 65px;
}
</style>

<script>

export default {
  name: 'item',
  data() {
    return {};
  },
  computed: {
    itemId() {
      return this.$route.params.id;
    },
    wItem() {
      return this.$store.getters.itemById(this.itemId);
    },
  },
};
</script>
