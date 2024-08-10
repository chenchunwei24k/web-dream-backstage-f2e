<template>
    <div class="ClassesEditor">
        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">img</div>
            <el-upload 
                drag 
                accept="image/*" 
                :auto-upload="false"
                :on-change="(file) => handleClassesImgChange(file)"
                :show-file-list="false"
            >
                <img class="ClassesEditor__previewImg" v-if="props.classes.imageURL" :src="props.classes.imageURL">
                <template v-else>
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                    </div>
                </template>
            </el-upload>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">classesType</div>
            
            <el-select v-model="classes.classesType">
                <el-option
                    v-for="classesType in classesTypeList"
                    :key="classesType.type"
                    :label="classesType.type"
                    :value="classesType.type"
                ></el-option>
            </el-select>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">title</div>
            <el-input 
                v-model="classes.title"
                class="ClassesEditor__input" 
                placeholder="please input title"
                ></el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">time</div>
            <el-date-picker
                v-model="classes.time"
                type="daterange"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                value-format="x"
            />
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">price</div>
            <el-input
                v-model="classes.price.price"
                style="max-width: 600px"
                placeholder="Please input"
                class="input-with-select"
                type="number"
            >
            <template #prepend>
                <el-select v-model="classes.price.currency" style="width: 115px">
                    <el-option v-for="currency in currencyOptions" :label="currency.label" :value="currency.value" />
                </el-select>
            </template>
            <template #append>
                <el-select v-model="classes.price.priceFrequency" style="width: 115px">
                    <el-option v-for="priceFrequency in priceFrequencyOptions" :label="priceFrequency.label" :value="priceFrequency.value" />
                </el-select>
            </template>
            </el-input>
        </div>

        <div class="ClassesEditor__block">
            <div class="ClassesEditor__title">ages</div>
            <el-input 
                v-model="classes.ages"
                class="ClassesEditor__input" 
                placeholder="please input ages"
            ></el-input>
        </div>

        <div class="ClassesEditor__save">
            <el-button type="primary" @click="cancel">Cancel</el-button>
            <el-button type="primary" @click="save">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref, watch } from "vue"
import { useClassesStore } from "@/stores/classes"
import { useClassesTypeStore } from "@/stores/classesType";

const props = defineProps({
    classes: {
        type: Object,
        default: () => ({
            id: '',
            img: '',
            classesType: '',
            title: '',
            startTime: '',
            endTime: '',
            price: {
                price: 0,
                currency: '',
                priceFrequency: []
            },
            ages: ''
        })
    },
})

const currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'CNY', value: 'CNY' },
]

const priceFrequencyOptions = [
    { label: 'per class', value: 'CLASSES' },
    { label: 'per minute', value: 'MINUTES' },
    { label: 'per day', value: 'DAYS' },
    { label: 'per month', value: 'MONTHS' },
    { label: 'per year', value: 'YEARS' }
]

const { postClasses } = useClassesStore();
const { classesTypeList } = useClassesTypeStore();

const classes = ref({
    img: props.classes.imageURL,
    classesType: props.classes.classesType,
    title: props.classes.title,
    time: [props.classes.startTime, props.classes.endTime],
    price: props.classes.price,
    ages: props.classes.ages
})

const handleClassesImgChange = (file) => {
    classes.value.img = URL.createObjectURL(file.raw)
}

const save = async () => {
    try {
        await postClasses({
            img: classes.value.img,
            classesType: classes.value.classesType,
            title: classes.value.title,
            startTime: classes.value.time[0],
            endTime: classes.value.time[1],
            price: classes.value.price,
            ages: classes.value.ages
        })

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
        classes.value.img = props.classes.imageURL
        classes.value.classesType = props.classes.classesType
        classes.value.title = props.classes.title
        classes.value.time = [props.classes.startTime, props.classes.endTime]
        classes.value.price = props.classes.price
        classes.value.ages = props.classes.ages
    }
}, { immediate: true })
</script>

<style lang="scss">
.ClassesEditor {
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

    &__save {
        display: flex;
        justify-content: flex-end;
    }
}
</style>