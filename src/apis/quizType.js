import axios from '@/plugins/axios'

export const apiGetQuizType = async () => {
    try {
        const response = await axios.get('/api/quizType')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostQuizType = async (quizType) => {
    try {
        const response = await axios.post('/api/quizType', quizType)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutQuizType = async (quizType) => {
    try {
        const response = await axios.put('/api/quizType', quizType)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteQuizType = async (id) => {
    try {
        const response = await axios.delete(`/api/quizType/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}