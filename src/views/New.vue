<template>
  <div>
    <div class="nav-bar">
      <h2>Novo Item</h2>
    </div>
    <form class="item-form">
      <span style="font-size: 18px;">Nome: </span><input placeholder="Nome do seu item..."
      class="input-style" type="text" name="fname">
      <br>
      <br>
      <span style="font-size: 18px;">Tipo: </span><br>
      <input type="radio" name="type" value="S"> S
      <input type="radio" name="type" value="H"> H
      <input type="radio" name="type" value="I"> I
      <br>
      <br>
      <span style="font-size: 18px;">Descricao: </span><input placeholder="Descricao do seu item..."
      class="input-style" type="text" name="fdesc"><br><br>
      <span style="font-size: 18px;">Qtd: </span><input placeholder="Quantidade do seu item..."
      class="input-style" type="text" name="fqtd"><br>
      <div style="text-align: center; margin-top: 10px;">
        <b>Eventos</b>
      </div>
      <br>
      <span style="font-size: 18px;">Data 1: </span><input placeholder="Data Inicial do Item..."
      class="input-style" type="date" name="fd1"><br>
      <span style="font-size: 18px;">Data 2: </span><input placeholder="Data Início(F) do Item..."
      class="input-style" type="date" name="fd2"><br>
      <input type="button" value="Salvar" class="save-btn">
    </form>
  </div>
</template>

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
}
</style>
