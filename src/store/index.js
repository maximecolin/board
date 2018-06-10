import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import uuid from 'uuid/v4'

Vue.use(Vuex)

const state = {
  boards: []
}

const getters = {
  findBoardByUuid: (state) => (uuid) => {
    return state.boards.find(board => board.uuid === uuid)
  },
  allBoardCards: (state, getters) => (boardUuid) => {
    return getters.findBoardByUuid(boardUuid).columns.reduce((cards, column) => cards.concat(column.cards), [])
  },
  findLabelByUuid: (state, getters) => (boardUuid, labelUuid) => {
    return getters.findBoardByUuid(boardUuid).labels.find(label => label.uuid === labelUuid)
  },
  findColumnByUuid: (state, getters) => (boardUuid, columnUuid) => {
    return getters.findBoardByUuid(boardUuid).columns.find(column => column.uuid === columnUuid)
  },
  findCardByUuid: (state, getters) => (boardUuid, cardUuid) => {
    return getters.allBoardCards(boardUuid).find(card => card.uuid === cardUuid)
  },
  searchBoards: (state) => (search) => {
    return search === null || search === ''
      ? state.boards
      : state.boards.filter(board => board.title.match(new RegExp('.*' + search + '.*', 'i')))
  },
  searchLabels: (state, getters) => (boardUuid, search) => {
    return search === null || search === ''
      ? getters.findBoardByUuid(boardUuid).labels
      : getters.findBoardByUuid(boardUuid).labels.filter(label => label.name.match(new RegExp('.*' + search + '.*', 'i')))
  },
  searchCards: (state, getters) => (boardUuid, search) => {
    return search === null || search === ''
      ? []
      : getters.allBoardCards(boardUuid).filter(card => card.title.match(new RegExp('.*' + search + '.*', 'i')))
  }
}

const actions = {
  // Boards
  addBoard({ commit }, { title }) {
    const board = { uuid: uuid(), title, columns: [], labels: [] }
    commit('addBoard', { board })
  },

  // Columns
  updateBoardColumns({ getters, commit }, { boardUuid, columns }) {
    const board = getters.findBoardByUuid(boardUuid)
    commit('updateBoardColumns', { board, columns })
  },
  addBoardColumn({ getters, commit }, { boardUuid, title }) {
    const board = getters.findBoardByUuid(boardUuid)
    const column = { uuid: uuid(), title, cards: [] }
    const columns = board.columns.concat([column])
    commit('updateBoardColumns', { board, columns })
  },
  removeBoardColumn({ getters, commit }, { boardUuid, column }) {
    const board = getters.findBoardByUuid(boardUuid)
    const index = board.columns.indexOf(column)
    const columns = board.columns.slice(0)
    columns.splice(index, 1)
    commit('updateBoardColumns', { board, columns })
  },

  // Labels
  updateBoardLabels({ getters, commit }, { boardUuid, labels }) {
    const board = getters.findBoardByUuid(boardUuid)
    commit('updateBoardLabels', { board, labels })
  },
  addBoardLabel({ getters, commit }, { boardUuid, name }) {
    const board = getters.findBoardByUuid(boardUuid)
    const label = { uuid: uuid(), name, color: null }
    const labels = board.labels.concat([label])
    commit('updateBoardLabels', { board, labels })
  },
  removeBoardLabel({ getters, commit }, { boardUuid, label }) {
    const board = getters.findBoardByUuid(boardUuid)
    const index = board.labels.indexOf(label)
    const labels = board.labels.slice(0)
    labels.splice(index, 1)
    commit('updateBoardLabels', { board, labels })
  },
  updateBoardLabel({ getters, commit }, { boardUuid, labelUuid, name }) {
    const label = getters.findLabelByUuid(boardUuid, labelUuid)
    commit('updateBoardLabel', { label, name })
  },

  // Cards
  updateColumnCards({ getters, commit }, { boardUuid, columnUuid, cards }) {
    const column = getters.findColumnByUuid(boardUuid, columnUuid)
    commit('updateColumnCards', { column, cards })
  },
  addColumnCard({ getters, commit }, { boardUuid, columnUuid, title }) {
    const column = getters.findColumnByUuid(boardUuid, columnUuid)
    const card = { uuid: uuid(), title, description: null, color: 'none', labels: [], estimated: null, points: null }
    const cards = column.cards.concat([card])
    commit('updateColumnCards', { column, cards })
  },
  removeColumnCard({ getters, commit }, { boardUuid, columnUuid, card }) {
    const column = getters.findColumnByUuid(boardUuid, columnUuid)
    const index = column.cards.indexOf(card)
    const cards = column.cards.slice(0)
    cards.splice(index, 1)
    commit('updateColumnCards', { column, cards })
  },

  // Card content
  updateCardTitle({ getters, commit }, { boardUuid, cardUuid, title }) {
    commit('updateCardTitle', { card: getters.findCardByUuid(boardUuid, cardUuid), title })
  },
  updateCardDescription({ getters, commit }, { boardUuid, cardUuid, description }) {
    commit('updateCardDescription', { card: getters.findCardByUuid(boardUuid, cardUuid), description })
  },
  updateCardColor({ getters, commit }, { boardUuid, cardUuid, color }) {
    commit('updateCardColor', { card: getters.findCardByUuid(boardUuid, cardUuid), color })
  },
  updateCardPoints({ getters, commit }, { boardUuid, cardUuid, points }) {
    commit('updateCardPoints', { card: getters.findCardByUuid(boardUuid, cardUuid), points })
  },
  updateCardLabels({ getters, commit }, { boardUuid, cardUuid, labels }) {
    commit('updateCardLabels', { card: getters.findCardByUuid(boardUuid, cardUuid), labels })
  }
}

const mutations = {
  // Board
  addBoard(state, { board }) {
    state.boards.push(board)
  },

  // Columns
  updateBoardColumns(state, { board, columns }) {
    board.columns = columns
  },

  // Labels
  updateBoardLabels(state, { board, labels }) {
    board.labels = labels
  },
  updateBoardLabel(state, { label, name }) {
    label.name = name
  },

  // Cards
  updateColumnCards(state, { column, cards }) {
    column.cards = cards
  },

  // Card content
  updateCardTitle(state, { card, title }) {
    card.title = title
  },
  updateCardDescription(state, { card, description }) {
    card.description = description
  },
  updateCardColor(state, { card, color }) {
    card.color = color
  },
  updateCardPoints(state, { card, points }) {
    card.points = points
  },
  updateCardLabels(state, { card, labels }) {
    card.labels = labels
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState({ key: 'board' })]
})
