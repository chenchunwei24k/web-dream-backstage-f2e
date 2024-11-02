import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetAccount, apiPostAccount, apiPutAccount, apiDeleteAccount } from '@/apis/account'

export const useAccountStore = defineStore('account', () => {
  const accountList = ref([])
  async function getAccount() {
    const response = await apiGetAccount()

    console.log(response)

    console.log(accountList)
    
    accountList.value = response.map(account => {
      return {
        id: account.id,
        username: account.username,
        password: account.password,
        isEdit: false
      }
    })
  }

  async function postAccount(account) {
    await apiPostAccount(account)

    await getAccount()
  }

  async function updateAccount(account) {
    await apiPutAccount(account)

    await getAccount()
  }

  async function deleteAccount(id) {
    await apiDeleteAccount(id)

    await getAccount()
  }

  return { 
    AccountList: computed(() => accountList.value),
    getAccount,
    postAccount,
    updateAccount,
    deleteAccount
   }
})
