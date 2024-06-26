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


        <div class="ClassEditor__block">
            <div class="ClassEditor__title">img</div>
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

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">title</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">time</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">price</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <h3>Private lesson</h3>


        <div class="ClassEditor__block">
            <div class="ClassEditor__title">img</div>
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

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">title</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">time</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">price</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <h3>Special Program</h3>


        <div class="ClassEditor__block">
            <div class="ClassEditor__title">img</div>
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

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">title</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">time</div>
            <el-input 
                class="ClassEditor__input" 
                placeholder="please input name" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>

        <div class="ClassEditor__block">
            <div class="ClassEditor__title">price</div>
            <el-input 
                class="ClassEditor__input" 
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
}
</style>