<template>
    <div class="AssociationList">
        <h2>Association</h2>

        <div v-for="association in associationList" :key="association.id">
            <div v-if="!association.isEdit">
                <div class="AssociationList__block">
                    <div class="AssociationList__title">association image</div>
                    <div>
                        <img class="AssociationList__previewImg" :src="association.img">
                    </div>
                </div>

                <div class="AssociationList__block">
                    <div class="AssociationList__title">description</div>
                    <div>
                        {{ association.description }}
                    </div>
                </div>
            </div>

            <div v-else>
                <AssociationEditor :association="association" />
            </div>
        </div>

        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleAssociationEditor">Add Association</el-button>
        </div>
        <div v-else>
            <AssociationEditor @save="toggleAssociationEditor" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import AssociationEditor from "./AssociationEditor.vue";
import { useAssociationStore } from "@/stores/association";

const { associationList, getAssociation } = useAssociationStore();

const isAdding = ref(false);

const toggleAssociationEditor = () => {
    isAdding.value = !isAdding.value;
}

onMounted(() => {
    getAssociation();
})
</script>

<style lang="scss">
.AssociationList {
    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
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