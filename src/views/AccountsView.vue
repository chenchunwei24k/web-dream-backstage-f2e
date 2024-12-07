<template>
  <div class="AccountsView">
    <h2>帳號管理</h2>

    <div>
      <el-table :data="accountStore.AccountList" stripe border class="w-full"
        :header-row-style="{ color: '#333333', fontWeight: '700' }" :header-cell-style="{ backgroundColor: '#dddddd' }"
        header-cell-class-name="bg-black" @row-click="handleRowClick">
        <el-table-column prop="Username" label="姓名" min-width="100px" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="username"></el-input>
            </div>
            <div v-else>
              <span>{{ row.username }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="FirstName" label="名" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="firstName"></el-input>
            </div>
            <div v-else>
              <span>{{ row.firstName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="LastName" label="姓" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="lastName"></el-input>
            </div>
            <div v-else>
              <span>{{ row.lastName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Phone" label="手機" min-width="180px" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="phone"></el-input>
            </div>
            <div v-else>
              <span>{{ row.phone }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Email" label="信箱" min-width="180px" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="email"></el-input>
            </div>
            <div v-else>
              <span>{{ row.email }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Role" label="角色" align="center">
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-input v-model="role"></el-input>
            </div>
            <div v-else>
              <span>{{ row.role }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Action" align="center" min-width='250px'>
          <template #default="{ row }">
            <div v-if="row.isEdit">
              <el-button type="primary" @click="save(row)">Save</el-button>
              <el-button type="danger" @click="cancel(row)">cancel</el-button>
            </div>
            <div v-else>
              <el-button type="primary" @click="onEdit(row)">Edit</el-button>
              <el-button type="danger" @click="onDelete(row.id)">Delete</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useAccountStore } from "@/stores/account";

const accountStore = useAccountStore();
const { postAccount, updateAccount } = useAccountStore();

const username = ref('');
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');
const role = ref('');


const save = async (account) => {
  try {
    if (account.isEdit) {
      await updateAccount({
        id: account.id,
        username: username.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        role: role.value
      })
    } else {
      await postAccount({
        username: username.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        role: role.value
      })
      cancel(account)
    }
  } catch (error) {
    console.error(error)
  }
}

const cancel = (account) => {
  account.isEdit = false
}

const onDelete = async (id) => {
  await accountStore.deleteAccount(id);
}

onMounted(async () => {
  await accountStore.getAccount();
})

const onEdit = (account) => {
  account.isEdit = true
  username.value = account.username
  firstName.value = account.firstName
  lastName.value = account.lastName
  phone.value = account.phone
  email.value = account.email
  role.value = account.role
}
</script>

<style lang="scss">
.AccountsView {
  padding: 20px 20px 0;
}
</style>