<template>
    <div class="AssociationEditor">
        <div class="AssociationEditor__block">
            <div class="AssociationEditor__title">association image</div>
            <div>
                <el-upload 
                    drag 
                    accept="image/*" 
                    :auto-upload="false"
                    :on-change="handleAssociationChange"
                    :show-file-list="false"
                >
                    <img class="AssociationEditor__previewImg" v-if="props.association.img" :src="props.association.img">
                    <template v-else>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                        </div>
                    </template>
                </el-upload>
            </div>
        </div>

        <div class="AssociationEditor__block">
            <div class="AssociationEditor__title">description</div>
            <el-input 
                v-model="description"
                class="AssociationEditor__input" 
                placeholder="please input description" 
                type="textarea"
                :row="5"
                ></el-input>
        </div>
        
        <div class="AssociationEditor__save">
            <el-button @click="cancel">cancel</el-button>
            <el-button type="primary" @click="save">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { watch, ref } from "vue";
import { useAssociationStore } from "@/stores/association";

const props = defineProps({
    association: {
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

const { postAssociation, updateAssociation } = useAssociationStore();

const bannerImg = ref(null)

const handleAssociationChange = (file) => {
    bannerImg.value = URL.createObjectURL(file.raw)
}

const description = ref(props.association.description);

const save = async () => {
    try {
        if (props.isEdit) {
            await updateAssociation({
                id: props.association.id,
                imageURL: bannerImg.value,
                contents: description.value
            })
        } else {
            await postAssociation({
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
        description.value = props.association.contents
    }
}, { immediate: true })
</script>

<style lang="scss">
.AssociationEditor {
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