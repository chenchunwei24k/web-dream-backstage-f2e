import axios from '@/plugins/axios'

export const apiLogin = async (email, password) => {
    try {
        const response = await axios.post('/api/auth', {
        username: email,
        password
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const registerAccount = async (email, password) => {
    try {
        const response = await axios.post('/api/register', {
        username: email,
        password
        })
        return response.data
    } catch (error) {
        throw error
    }
}