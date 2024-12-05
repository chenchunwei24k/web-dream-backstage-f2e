import axios from '@/plugins/axios'

export const apiGetSemesterClass = async () => {
    try {
        const response = await axios.get('/api/semesterClass')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostSemesterClass = async (semesterClass) => {
    try {
        const response = await axios.post('/api/semesterClass', semesterClass)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutSemesterClass = async (semesterClass) => {
    try {
        const response = await axios.put('/api/semesterClass', semesterClass)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteSemesterClass = async (id) => {
    try {
        const response = await axios.delete(`/api/semesterClass/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}