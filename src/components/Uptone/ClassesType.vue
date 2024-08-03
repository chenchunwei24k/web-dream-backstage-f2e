<template>
    <div class="ClassesType">
        <h2>ClassesType</h2>

        <div v-for="classesType in classesTypeList" :key="classesType.id">
            <div v-if="!association.isEdit">
                <div class="ClassesType__block">
                    <div class="ClassesType__title">type</div>
                    <div>
                        {{ classesType.type }}
                    </div>
                </div>

                <div class="ClassesType__block">
                    <div class="ClassesType__title">content</div>
                    <div class="ClassesType__content" v-for="info in classesType.content" :key="info">
                        {{ classesType.info }}
                    </div>
                </div>
            </div>

            <div v-else>
                <ClassesTypeEditor :classesType="classesType" />
            </div>
        </div>

        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleClassesTypeEditor">Add ClassesType</el-button>
        </div>
        <div v-else>
            <ClassesTypeEditor @save="toggleClassesTypeEditor" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import ClassesTypeEditor from "./ClassesTypeEditor.vue";
import { useClassesTypeStore } from "@/stores/classesType";

const { classesTypeList, getClassesType } = useClassesTypeStore();

const isAdding = ref(false);

const toggleClassesTypeEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted(() => {
    getClassesType();
})
</script>

<style lang="scss">
.ClassesType {
    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    &__previewImg {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
    &__content {
        margin-bottom: 10px;
    }
}
</style>