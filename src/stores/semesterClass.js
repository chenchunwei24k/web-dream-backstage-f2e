import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetSemesterClass, apiPostSemesterClass, apiDeleteSemesterClass, apiPutSemesterClass } from '@/apis/semesterClass'

export const useSemesterClassStore = defineStore('semesterClass', () => {
  const semesterClassList = ref([])

  async function getSemesterClass() {

    const response = await apiGetSemesterClass()

    console.log(response)

    console.log(semesterClassList)

    semesterClassList.value = response.map( semesterClass => {
      return {
        id: semesterClass.id,
        account: semesterClass.account,
        classes: semesterClass.classes,
        semester: semesterClass.semester,
        startTime: semesterClass.startTime,
        endTime: semesterClass.endTime,
        frequency: semesterClass.frequency,
        isEdit: false
      }
    })
  }

  async function postSemesterClass(semesterClass) {
    await apiPostSemesterClass(semesterClass)

    await getSemesterClass()
  }

  async function putSemesterClass(semesterClass) {

    await apiPutSemesterClass(semesterClass)

    await getSemesterClass()
    
}

  async function deleteSemesterClass(id) {
    await apiDeleteSemesterClass(id)

    await getSemesterClass()
  }

  return { 
    semesterClassList: computed(() => semesterClassList.value),
    getSemesterClass,
    postSemesterClass,
    putSemesterClass,
    deleteSemesterClass
   }
})
