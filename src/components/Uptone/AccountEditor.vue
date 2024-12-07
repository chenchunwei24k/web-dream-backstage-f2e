<template>
    <td><el-input v-model="firstName" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="username" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="lastName" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="phone" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="email" type="textarea" :row="5"></el-input></td>
    <td><el-input v-model="role" type="textarea" :row="5"></el-input></td>
    <td>
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
    </td>
</template>


<script setup>
import { watch, ref } from "vue";
import { useAccountStore } from "@/stores/account";

const props = defineProps({
    account: {
        type: Object,
        default: () => ({
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            role: [
                {
                    id: '',
                    name: ''
                }
            ]
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postAccount, updateAccount } = useAccountStore();

const username = ref(props.account.username);
const firstName = ref(props.account.firstName);
const lastName = ref(props.account.lastName);
const phone = ref(props.account.phone);
const email = ref(props.account.email);
const role = ref(props.account.role);

console.log(props.account)

const save = async () => {
    try {
        if (props.isEdit) {
            await updateAccount({
                id: props.account.id,
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
        username.value = props.account.username
        firstName.value = props.account.firstName
        lastName.value = props.account.lastName
        phone.value = props.account.phone
        email.value = props.account.email
        role.value = props.account.role
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