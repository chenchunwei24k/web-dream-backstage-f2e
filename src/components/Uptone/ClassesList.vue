<template>
    <div class="ClassesList">
        <h2>Class</h2>
        <div v-for="(classes, classesIndex) in classesStore.classesList" :key="classes.id">
            <div class="ClassesList__classes">
            <div class="ClassesList__block">
                <div class="ClassesList__title">img
                    <el-button type="danger" @click="deleteClasses(classes.id)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </el-button>
                </div>
                <div>
                    <img class="ClassesList__previewImg" v-if="classes.img" :src="classes.img">
                </div>
            </div>

            <div class="ClassesList__block">
                <div class="ClassesList__title">classesType</div>
                <div>
                    {{ classes.classesType }}
                </div>
            </div>

            <div class="ClassesList__block">
                <div class="ClassesList__title">title</div>
                <div>
                    {{ classes.title }}
                </div>
            </div>

            <div class="ClassesList__block">
                <div class="ClassesList__title">time</div>

                <div>
                    {{ dateFormat(classes.startTime) }} ~ {{ dateFormat(classes.endTime) }}
                </div>
            </div>

            <div class="ClassesList__block">
                <div class="ClassesList__title">price</div>
                <div>
                    {{ classes.price.currency }} {{ classes.price.price }}
                </div>
                <div class="ClassesList__frequency">
                    <div v-for="frequency in classes.price.priceFrequency" :key="frequency">
                        {{ frequency }}
                    </div>
                </div>
            </div>

            <div class="ClassesList__block">
                <div class="ClassesList__title">ages</div>
                <div>
                    {{ classes.ages }}
                </div>
            </div>
        </div>

            <el-divider />
        </div>


        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleClassesList">Add Classes</el-button>
        </div>
        <div v-else>
            <ClassesEditor @save="toggleClassesList" />
        </div>
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

const deleteClasses = async (id) => {
    await classesStore.deleteClasses(id);
}

const dateFormat = (date) => {
    return moment(date).format("YYYY/MM/DD HH:mm:ss");
}

onMounted(async () => {
    await classesStore.getClasses();
})
</script>

<style lang="scss">
.ClassesList {
    &__classes {
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

    &__frequency {
        display: flex;
        gap: 10px;
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