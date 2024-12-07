<template>
    <td><el-input v-model="firstName" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="lastName" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="address" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="birth" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useStudentStore } from "@/stores/student";

const props = defineProps({
    student: {
        type: Object,
        default: () => ({
            id: '',
            firstName: '',
            lastName: '',
            address: '',
            birth: '',
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postStudent, putStudent } = useStudentStore();

const firstName = ref(props.student.firstName)
const lastName = ref(props.student.lastName)
const address = ref(props.student.address)
const birth = ref(props.student.birth)

const save = async () => {
    try {
        if (props.isEdit) {
            await putStudent({
                id: props.student.id,
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                birth: birth.value
            })
        } else {
            await postStudent({
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                birth: birth.value
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
        firstName.value = props.student.firstName
        lastName.value = props.student.lastName
        address.value = props.student.address
        birth.value = props.student.birth
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