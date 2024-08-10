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
    await apiPostClassesType(classType)

    await getClassesType()
  }

  async function deleteClassesType(id) {
    await apiDeleteClassesType(id)

    await getClassesType()
  }

  return { 
    classesTypeList: computed(() => classesTypeList.value),
    getClassesType,
    postClassesType,
    deleteClassesType
   }
})
