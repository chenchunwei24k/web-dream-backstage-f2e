import axios from '@/plugins/axios'

export const apiGetQuiz = async () => {
    try {
        const response = await axios.get('/api/quiz')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostQuiz = async (quiz) => {
    try {
        const response = await axios.post('/api/quiz', quiz)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutQuiz = async (quiz) => {
    try {
        const response = await axios.put('/api/quiz', quiz)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteQuiz = async (id) => {
    try {
        const response = await axios.delete(`/api/quiz/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}