import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [{ id: 1, name: 'item 1' }],
  },
  mutations: {
    ADD: (state, item) => {
      const lastId = state.items[state.items.length - 1].id || 2;
      state.items.push({ ...item, id: lastId + 1 });
    },
  },
  actions: {
    add(context, item) {
      context.commit('ADD', item);
    },
  },
  getters: {
    items: state => state.items,
    itemById: state => id => state.items.find(x => x.id === id),
  },
  modules: {
  },
});
