<template>
    <div class="AccountList">
        <h2>Account</h2>

        <div v-if="accountStore.account != null">
            <h2>If</h2>
        </div>

        <div v-for="(account,index) in accountStore.account" :key="account.id">
            <div class="accountList__account" v-if="!account.isEdit">
                <h2>If</h2>
                <table>
                    <thead>
                        <tr>
                        <th>username</th>
                        <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <!-- 修正：使用 <tr> 包含 <td> -->
                            <td>
                                <input type="text" v-model="account.username" /> <!-- 修正 type 為 text -->
                            </td>
                            <td>
                                <input type="password" v-model="account.password" />
                            </td>
                        </tr>
                    </tbody>
                    </table>    
            </div>

            <div class="AccountList__account" v-else>
                <h2>Else</h2>
                <AccountEditor :account="account" :is-edit="account.isEdit" @save="() => account.isEdit = false"  />
            </div>

            <el-divider></el-divider>
        </div>

        <div v-if="!isAdding">
            <el-button type="primary" @click="toggleAccountEditor">Add account</el-button>
        </div>
        <div v-else>
            <accountEditor @save="toggleAccountEditor" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import AccountEditor from "./AccountEditor.vue";
import { useAccountStore } from "@/stores/account";

const accountStore = useAccountStore();

const isAdding = ref(false);

const toggleAccountEditor = () => {
    isAdding.value = !isAdding.value;
}

const deleteAccount = async (id) => {
    await accountStore.deleteAccount(id);
}

onMounted(async () => {
    await accountStore.getAccount();
})
</script>

<style lang="scss">
.AccountList {
    &__account {
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