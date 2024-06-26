<template>
  <div class="PageData">
    <h1>page data setting</h1>

    <el-select v-model="selectedPage">
      <el-option
        v-for="page in pages"
        :key="page"
        :label="page"
        :value="page"
      ></el-option>
    </el-select>

    <component :is="selectedPageEditor"></component>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import HomeEditor from "@/components/Uptone/HomeEditor.vue";
import AboutEditor from "@/components/Uptone/AboutEditor.vue";
import TeacherEditor from "@/components/Uptone/TeacherEditor.vue";
import ClassEditor from "@/components/Uptone/ClassEditor.vue";

const pages = ["Home", "About", "Teacher", "class"]

const selectedPage = ref(null)

const pageEditors = {
  Home: HomeEditor,
  About: AboutEditor,
  Teacher: TeacherEditor,
  class: ClassEditor,
}

const selectedPageEditor = computed(()=> {
  return pageEditors[selectedPage.value]
})
</script>


<style>
.PageData {
  padding: 20px;
}
</style>