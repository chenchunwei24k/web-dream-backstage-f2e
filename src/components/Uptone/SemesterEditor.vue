<template>
    <td><el-input v-model="year" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="semester" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useSemesterStore } from "@/stores/semester";

const props = defineProps({
    semester: {
        type: Object,
        default: () => ({
            id: '',
            year: '',
            semester: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postSemester, putSemester } = useSemesterStore();

const year = ref(props.semester.year)
const semester = ref(props.semester.semester)

const save = async () => {
    try {
        if (props.isEdit) {
            await putSemester({
                id: props.semester.id,
                year: year.value,
                semester: semester.value
            })
        } else {
            await postSemester({
                year: year.value,
                semester: semester.value
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
        year.value = props.semester.year
        semester.value = props.semester.semester
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