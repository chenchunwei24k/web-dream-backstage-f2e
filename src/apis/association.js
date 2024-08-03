import axios from '@/plugins/axios'

export const apiGetAssociation = async () => {
    try {
        const response = await axios.get('/api/homeAssociation')
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiPostAssociation = async (association) => {
    try {
        const response = await axios.post('/api/homeAssociation', association)
        return response.data
    } catch (error) {
        throw error
    }
}

export const apiDeleteAssociation = async (id) => {
    try {
        const response = await axios.delete(`/api/homeAssociation/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}