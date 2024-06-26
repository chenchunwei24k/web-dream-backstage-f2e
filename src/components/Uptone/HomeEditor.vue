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
            <el-input v-model="logoDescription[0]" class="HomeEditor__input" placeholder="please input logo description first part"></el-input>
            <el-input v-model="logoDescription[1]" class="HomeEditor__input" placeholder="please input logo description second part"></el-input>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">association</div>
            <div v-for="(association, index) in associationList" :key="'association' + index">
                <div class="HomeEditor__block">
                    <div class="HomeEditor__subTitle">img</div>
                    <el-upload 
                        drag 
                        accept="image/*" 
                        :auto-upload="false"
                        :on-change="(file) => handleAssociationChange(file, index)"
                        :show-file-list="false"
                    >
                        <img class="HomeEditor__previewImg" v-if="association.img" :src="association.img">
                        <template v-else>
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                            </div>
                        </template>
                    </el-upload>
                </div>

                <div class="HomeEditor__block">
                    <div class="HomeEditor__subTitle">description</div>
                    <el-input v-model="association.description" class="HomeEditor__input" placeholder="please input association description"></el-input>
                </div>
            </div>

            <el-button @click="addAssociation">add association</el-button>
        </div>

        <div class="HomeEditor__block">
            <div class="HomeEditor__title">class</div>
            <div v-for="(classes, classIndex) in classList" :key="'class'+classIndex">
                <div class="HomeEditor__block">
                    <div class="HomeEditor__subTitle">title</div>
                    <el-input v-model="classes.title" class="HomeEditor__input" placeholder="please input class title"></el-input>
                </div>

                <div class="HomeEditor__block">
                    <div class="HomeEditor__subTitle">content</div>
                    <div v-for="(text, textIndex) in classes.content" :key="'text'+textIndex">
                        <el-input v-model="classes.content[textIndex]" class="HomeEditor__input" placeholder="please input class content"></el-input>
                    </div>
                    <el-button @click="addContent(classIndex)">add content</el-button>
                </div>
            </div>

            <el-button @click="addClass">add class</el-button>
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
const logoDescription = ref([])

const handleLogoChange = (file) => {
    logoImg.value = URL.createObjectURL(file.raw)
}

const associationList = ref([{ img: '', description: '' }])

const addAssociation = () => {
    associationList.value.push({
        img: '',
        description: ''
    })
}

const handleAssociationChange = (file, index) => {
    associationList.value[index].img = URL.createObjectURL(file.raw)
}

const classList = ref([{ title: '', content: [ '' ] }])

const addClass = () => {
    classList.value.push({
        title: '',
        content: [ '' ]
    })
}

const addContent = (index) => {
    classList.value[index].content.push('')
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