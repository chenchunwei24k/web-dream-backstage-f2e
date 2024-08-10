import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetAssociation, apiPostAssociation, apiPutAssociation, apiDeleteAssociation } from '@/apis/association'

export const useAssociationStore = defineStore('association', () => {
  const associationList = ref([])
  async function getAssociation() {
    const response = await apiGetAssociation()

    associationList.value = response.map(association => {
      return {
        ...association,
        isEdit: false
      }
    })
  }

  async function postAssociation(association) {
    await apiPostAssociation(association)

    await getAssociation()
  }

  async function updateAssociation(association) {
    await apiPutAssociation(association)

    await getAssociation()
  }

  async function deleteAssociation(id) {
    await apiDeleteAssociation(id)

    await getAssociation()
  }

  return { 
    associationList: computed(() => associationList.value),
    getAssociation,
    postAssociation,
    updateAssociation,
    deleteAssociation
   }
})
