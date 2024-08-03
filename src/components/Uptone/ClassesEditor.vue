<template>
    <div class="ClassesEditor">
        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">img</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="(file) => handleClassesImgChange(file)"
                :show-file-list="false"
            >
                <img class="ClassesEditor__previewImg" v-if="props.class.img" :src="props.class.img">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">classesType</div>
            <el-input 
                v-model="classes.classesType"
                class="ClassesEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">title</div>
            <el-input 
                v-model="classes.title"
                class="ClassesEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">time</div>
            <el-input 
                v-model="classes.time"
                class="ClassesEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">price</div>
            <el-input 
                v-model="classes.price"
                class="ClassesEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
            ></el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">ages</div>
            <el-input 
                v-model="classes.ages"
                class="ClassesEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
            ></el-input>
        </div>

        <div class="ClassesEditor__save">
            <el-button type="primary" @click="save">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"
import { useClassesStore } from "@/stores/classes"

const props = defineProps({
    class: {
        type: Object,
        default: () => ({
            id: '',
            img: '',
            classesType: '',
            title: '',
            startTime: '',
            endTime: '',
            price: {
                price: 0,
                currency: '',
                priceFrequency: []
            },
            ages: ''
        })
    },
})

const { postClasses } = useClassesStore();

const classes = ref({
    img: props.class.img,
    classesType: props.class.classesType,
    title: props.class.title,
    startTime: props.class.startTime,
    endTime: props.class.endTime,
    price: props.class.price,
    ages: props.class.ages
})

const handleClassesImgChange = (file) => {
    classes.value.img = URL.createObjectURL(file.raw)
}

const save = async () => {
    try {
        await postClasses({
            img: classes.value.img,
            classesType: classes.value.classesType,
            title: classes.value.title,
            startTime: classes.value.startTime,
            endTime: classes.value.endTime,
            price: classes.value.price,
            ages: classes.value.ages
        })

        emit('save')
    } catch (error) {
        console.error(error)
    }
}
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