<template>
  <div>
    <div class="nav-bar">
      <h2>Novo Item</h2>
    </div>
    <form class="item-form">
      <span style="font-size: 18px;">Nome: </span><input placeholder="Nome do seu item..."
      class="input-style" type="text" name="fname" v-model="wItem.name">
      <br>
      <br>
      <span style="font-size: 18px;">Tipo: </span><br>
      <input type="radio" name="type" value="S" v-model="wItem.type"> S
      <input type="radio" name="type" value="H" v-model="wItem.type"> H
      <input type="radio" name="type" value="I" v-model="wItem.type"> I
      <br>
      <br>
      <span style="font-size: 18px;">Descricao: </span><input placeholder="Descricao do seu item..."
      class="input-style" type="text" name="fdesc" v-model="wItem.desc"><br><br>
      <span style="font-size: 18px;">Qtd: </span><input placeholder="Quantidade do seu item..."
      class="input-style" type="number" name="fqtd" v-model="wItem.qtd"><br>
      <div style="text-align: center; margin-top: 10px;">
        <b>Eventos</b>
      </div>
      <br>
      <span style="font-size: 18px;">Data 1: </span><input placeholder="Data Inicial do Item..."
      class="input-style" type="date" name="fd1" v-model="wItem.d1"><br>
      <span style="font-size: 18px;">Data 2: </span><input placeholder="Data Início(F) do Item..."
      class="input-style" type="date" name="fd2" v-model="wItem.d2"><br>
      <div class="save-btn" @click="save">Salvar</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'new',
  data() {
    return {
      wItem: {
        name: '',
        type: 'H',
        desc: '',
        qtd: 1,
        d1: null,
        d2: null,
      },
    };
  },
  methods: {
    save() {
      this.$store.dispatch('add', this.wItem);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-form {
  padding-top: 85px;
  padding-bottom: 65px;
  text-align: left;
  width: 90%;
  margin: auto;
}
.input-style {
  border: 0;
  border-bottom: grey solid 1px;
  outline: 0;
  font-size: 14px;
  margin: 2px 0px 15px 0px;
  width: 94%;
}
.save-btn {
  height: 45px;
  background: #68e977;
  width: 88%;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  border: 0;
  border-radius: 3px;
  position: fixed;
  bottom: 20px;
  text-align: center;
  padding-top: 15px;
  cursor: pointer;
}
</style>
