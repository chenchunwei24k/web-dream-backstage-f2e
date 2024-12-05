import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetClasses, apiPostClasses, apiDeleteClasses, apiPutClasses } from '@/apis/classes'

export const useClassesStore = defineStore('classes', () => {
  const classesList = ref([])

  async function getClasses() {

    const response = await apiGetClasses()

    classesList.value = response.map( classes => {
      return {
        id: classes.id,
        major: classes.major,
        name: classes.name,
        description: classes.description,
        isEdit: false
      }
    })
  }

  async function postClasses(classes) {
    await apiPostClasses(classes)

    await getClasses()
  }

  async function putClasses(classes) {

    await apiPutClasses(classes)

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
    putClasses,
    deleteClasses
   }
})
