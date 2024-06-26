<template>
    <div class="TeacherEditor">
        <h2>Teacher</h2>

        <div v-for="(teacher, teacherIndex) in teacherList" :key="'teacher'+teacherIndex">
            <h3>teacher {{ teacherIndex + 1 }}</h3>

            <div class="TeacherEditor__block">
                <div class="TeacherEditor__title">img</div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="(file) => handleImgChange(file, teacherIndex)"
                    :show-file-list="false"
                >
                    <img class="TeacherEditor__previewImg" v-if="teacher.img" :src="teacher.img">
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
                    v-model="teacher.name"
                    class="TeacherEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="TeacherEditor__block">
                <div class="TeacherEditor__title">description</div>
                <el-input 
                    v-model="teacher.description"
                    class="TeacherEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="TeacherEditor__block">
                <div class="TeacherEditor__title">major</div>
                <div v-for="(major, majorIndex) in teacher.major" :key="'major'+majorIndex">
                    <el-input
                        v-model="teacher.major[majorIndex]"
                        class="TeacherEditor__input" 
                        placeholder="please input name" 
                        :row="5"
                        ></el-input>
                </div>

                <el-button @click="addMajor(teacherIndex)">Add Major</el-button>
            </div>
        </div>

        <el-button @click="addTeacher">Add Teacher</el-button>

        <div class="ClassEditor__save">
            <el-button type="primary">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"

const teacherList = ref([{ name: '', description: '', major: [ '' ], img: '' }])

const handleImgChange = (file, index) => {
    teacherList.value[index].img = URL.createObjectURL(file.raw)
}

const addTeacher = () => {
    teacherList.value.push({ name: '', description: '', major: [ '' ], img: '' })
}

const addMajor = (index) => {
    teacherList.value[index].major.push('')
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