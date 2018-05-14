import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import uuid from 'uuid/v4'
import Card from '../model/Card.js'
import Column from '../model/Column.js'

Vue.use(Vuex)

const state = {
  columns: []
}

const getters = {
}

const actions = {
}

const mutations = {
  addColumn(state, { title }) {
    const column = new Column(uuid(), title)
    state.columns.push(column)
  },
  removeColumn(state, { column }) {
    const index = state.columns.indexOf(column)

    if (index > -1) {
      state.columns.splice(index, 1)
    }
  },
  updateColumns(state, columns) {
    state.columns = columns
  },
  addCard(state, { column, title }) {
    const card = new Card(uuid(), title);
    state.columns.find(element => element.uuid === column.uuid).addCard(card)
  },
  updateCards(state, { column, cards }) {
    state.columns.find(element => element.uuid === column.uuid).setCards(cards)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState({ key: 'board' })]
})
