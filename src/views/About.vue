<template>
    <h2>关于</h2>
    <div class="tags">
        <template v-for="item of tags" :key="item">
            <Tag :text="item" />
        </template>
    </div>
    <div class="description">
        <div class="head">
            <div class="logo"></div>
            <div class="profiles">
                <div class="title">
                    ID: 神奇の赵贰
                </div>
                <div class="subtitle">
                    求知若渴，虚心若愚。读万卷书，行万里路。
                </div>
            </div>
        </div>
        <div class="body">
            <p>在校大学生，校园蛀虫一只。</p>
            <p>懒狗且菜比。</p>
            <p>学习计算机，但是弱鸡。</p>
            <p>代码，游戏，动漫，人生三大美事。</p>
            <p>正在变成肥宅，渴望周游世界，吃遍美食。</p>
        </div>
        <div class="footer">e-mail: miku@ecy.pink</div>
    </div>
</template>

<script setup>
import Tag from '../components/Tag.vue';
import tags from '../data/tags'

</script>

<style scoped>
.head {
    background: #505050;
    height: 128px;
    border-bottom: 3px solid #505050;
    overflow: hidden;
}

.head>.logo {
    float: left;
    background: url(https://q1.qlogo.cn/g?b=qq&nk=2475539124&s=640) no-repeat;
    background-size: cover;
    height: 128px;
    width: 128px;
}

.head>.profiles {
    box-sizing: border-box;
    padding: 20px;
    color: white;
    float: left;
}

.head>.profiles>.title {
    font-size: 28px;
    border-bottom: 3px solid white;
    margin-bottom: 5px;
}

.description {
    border: 3px solid #505050;
    margin: 10px 0;
    transition: 0.2s;
}

.description .body {
    padding: 20px;
}

.description p {
    margin-top: 10px;
}

.description .footer {
    text-align: center;
    background-color: #505050;
    color: white;
    padding: 5px;
}
</style>