<template>
    <div class="TeacherEditor">
        <h2>Teacher</h2>

        <div class="TeacherEditor__block">
            <div class="TeacherEditor__title">img</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="handleBannerChange"
                :show-file-list="false"
            >
                <img class="TeacherEditor__previewImg" v-if="bannerImg" :src="bannerImg">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <div class="TeacherEditor__block">
            <div class="TeacherEditor__title">name</div>
            <el-input 
                class="TeacherEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="TeacherEditor__block">
            <div class="TeacherEditor__title">description</div>
            <el-input 
                class="TeacherEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="TeacherEditor__block">
            <div class="TeacherEditor__title">major</div>
            <el-input 
                class="TeacherEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"

const bannerImg = ref(null)

const handleBannerChange = (file) => {
    bannerImg.value = URL.createObjectURL(file.raw)
}
</script>

<style lang="scss">
.TeacherEditor {
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
}
</style>