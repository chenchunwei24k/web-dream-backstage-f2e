<template>
    <div class="HomeEditor">
        <h2>Home</h2>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">banner</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="handleBannerChange"
                :show-file-list="false"
            >
                <img class="HomeEditor__previewImg" v-if="bannerImg" :src="bannerImg">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">logo</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="handleLogoChange"
                :show-file-list="false"
            >
                <img class="HomeEditor__previewImg" v-if="logoImg" :src="logoImg">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">logo-description</div>
            <el-input class="HomeEditor__input" placeholder="please input logo description first part"></el-input>
            <el-input class="HomeEditor__input" placeholder="please input logo description second part"></el-input>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">association</div>
            <div>
                <div class="HomeEditor__subTitle">img</div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="handleAssociationChange"
                    :show-file-list="false"
                >
                    <img class="HomeEditor__previewImg" v-if="associationImg" :src="associationImg">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>

                <div class="HomeEditor__subTitle">description</div>
                <el-input class="HomeEditor__input" placeholder="please input association description"></el-input>
            </div>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">class</div>
            <div>
                <div class="HomeEditor__subTitle">title</div>
                <el-input class="HomeEditor__input" placeholder="please input class title"></el-input>

                <div class="HomeEditor__subTitle">content</div>
                <div>
                    <el-input class="HomeEditor__input" placeholder="please input class content"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue"

const bannerImg = ref(null)

const handleBannerChange = (file) => {
    bannerImg.value = URL.createObjectURL(file.raw)
}

const logoImg = ref(null)

const handleLogoChange = (file) => {
    logoImg.value = URL.createObjectURL(file.raw)
}

const associationImg = ref(null)

const handleAssociationChange = (file) => {
    associationImg.value = URL.createObjectURL(file.raw)
}
</script>

<style lang="scss">
.HomeEditor {
    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    &__subTitle {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
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