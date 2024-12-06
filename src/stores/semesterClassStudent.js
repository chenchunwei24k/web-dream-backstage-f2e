import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetSemesterClassStudent, apiPostSemesterClassStudent, apiPutSemesterClassStudent, apiDeleteSemesterClassStudent} from '@/apis/semesterClassStudent'

export const useSemesterClassStudentStore = defineStore('semesterClassStudent', () => {
    const semesterClassStudentList = ref([])

    async function getSemesterClassStudent() {

        const response = await apiGetSemesterClassStudent()

        semesterClassStudentList.value = response.map( semesterClassStudent => {
            return {
                id: semesterClassStudent.id,
                semesterClass: semesterClassStudent.semesterClass,
                student: semesterClassStudent.student
            }
        })
        
    }

    async function postSemesterClassStudent(semesterClassStudent) {

        await apiPostSemesterClassStudent(semesterClassStudent)

        await getSemesterClassStudent()
        
    }

    async function putSemesterClassStudent(semesterClassStudent) {

        await apiPutSemesterClassStudent(semesterClassStudent)

        await getSemesterClassStudent()
        
    }

    async function deleteSemesterClassStudent(id) {

        await apiDeleteSemesterClassStudent(id)

        await getSemesterClassStudent()
        
    }

    return {
        SemesterClassStudentList: computed( () => semesterClassStudentList.value),
        getSemesterClassStudent,
        postSemesterClassStudent,
        putSemesterClassStudent,
        deleteSemesterClassStudent
    }
})