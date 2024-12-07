import axios from '@/plugins/axios'

export const apiGetScore = async () => {
    try {
        const response = await axios.get('/api/score')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostScore = async (score) => {
    try {
        const response = await axios.post('/api/score', score)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutScore = async (score) => {
    try {
        const response = await axios.put('/api/score', score)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteScore = async (id) => {
    try {
        const response = await axios.delete(`/api/score/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}