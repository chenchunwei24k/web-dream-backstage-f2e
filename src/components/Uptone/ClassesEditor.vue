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
            major: '',
            name: '',
            description: '',
        })
    },
})

const { postClasses } = useClassesStore();
// const { classesTypeList } = useClassesTypeStore();

const classes = ref({
    major: props.classes.major,
    name: props.classes.name,
    description: props.classes.description
})

// const handleClassesImgChange = (file) => {
//     classes.value.img = URL.createObjectURL(file.raw)
// }

const save = async () => {
    try {
        await postClasses({
            img: classes.value.img,
            classesType: classes.value.classesType,
            title: classes.value.title,
        })

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
        classes.value.img = props.classes.imageURL
        classes.value.classesType = props.classes.classesType
        classes.value.title = props.classes.title
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