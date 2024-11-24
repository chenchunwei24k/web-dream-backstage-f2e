import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetSemester, apiPostSemester, apiPutSemester, apiDeleteSemester} from '@/apis/semester'

export const useSemesterStore = defineStore('semester', () => {
    const semesterList = ref([])

    async function getSemester() {

        const response = await apiGetSemester()

        semesterList.value = response.map( semester => {
            return {
                id: semester.id,
                year: semester.year,
                semester: semester.semester,
                isEdit: false
            }
        })
        
    }

    async function postSemester(semester) {

        await apiPostSemester(semester)

        await getSemester()
        
    }

    async function putSemester(semester) {

        await apiPutSemester(semester)

        await getSemester()
        
    }

    async function deleteSemester(id) {

        await apiDeleteSemester(id)

        await getSemester()
        
    }

    return {
        SemesterList: computed( () => semesterList.value),
        getSemester,
        postSemester,
        putSemester,
        deleteSemester
    }
})