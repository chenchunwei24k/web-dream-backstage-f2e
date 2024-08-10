import axios from '@/plugins/axios'

export const apiGetClasses = async () => {
    try {
        const response = await axios.get('/api/classes')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostClasses = async (classes) => {
    try {
        const response = await axios.post('/api/classes', classes)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutClasses = async (classes) => {
    try {
        const response = await axios.put('/api/classes', classes)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteClasses = async (id) => {
    try {
        const response = await axios.delete(`/api/classes/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}