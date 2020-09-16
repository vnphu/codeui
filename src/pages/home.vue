<template>
<div>
    <!-- <div class="title">Hello Như Phú</div> -->
    <Header />
    <Main class="main" />
    <Footer />
    <Load class="load" />
</div>
</template>

<script>
import Header from '../components/header/index';
import Footer from '../components/footer/index'
import Load from './load'
import Main from '../components/main/index'
export default {
    components: {
        Header,
        Footer,
        Load,
        Main
    }

}
</script>

<style lang="scss" scoped>
.main {
    background-color: #ecf0f1;

}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.load {
    animation: fadein 2s alternate forwards;
}

@keyframes fadein {
    0% {
        opacity: 1;
        z-index: 99;
    }

    30% {
        opacity: 1;
        z-index: 99;
    }

    70% {
        opacity: 1;
        z-index: 99;
    }

    90% {
        opacity: 1;
        z-index: 99;
    }

    100% {
        opacity: 0;
        z-index: -2;
    }
}
</style>
