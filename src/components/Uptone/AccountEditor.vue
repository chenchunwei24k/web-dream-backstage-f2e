<template>
    <div class="AccountEditor">
        <div class="AccountEditor__block">
            <div class="AccountEditor__title">account image</div>
            <div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="handleAccountChange"
                    :show-file-list="false"
                >
                    <img class="AccountEditor__previewImg" v-if="props.account.img" :src="props.account.img">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>
            </div>
        </div>

        <div class="AccountEditor__block">
            <div class="AccountEditor__title">description</div>
            <el-input 
                v-model="description"
                class="AccountEditor__input" 
                placeholder="please input description" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>
        
        <div class="AccountEditor__save">
            <el-button @click="cancel">cancel</el-button>
            <el-button type="primary" @click="save">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { watch, ref } from "vue";
import { useAccountStore } from "@/stores/account";

const props = defineProps({
    Account: {
        type: Object,
        default: () => ({
            id: '',
            img: '',
            description: ''
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postAccount, updateAccount } = useAccountStore();

const bannerImg = ref(null)

const handleAccountChange = (file) => {
    bannerImg.value = URL.createObjectURL(file.raw)
}

const description = ref(props.account.description);

const save = async () => {
    try {
        if (props.isEdit) {
            await updateAccount({
                id: props.account.id,
                imageURL: bannerImg.value,
                contents: description.value
            })
        } else {
            await postAccount({
                imageURL: bannerImg.value,
                contents: description.value
            })
        }

        emit('save')
    } catch (error) {
        console.error(error)
    }
}

const cancel = () => {
    emit('save')
}

watch(() => props.isEdit, () => {
    if (props.isEdit) {
        description.value = props.Account.contents
    }
}, { immediate: true })
</script>

<style lang="scss">
.AccountEditor {
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