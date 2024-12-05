<template>
    <td><el-input v-model="semester.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="classes.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="account.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="frequency" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="startTime" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="endTime" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { ref, watch } from "vue"
import { useSemesterClassStore } from "@/stores/semesterClass";
import { useClassesStore } from "@/stores/classes"
import { useAccountStore } from "@/stores/account";
// import { useClassesTypeStore } from "@/stores/classesType";

const props = defineProps({
    semesterClass: {
        type: Object,
        default: () => ({
            id: '',
            semester: '',
            classes: '',
            account: '',
            frequency: '',
            startTime: '',
            endTime: '',
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postSemesterClass, putSemesterClass } = useSemesterClassStore();

const semester = ref(props.semesterClass.semester)
const classes = ref(props.semesterClass.classes)
const account = ref(props.semesterClass.account)
const frequency = ref(props.semesterClass.frequency)
const startTime = ref(props.semesterClass.startTime)
const endTime = ref(props.semesterClass.endTime)

// const handleClassesImgChange = (file) => {
//     classes.value.img = URL.createObjectURL(file.raw)
// }

const save = async () => {
    try {
        if (props.isEdit) {
            console.log(props.semesterClass.id)
            await putSemesterClass({
                id: props.semesterClass.id,
                semester: semester.value,
                classes: classes.value,
                account: account.value,
                frequency: frequency.value,
                startTime: startTime.value,
                endTime: endTime.value
            })
        } else {
            await postSemesterClass({
                semester: semester.value,
                classes: classes.value,
                account: account.value,
                frequency: frequency.value,
                startTime: startTime.value,
                endTime: endTime.value
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
        semester.value = props.semesterClass.semester
        classes.value = props.semesterClass.classes
        account.value = props.semesterClass.account
        frequency.value = props.semesterClass.frequency
        startTime.value = props.semesterClass.startTime
        endTime.value = props.semesterClass.endTime
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