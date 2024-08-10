<template>
    <div class="ClassesType">
        <h2>ClassesType</h2>

        <div v-for="classesType in classesTypeStore.classesTypeList" :key="classesType.id">
            <div class="ClassesType__classesType" v-if="!classesType.isEdit">
                <div class="ClassesType__block">
                    <div class="ClassesType__title">type
                        <div>
                            <el-button type="primary" @click="() => classesType.isEdit = true">
                                <el-icon>
                                    <Edit />
                                </el-icon>
                            </el-button>

                            <el-button type="danger" @click="deleteClassesType(classesType.type)">
                                <el-icon>
                                    <Delete />
                                </el-icon>
                            </el-button>
                        </div>
                    </div>
                    <div>
                        {{ classesType.type }}
                    </div>
                </div>

                <div class="ClassesType__block">
                    <div class="ClassesType__title">content</div>
                    <div class="ClassesType__content" v-for="info in classesType.content" :key="info">
                        {{ info }}
                    </div>
                </div>
            </div>

            <div v-else>
                <ClassesTypeEditor :classesType="classesType" :isEdit="classesType.isEdit" @save="() => classesType.isEdit = false" />
            </div>

            <el-divider />
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

const classesTypeStore = useClassesTypeStore();

const isAdding = ref(false);

const toggleClassesTypeEditor = () => {
    isAdding.value = !isAdding.value;
}

const deleteClassesType = async (id) => {
    await classesTypeStore.deleteClassesType(id);
}

onMounted(async () => {
   await classesTypeStore.getClassesType();
})
</script>

<style lang="scss">
.ClassesType {
    &__classesType {
        padding: 10px;
        &:hover {
            background-color: #eee;
        }
    }

    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
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