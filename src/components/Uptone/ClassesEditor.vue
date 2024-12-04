<template>
    <td><el-input v-model="major" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="name" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="description" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { ref, watch } from "vue"
import { useClassesStore } from "@/stores/classes"
// import { useClassesTypeStore } from "@/stores/classesType";

const props = defineProps({
    classes: {
        type: Object,
        default: () => ({
            id: '',
            major: '',
            name: '',
            description: '',
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postClasses, putClasses } = useClassesStore();
// const { classesTypeList } = useClassesTypeStore();

const major = ref(props.classes.major)
const name = ref(props.classes.name)
const description = ref(props.classes.description)

// const handleClassesImgChange = (file) => {
//     classes.value.img = URL.createObjectURL(file.raw)
// }

const save = async () => {
    try {
        if (props.isEdit) {
            console.log(props.classes.id)
            await putClasses({
                id: props.classes.id,
                major: major.value,
                name: name.value,
                description: description.value
            })
        } else {
            await postClasses({
                major: major.value,
                name: name.value,
                description: description.value
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
        major.value = props.classes.major
        name.value = props.classes.name
        description.value = props.classes.description
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