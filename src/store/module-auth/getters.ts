import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store'
import { AuthInterface } from 'src/store/module-auth/state'
import { UserData } from 'src/database/User'

const getters: GetterTree<AuthInterface, StateInterface> = {
  getAuthenticatedUser (state: AuthInterface): UserData {
    return state.user
  }
}

export default getters