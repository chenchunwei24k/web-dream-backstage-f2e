import axios from '@/plugins/axios'

export const apiGetSemester = async () => {
    try {
        const response = await axios.get('/api/semester')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostSemester = async (semester) => {
    try {
        const response = await axios.post('/api/semester', semester)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutSemester = async (semester) => {
    try {
        const response = await axios.put('/api/semester', semester)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteSemester = async (id) => {
    try {
        const response = await axios.delete(`/api/semester/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}