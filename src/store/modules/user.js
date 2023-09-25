import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

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
  async login(context, data) {
    const token = await login(data)
    // todo: 调用登录接口
    // 返回token
    console.log(token)
    context.commit('setToken', token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
