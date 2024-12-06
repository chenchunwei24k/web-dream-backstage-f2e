import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetQuiz, apiPostQuiz, apiPutQuiz, apiDeleteQuiz} from '@/apis/quiz'

export const useQuizStore = defineStore('quiz', () => {
    const quizList = ref([])

    async function getQuiz() {

        const response = await apiGetQuiz()

        quizList.value = response.map( quiz => {
            return {
                id: quiz.id,
                semesterClass: quiz.semesterClass,
                quizType: quiz.quizType,
                time: quiz.time
            }
        })
        
    }

    async function postQuiz(quiz) {

        await apiPostQuiz(quiz)

        await getQuiz()
        
    }

    async function putQuiz(quiz) {

        await apiPutQuiz(quiz)

        await getQuiz()
        
    }

    async function deleteQuiz(id) {

        await apiDeleteQuiz(id)

        await getQuiz()
        
    }

    return {
        QuizList: computed( () => quizList.value),
        getQuiz,
        postQuiz,
        putQuiz,
        deleteQuiz
    }
})