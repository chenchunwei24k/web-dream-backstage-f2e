<template>
    <div class="ClassesEditor">
        <h2>Class</h2>
        <div v-for="(classes, classesIndex) in classesList" :key="'classes'+classesIndex">
            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">img</div>
                <div>
                    <img class="ClassesEditor__previewImg" v-if="classes.img" :src="classes.img">
                </div>
            </div>

            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">classesType</div>
                <div>
                    {{ classes.classesType }}
                </div>
            </div>

            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">title</div>
                <div>
                    {{ classes.title }}
                </div>
            </div>

            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">time</div>

                <div>
                    {{ classes.startTime }} ~ {{ classes.endTime }}
                </div>
            </div>

            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">price</div>
                <div>
                    {{ classes.price }}
                </div>
            </div>

            <div class="ClassesEditor__block">
                <div class="ClassesEditor__title">ages</div>
                <div>
                    {{ classes.ages }}
                </div>
            </div>
        </div>


        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleClassesEditor">Add Classes</el-button>
        </div>
        <div v-else>
            <ClassesEditor @save="toggleClassesEditor" />
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from "vue"
import ClassesEditor from "./ClassesEditor.vue";
import { useClassesStore } from "@/stores/classes"

const { classesList, getClasses } = useClassesStore();

const isAdding = ref(false);

const toggleClassesEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted(() => {
    getClasses();
})
</script>

<style lang="scss">
.ClassesEditor {
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

    &__save {
        display: flex;
        justify-content: flex-end;
    }
}
</style>