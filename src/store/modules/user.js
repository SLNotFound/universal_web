import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  // 从缓存中读取初始值
  token: getToken()
}

const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken() {
    state.token = null
    removeToken()
  }
}

const actions = {
  login(context, data) {
    console.log(data)
    // todo: 调用登录接口
    // 返回token
    context.commit('setToken', '123456')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
