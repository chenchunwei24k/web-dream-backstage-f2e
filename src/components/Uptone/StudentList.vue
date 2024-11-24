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