<template>
    <td><el-input v-model="semesterClassStudent.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="orderCount" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="checked" type="boolean" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useRollCallStore } from "@/stores/rollCall";

const props = defineProps({
    rollCall: {
        type: Object,
        default: () => ({
            id: '',
            semesterClassStudent: '',
            orderCount: '',
            checked: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postRollCall, putRollCall } = useRollCallStore();

const semesterClassStudent = ref(props.rollCall.semesterClassStudent)
const orderCount = ref(props.rollCall.orderCount)
const checked = ref(props.rollCall.checked)

const save = async () => {
    try {
        if (props.isEdit) {
            await putRollCall({
                id: props.rollCall.id,
                semesterClassStudent: semesterClassStudent.value,
                orderCount: orderCount.value,
                checked: checked.value
            })
        } else {
            await postRollCall({
                semesterClassStudent: semesterClassStudent.value,
                orderCount: orderCount.value,
                checked: checked.value
            })
        }

        emit('save')
    } catch (error) {
        console.error(error)
    }
}

const cancel = () => {
    emit('save')
}

watch(() => props.isEdit, () => {
    if (props.isEdit) {
        semesterClassStudent.value = props.rollCall.semesterClassStudent
        orderCount.value = props.rollCall.orderCount
        checked.value = props.rollCall.checked
    }
}, { immediate: true })
</script>

<style lang="scss">
.AccountEditor {
    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    &__input {
        width: 100%;
        margin-bottom: 10px;
    }

    &__previewImg {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
}
</style>