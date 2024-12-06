import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetQuizType, apiPostQuizType, apiPutQuizType, apiDeleteQuizType} from '@/apis/quizType'

export const useQuizTypeStore = defineStore('quizType', () => {
    const quizTypeList = ref([])

    async function getQuizType() {

        const response = await apiGetQuizType()

        quizTypeList.value = response.map( quizType => {
            return {
                id: quizType.id,
                name: quizType.name
            }
        })
        
    }

    async function postQuizType(quizType) {

        await apiPostQuizType(quizType)

        await getQuizType()
        
    }

    async function putQuizType(quizType) {

        await apiPutQuizType(quizType)

        await getQuizType()
        
    }

    async function deleteQuizType(id) {

        await apiDeleteQuizType(id)

        await getQuizType()
        
    }

    return {
        QuizTypeList: computed( () => quizTypeList.value),
        getQuizType,
        postQuizType,
        putQuizType,
        deleteQuizType
    }
})