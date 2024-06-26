<template>
    <div class="ClassEditor">
        <h2>Class</h2>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">banner</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="handleBannerChange"
                :show-file-list="false"
            >
                <img class="ClassEditor__previewImg" v-if="bannerImg" :src="bannerImg">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <h3>Group class</h3>

        <div v-for="(groupClass, groupClassIndex) in groupClassList" :key="'groupClass'+groupClassIndex">
            <div class="ClassEditor__block">
                <div class="ClassEditor__title">img</div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="(file) => handleGroupClassImgChange(file, groupClassIndex)"
                    :show-file-list="false"
                >
                    <img class="ClassEditor__previewImg" v-if="groupClass.img" :src="groupClass.img">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">title</div>
                <el-input 
                    v-model="groupClass.title"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">time</div>
                <el-input 
                    v-model="groupClass.time"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">price</div>
                <el-input 
                    v-model="groupClass.price"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>
        </div>

        <el-button @click="addGroupClass">Add Group Class</el-button>

        <h3>Private lesson</h3>

        <div v-for="(privateLesson, privateLessonIndex) in privateLessonList" :key="'privateLesson'+ privateLessonIndex">
            <div class="ClassEditor__block">
                <div class="ClassEditor__title">img</div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="(file) => handlePrivateLessonImgChange(file, privateLessonIndex)"
                    :show-file-list="false"
                >
                    <img class="ClassEditor__previewImg" v-if="privateLesson.img" :src="privateLesson.img">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">title</div>
                <el-input 
                    v-model="privateLesson.title"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">time</div>
                <el-input 
                    v-model="privateLesson.time"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">price</div>
                <el-input 
                    v-model="privateLesson.price"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>
        </div>

        <el-button @click="addPrivateLesson">Add Private Lesson</el-button>

        <h3>Special Program</h3>

        <div v-for="(specialProgram, specialProgramIndex) in specialProgramList" :key="'specialProgram'+specialProgramIndex">
            <div class="ClassEditor__block">
                <div class="ClassEditor__title">img</div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="(file) => handleSpecialProgramImgChange(file, specialProgramIndex)"
                    :show-file-list="false"
                >
                    <img class="ClassEditor__previewImg" v-if="specialProgram.img" :src="specialProgram.img">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">title</div>
                <el-input 
                    v-model="specialProgram.title"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">time</div>
                <el-input 
                    v-model="specialProgram.time"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>

            <div class="ClassEditor__block">
                <div class="ClassEditor__title">price</div>
                <el-input 
                    v-model="specialProgram.price"
                    class="ClassEditor__input" 
                    placeholder="please input name" 
                    type="textarea"
                    :row="5"
                    ></el-input>
            </div>
        </div>

        <el-button @click="addSpecialProgram">Add Special Program</el-button>

        <div class="ClassEditor__save">
            <el-button type="primary">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"

const bannerImg = ref(null)

const handleBannerChange = (file) => {
    bannerImg.value = URL.createObjectURL(file.raw)
}

const groupClassList = ref([{img: '', title: '', time: '', price: ''}])

const handleGroupClassImgChange = (file, index) => {
    groupClassList.value[index].img = URL.createObjectURL(file.raw)
}

const addGroupClass = () => {
    groupClassList.value.push({img: '', title: '', time: '', price: ''})
}

const privateLessonList = ref([{img: '', title: '', time: '', price: ''}])

const handlePrivateLessonImgChange = (file, index) => {
    privateLessonList.value[index].img = URL.createObjectURL(file.raw)
}

const addPrivateLesson = () => {
    privateLessonList.value.push({img: '', title: '', time: '', price: ''})
}

const specialProgramList = ref([{img: '', title: '', time: '', price: ''}])

const handleSpecialProgramImgChange = (file, index) => {
    specialProgramList.value[index].img = URL.createObjectURL(file.raw)
}

const addSpecialProgram = () => {
    specialProgramList.value.push({img: '', title: '', time: '', price: ''})
}
</script>

<style lang="scss">
.ClassEditor {
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