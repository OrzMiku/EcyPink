<template>
    <div class="setu">
        <h2>色图</h2>
        <div class="img-box">
            <p class="tips">点击图片切换下一张</p>
            <template v-if="setu === ''">少女祈祷中...</template>
            <img @click="update" v-else :src="setu" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getSetu } from '../utils/setu'
import { isR18 } from '../utils/params'
const setu = ref("");
const r18 = isR18();
console.log(r18);
getSetu(r18).then((value => setu.value = value.pics))
function update() {
    setu.value = "";
    getSetu(r18).then((value => setu.value = value.pics))
}
</script>

<style scoped>
.img-box {

    border: 3px solid #505050;
    margin: 10px 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    transition: 0.2s;
}

.img-box .tips {
    text-align: center;
    background-color: #505050;
    color: white;
    padding: 5px;
}

img {
    width: 100%;
}
</style>