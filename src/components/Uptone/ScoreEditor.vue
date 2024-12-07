<template>
    <td><el-input v-model="semesterClassStudent.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="quiz.id" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="score" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useScoreStore } from "@/stores/score";

const props = defineProps({
    score: {
        type: Object,
        default: () => ({
            id: '',
            semesterClass: '',
            scoreType: '',
            time: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postScore, putScore } = useScoreStore();

const semesterClassStudent = ref(props.score.semesterClassStudent)
const quiz = ref(props.score.quiz)
const score = ref(props.score.score)

const save = async () => {
    try {
        if (props.isEdit) {
            await putScore({
                id: props.score.id,
                semesterClassStudent: semesterClassStudent.value,
                quiz: quiz.value,
                score: score.value
            })
        } else {
            await postScore({
                semesterClassStudent: semesterClassStudent.value,
                quiz: quiz.value,
                score: score.value
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
        semesterClassStudent.value = props.score.semesterClassStudent
        quiz.value = props.score.quiz
        score.value = props.score.score
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