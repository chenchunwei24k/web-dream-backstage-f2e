import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetClassesType, apiPostClassesType, apiDeleteClassesType } from '@/apis/classesType'

export const useClassesTypeStore = defineStore('classesType', () => {
  const classesTypeList = ref([])
  async function getClassesType() {
    const response = await apiGetClassesType()

    classesTypeList.value = response
  }

  async function postClassesType(classType) {
    const response = await apiPostClassesType(classType)

    if (response) {
      getClassType()
    }
  }

  async function deleteClassesType(id) {
    const response = await apiDeleteClassesType(id)

    if (response) {
      getClassesType()
    }
  }

  return { 
    classesTypeList: computed(() => classesTypeList.value),
    getClassesType,
    postClassesType,
    deleteClassesType
   }
})
