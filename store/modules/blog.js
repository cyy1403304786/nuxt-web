
import { allAticles } from '../../lib/api'

const state = {
  blogList: [], //博客列表
}

const actions = {
  // 获取所有文章
  async allAticlesA ({commit, state}) {
    let res = await allAticles()
    if (res.flag) {
      commit('allAticlesM', res)
    }
  }
}

const mutations = {
  allAticlesM(state,data){
    console.log(data.data)
    state.blogList = data.data
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}