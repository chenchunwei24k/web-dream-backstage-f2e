import axios from '@/plugins/axios'

export const apiGetAccount = async () => {
    try {
        const response = await axios.get('/api/account')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostAccount = async (account) => {
    try {
        const response = await axios.post('/api/account', account)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPutAccount = async (account) => {
    try {
        const response = await axios.put('/api/account', account)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteAccount = async (id) => {
    try {
        const response = await axios.delete(`/api/account/${id}`)
        return response.data
    } catch (error) {
        throw error
    }

}