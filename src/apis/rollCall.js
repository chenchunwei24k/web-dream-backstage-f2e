import axios from '@/plugins/axios'

export const apiGetRollCall = async () => {
    try {
        const response = await axios.get('/api/rollCall')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostRollCall = async (rollCall) => {
    try {
        const response = await axios.post('/api/rollCall', rollCall)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutRollCall = async (rollCall) => {
    try {
        const response = await axios.put('/api/rollCall', rollCall)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteRollCall = async (id) => {
    try {
        const response = await axios.delete(`/api/rollCall/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}