import api from '../../api/wp'
import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'

const state = {
  posts: [],
  info: [
    {
      title: {
        rendered: ''
      },
      acf: {
        solo_exhibitions: [],
        group_exhibitions: [],
        ongoing: [],
        publications: [],
        links: []
      }
    }
  ],
  showMore: false,
  textbox: false,
  textConent: ''
}

const actions = {
  [actionTypes.SHOW_MORE] ({ commit, state }) {
    commit(mutationTypes.SET_MORE)
  },
  [actionTypes.TOGGLE_TEXTBOX] ({ commit, state }, data) {
    commit(mutationTypes.SET_TEXTBOX, data)
  },
  async [actionTypes.GET_POSTS] ({ commit, state }) {
    commit(mutationTypes.SET_POSTS, await api.getPosts())
  },
  async [actionTypes.GET_INFO] ({ commit, state }) {
    commit(mutationTypes.SET_INFO, await api.getInfo())
  }
}

const mutations = {
  [mutationTypes.SET_MORE] (state) {
    state.showMore = !state.showMore
  },
  [mutationTypes.SET_POSTS] (state, data) {
    state.posts = data
  },
  [mutationTypes.SET_INFO] (state, data) {
    state.info = data
  },
  [mutationTypes.SET_TEXTBOX] (state, data) {
    state.textbox = !state.textbox
    state.textContent = data
  }
}

export default {
  state,
  actions,
  mutations
}
