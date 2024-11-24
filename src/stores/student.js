import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetStudent, apiPostStudent, apiPutStudent, apiDeleteStudent} from '@/apis/student'

export const useStudentStore = defineStore('student', () => {
    const studentList = ref([])

    async function getStudent() {

        const response = await apiGetStudent()

        studentList.value = response.map( student => {
            return {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                address: student.address,
                birth: student.birth,
                isEdit: false
            }
        })
        
    }

    async function postStudent(student) {

        await apiPostStudent(student)

        await getStudent()
        
    }

    async function putStudent(student) {

        await apiPutStudent(student)

        await getStudent()
        
    }

    async function deleteStudent(id) {

        await apiDeleteStudent(id)

        await getStudent()
        
    }

    return {
        StudentList: computed( () => studentList.value),
        getStudent,
        postStudent,
        putStudent,
        deleteStudent
    }
})