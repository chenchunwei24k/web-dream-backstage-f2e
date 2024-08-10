import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetClasses, apiPostClasses, apiDeleteClasses } from '@/apis/classes'

export const useClassesStore = defineStore('classes', () => {
  const classesList = ref([])
  async function getClasses() {
    const response = await apiGetClasses()

    classesList.value = response.map(classes => {
      return {
        ...classes,
        isEdit: false
      }
    })
  }

  async function postClasses(classes) {
    await apiPostClasses(classes)

    await getClasses()
  }

  async function deleteClasses(id) {
    await apiDeleteClasses(id)

    await getClasses()
  }

  return { 
    classesList: computed(() => classesList.value),
    getClasses,
    postClasses,
    deleteClasses
   }
})
