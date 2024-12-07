import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { apiGetRollCall, apiPostRollCall, apiPutRollCall, apiDeleteRollCall} from '@/apis/rollCall'

export const useRollCallStore = defineStore('rollCall', () => {
    const rollCallList = ref([])

    async function getRollCall() {

        const response = await apiGetRollCall()

        rollCallList.value = response.map( rollCall => {
            return {
                id: rollCall.id,
                semesterClassStudent: rollCall.semesterClassStudent,
                orderCount: rollCall.orderCount,
                checked: rollCall.checked
            }
        })
        
    }

    async function postRollCall(rollCall) {

        await apiPostRollCall(rollCall)

        await getRollCall()
        
    }

    async function putRollCall(rollCall) {

        await apiPutRollCall(rollCall)

        await getRollCall()
        
    }

    async function deleteRollCall(id) {

        await apiDeleteRollCall(id)

        await getRollCall()
        
    }

    return {
        RollCallList: computed( () => rollCallList.value),
        getRollCall,
        postRollCall,
        putRollCall,
        deleteRollCall
    }
})