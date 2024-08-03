import axios from '@/plugins/axios'

export const apiLogin = async (email, password) => {
    try {
        const response = await axios.post('/api/login', {
        username: email,
        password
        })
        return response.data
    } catch (error) {
        throw error
    }
}