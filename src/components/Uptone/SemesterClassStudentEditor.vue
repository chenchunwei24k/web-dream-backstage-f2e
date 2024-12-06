<template>
    <td><el-input v-model="semesterClass.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="student.id" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { ref, watch } from "vue"
import { useSemesterClassStudentStore } from "@/stores/semesterClassStudent";

const props = defineProps({
    semesterClassStudent: {
        type: Object,
        default: () => ({
            id: '',
            semesterClass: '',
            student: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postSemesterClassStudent, putSemesterClassStudent } = useSemesterClassStudentStore();

const semesterClass = ref(props.semesterClassStudent.semesterClass)
const student = ref(props.semesterClassStudent.student)

// const handleClassesImgChange = (file) => {
//     classes.value.img = URL.createObjectURL(file.raw)
// }

const save = async () => {
    try {
        if (props.isEdit) {
            console.log(props.semesterClassStudent.id)
            await putSemesterClassStudent({
                id: props.semesterClassStudent.id,
                semesterClass: semesterClass.value,
                student: student.value
            })
        } else {
            await postSemesterClassStudent({
                semesterClass: semesterClass.value,
                student: student.value
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
        semesterClass.value = props.semesterClassStudent.semesterClass
        student.value = props.semesterClassStudent.student
    }
}, { immediate: true })
</script>

<style lang="scss">
.ClassesEditor {
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

    &__save {
        display: flex;
        justify-content: flex-end;
    }
}
</style>