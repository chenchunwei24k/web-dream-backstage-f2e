<template>
    <h2>Semester</h2>

    <table class="table">
        <thead>
            <th>Year</th>
            <th>Semester</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="semester in semesterStore.SemesterList" :key="semester.id">
                <template v-if="semester.isEdit">
                    <SemesterEditor :semester="semester" :is-edit="semester.isEdit" @save="() => semester.isEdit = false" />
                </template>
                <template v-else>
                    <td>{{ semester.year }}</td>
                    <td>{{ semester.semester }}</td>
                    <td>
                        <el-button @click="onEdit(semester)">Edit</el-button>
                        <el-button type="primary" @click="onDelete(semester.id)">Delete</el-button>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>

    <div v-if="!isAdding">
        <el-button type="primary" @click="toggleSemesterEditor">Add Semester</el-button>
    </div>
    <div v-else>
        <SemesterEditor @save="toggleSemesterEditor" />
    </div>

</template>

<script setup>

import { onMounted, ref } from "vue"
import { useSemesterStore } from "@/stores/semester"
import SemesterEditor from "./SemesterEditor.vue";

const semesterStore = useSemesterStore()

const isAdding = ref(false);

const toggleSemesterEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted( async () => {
    await semesterStore.getSemester()
})

const onDelete = (id) => {
    console.log(id)
}

const onEdit = (semester) => {
    console.log(semester.id)
    semester.isEdit = true
}

</script>
