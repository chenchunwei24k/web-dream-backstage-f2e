<template>
    <div class="ClassesList">
        <h2>Class</h2>
        
        <table class="table">
            <thead>
                <th>Major</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="classes in classesStore.classesList" :key="classes.id">
                    <template v-if="classes.isEdit">
                        <!-- <StudentEditor :student="student" :is-edit="student.isEdit" @save="() => student.isEdit = false" /> -->
                    </template>
                    <template v-else>
                        <td>{{ classes.major }}</td>
                        <td>{{ classes.name }}</td>
                        <td>{{ classes.description }}</td>
                        <td>
                            <el-button @click="onEdit(classes)">Edit</el-button>
                            <el-button type="primary" @click="onDelete(classes.id)">Delete</el-button>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<script setup>
import { ref, onMounted } from "vue"
import ClassesEditor from "./ClassesEditor.vue";
import { useClassesStore } from "@/stores/classes"
import moment from "moment";

const classesStore = useClassesStore();

const isAdding = ref(false);

const toggleClassesList = () => {
    isAdding.value = !isAdding.value;
}

const dateFormat = (date) => {
    return moment(date).format("YYYY/MM/DD HH:mm:ss");
}

onMounted(async () => {
    await classesStore.getClasses();
})

const onDelete = (id) => {
    console.log(id)
}

const onEdit = (classes) => {
    classes.isEdit = true
}

</script>