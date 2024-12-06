<template>
    <td><el-input v-model="semesterClass.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="quizType.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="time" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useQuizStore } from "@/stores/quiz";

const props = defineProps({
    quiz: {
        type: Object,
        default: () => ({
            id: '',
            semesterClass: '',
            quizType: '',
            time: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postQuiz, putQuiz } = useQuizStore();

const semesterClass = ref(props.quiz.semesterClass)
const quizType = ref(props.quiz.quizType)
const time = ref(props.quiz.time)

const save = async () => {
    try {
        if (props.isEdit) {
            await putQuiz({
                id: props.quiz.id,
                semesterClass: semesterClass.value,
                quizType: quizType.value,
                time: time.value
            })
        } else {
            await postQuiz({
                semesterClass: semesterClass.value,
                quizType: quizType.value,
                time: time.value
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
        semesterClass.value = props.quiz.semesterClass
        quizType.value = props.quiz.quizType
        time.value = props.quiz.time
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