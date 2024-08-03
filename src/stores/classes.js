import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetClasses, apiPostClasses, apiDeleteClasses } from '@/apis/classes'

export const useClassesStore = defineStore('classes', () => {
  const classesList = ref([])
  async function getClasses() {
    const response = await apiGetClasses()

    classesList.value = response
  }

  async function postClasses(classes) {
    const response = await apiPostClasses(classes)

    if (response) {
      getClasses()
    }
  }

  async function deleteClasses(id) {
    const response = await apiDeleteClasses(id)

    if (response) {
      getClasses()
    }
  }

  return { 
    classesList: computed(() => classesList.value),
    getClasses,
    postClasses,
    deleteClasses
   }
})
