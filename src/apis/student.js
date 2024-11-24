import axios from '@/plugins/axios'

export const apiGetStudent = async () => {
    try {
        const response = await axios.get('/api/student')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostStudent = async (student) => {
    try {
        const response = await axios.post('/api/student', student)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutStudent = async (student) => {
    try {
        const response = await axios.put('/api/student', student)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteStudent = async (id) => {
    try {
        const response = await axios.delete(`/api/student/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}