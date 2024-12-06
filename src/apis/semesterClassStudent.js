import axios from '@/plugins/axios'

export const apiGetSemesterClassStudent = async () => {
    try {
        const response = await axios.get('/api/semesterClassStudent')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostSemesterClassStudent = async (semesterClassStudent) => {
    try {
        const response = await axios.post('/api/semesterClassStudent', semesterClassStudent)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutSemesterClassStudent = async (semesterClassStudent) => {
    try {
        const response = await axios.put('/api/semesterClassStudent', semesterClassStudent)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteSemesterClassStudent = async (id) => {
    try {
        const response = await axios.delete(`/api/semesterClassStudent/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}