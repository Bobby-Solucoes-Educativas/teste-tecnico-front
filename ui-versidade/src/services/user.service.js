import { useUserStore } from '@/stores/user'

const userService = {
  async getUserById(userId) {
    const userStore = useUserStore()
    return userStore.getUserById(userId)
  },
  async listUsers(pageNumber) {
    const userStore = useUserStore()
    return userStore.listUsers(pageNumber)
  },
  async addUser(userData) {
    const userStore = useUserStore()
    return userStore.addUser(userData)
  },
  async editUser(userData) {
    const userStore = useUserStore()
    return userStore.editUser(userData)
  },
  async deleteUser(userId) {
    const userStore = useUserStore()
    return userStore.deleteUser(userId)
  }
}

export default userService