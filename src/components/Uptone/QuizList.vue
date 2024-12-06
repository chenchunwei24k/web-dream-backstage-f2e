<template>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
    <div class="QuizList">
        <h2>Quiz</h2>

        <table class="table">
            <thead>
                <th>Semester Id</th>
                <th>Quiz Type</th>
                <th>Time</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="quiz in quizStore.QuizList" :key="quiz.id">
                    <template v-if="quiz.isEdit">
                        <QuizEditor :quiz="quiz" :is-edit="quiz.isEdit" @save="() => quiz.isEdit = false" />
                    </template>
                    <template v-else>
                        <td>{{ quiz.semesterClass.id }}</td>
                        <td>{{ quiz.quizType.name }}</td>
                        <td>{{ quiz.time }}</td>
                        <td>
                            <el-button @click="onEdit(quiz)">Edit</el-button>
                            <el-button type="primary" @click="onDelete(quiz.id)">Delete</el-button>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>

        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleQuizEditor">Add Quiz</el-button>
        </div>
        <div v-else>
            <QuizEditor @save="toggleQuizEditor" />
        </div>


    </div>
</template>

<script setup>

import { onMounted, ref } from "vue"
import { useQuizStore } from "@/stores/quiz"
import QuizEditor from "./QuizEditor.vue"

const quizStore = useQuizStore()

const isAdding = ref(false);

const toggleQuizEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted( async () => {
    await quizStore.getQuiz()
})

const onDelete = (id) => {
    console.log(id)
}

const onEdit = (quiz) => {
    quiz.isEdit = true
}

const onCancel = (quiz) => {
    quiz.isEdit = false
}

</script>

<style scoped>
body {
  background: #fafafa url(https://jackrugile.com/images/misc/noise-diagonal.png);
  color: #444;
  font: 100%/30px 'Helvetica Neue', helvetica, arial, sans-serif;
  text-shadow: 0 1px 0 #fff;
}

strong {
  font-weight: bold; 
}

em {
  font-style: italic; 
}

table {
  background: #f5f5f5;
  border-collapse: separate;
  box-shadow: inset 0 1px 0 #fff;
  font-size: 12px;
  line-height: 24px;
  margin: 30px auto;
  text-align: left;
  width: 800px;
} 

th {
  background: url(https://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444);
  border-left: 1px solid #555;
  border-right: 1px solid #777;
  border-top: 1px solid #555;
  border-bottom: 1px solid #333;
  box-shadow: inset 0 1px 0 #999;
  color: #fff;
  font-weight: bold;
  padding: 10px 15px;
  position: relative;
  text-shadow: 0 1px 0 #000;  
}

th:after {
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));
  content: '';
  display: block;
  height: 25%;
  left: 0;
  margin: 1px 0 0 0;
  position: absolute;
  top: 25%;
  width: 100%;
}

th:first-child {
  border-left: 1px solid #777;  
  box-shadow: inset 1px 1px 0 #999;
}

th:last-child {
  box-shadow: inset -1px 1px 0 #999;
}

td {
  border-right: 1px solid #fff;
  border-left: 1px solid #e8e8e8;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 15px;
  position: relative;
  transition: all 300ms;
}

td:first-child {
  box-shadow: inset 1px 0 0 #fff;
} 

td:last-child {
  border-right: 1px solid #e8e8e8;
  box-shadow: inset -1px 0 0 #fff;
} 

tr {
  background: url(https://jackrugile.com/images/misc/noise-diagonal.png); 
}

tr:nth-child(odd) td {
  background: #f1f1f1 url(https://jackrugile.com/images/misc/noise-diagonal.png); 
}

tr:last-of-type td {
  box-shadow: inset 0 -1px 0 #fff; 
}

tr:last-of-type td:first-child {
  box-shadow: inset 1px -1px 0 #fff;
} 

tr:last-of-type td:last-child {
  box-shadow: inset -1px -1px 0 #fff;
} 

tbody:hover td {
  color: transparent;
  text-shadow: 0 0 3px #aaa;
}

tbody:hover tr:hover td {
  color: #444;
  text-shadow: 0 1px 0 #fff;
}

</style>