<template>
    <div class="AssociationList">
        <h2>Association</h2>

        <div v-for="association in associationStore.associationList" :key="association.id">
            <div class="AssociationList__association" v-if="!association.isEdit">
                <div class="AssociationList__block">
                    <div class="AssociationList__title">association image 
                        <el-button type="danger" @click="deleteAssociation(association.id)">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-button>
                    </div>
                    <div>
                        <img class="AssociationList__previewImg" :src="association.img">
                    </div>
                </div>

                <div class="AssociationList__block">
                    <div class="AssociationList__title">contents</div>
                    <div>
                        {{ association.contents }}
                    </div>
                </div>
            </div>

            <div class="AssociationList__association" v-else>
                <AssociationEditor :association="association" />
            </div>

            <el-divider></el-divider>
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

const associationStore = useAssociationStore();

const isAdding = ref(false);

const toggleAssociationEditor = () => {
    isAdding.value = !isAdding.value;
}

const deleteAssociation = async (id) => {
    await associationStore.deleteAssociation(id);
}

onMounted(async () => {
    await associationStore.getAssociation();
})
</script>

<style lang="scss">
.AssociationList {
    &__association {
        padding: 10px;
        &:hover {
            background-color: #eee;
        }
    }

    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    &__previewImg {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
}
</style>