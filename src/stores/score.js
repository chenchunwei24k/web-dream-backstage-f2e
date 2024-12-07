import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetScore, apiPostScore, apiPutScore, apiDeleteScore} from '@/apis/score'

export const useScoreStore = defineStore('score', () => {
    const scoreList = ref([])

    async function getScore() {

        const response = await apiGetScore()

        scoreList.value = response.map( score => {
            return {
                id: score.id,
                quiz: score.quiz,
                semesterClassStudent: score.semesterClassStudent,
                score: score.score
            }
        })
        
    }

    async function postScore(score) {

        await apiPostScore(score)

        await getScore()
        
    }

    async function putScore(score) {

        await apiPutScore(score)

        await getScore()
        
    }

    async function deleteScore(id) {

        await apiDeleteScore(id)

        await getScore()
        
    }

    return {
        ScoreList: computed( () => scoreList.value),
        getScore,
        postScore,
        putScore,
        deleteScore
    }
})