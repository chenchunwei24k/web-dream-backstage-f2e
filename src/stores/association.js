import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetAssociation, apiPostAssociation, apiDeleteAssociation } from '@/apis/association'

export const useAssociationStore = defineStore('association', () => {
  const associationList = ref([])
  async function getAssociation() {
    const response = await apiGetAssociation()

    associationList.value = response
  }

  async function postAssociation(association) {
    const response = await apiPostAssociation(association)

    if (response) {
      getAssociation()
    }
  }

  async function deleteAssociation(id) {
    const response = await apiDeleteAssociation(id)

    if (response) {
      getAssociation()
    }
  }

  return { 
    associationList: computed(() => associationList.value),
    getAssociation,
    postAssociation,
    deleteAssociation
   }
})
