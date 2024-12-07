<template>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
    <div class="StudentList">
        <h2>Student</h2>

        <table class="table">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Birth</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="student in studentStore.StudentList" :key="student.id">
                    <template v-if="student.isEdit">
                        <StudentEditor :student="student" :is-edit="student.isEdit" @save="() => student.isEdit = false" />
                    </template>
                    <template v-else>
                        <td>{{ student.firstName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>{{ student.address }}</td>
                        <td>{{ student.birth }}</td>
                        <td>
                            <el-button @click="onEdit(student)">Edit</el-button>
                            <el-button type="primary" @click="onDelete(student.id)">Delete</el-button>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>

        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleStudentEditor">Add Student</el-button>
        </div>
        <div v-else>
            <StudentEditor @save="toggleStudentEditor" />
        </div>


    </div>
</template>

<script setup>

import { onMounted, ref } from "vue"
import { useStudentStore } from "@/stores/student"
import StudentEditor from "./StudentEditor.vue"

const studentStore = useStudentStore()

const isAdding = ref(false);

const toggleStudentEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted( async () => {
    await studentStore.getStudent()
})

const onDelete = (id) => {
    console.log(id)
}

const onEdit = (student) => {
    student.isEdit = true
}

const onCancel = (student) => {
    student.isEdit = false
}

</script>
