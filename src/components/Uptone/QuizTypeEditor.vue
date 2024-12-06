<template>
    <td><el-input v-model="name" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useQuizTypeStore } from "@/stores/quizType";

const props = defineProps({
    quizType: {
        type: Object,
        default: () => ({
            id: '',
            name: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postQuizType, putQuizType } = useQuizTypeStore();

const name = ref(props.quizType.name)

const save = async () => {
    try {
        if (props.isEdit) {
            await putQuizType({
                id: props.quizType.id,
                name: name.value
            })
        } else {
            await postQuizType({
                name: name.value
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
        name.value = props.quizType.name
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