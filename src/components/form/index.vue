<template>
<div class="container">

    <Form1 class="form" />

</div>
</template>

<script>
import Form1 from './form1.vue'
export default {
    components: {
        Form1
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;

    .form {
        width: 32%;
        margin: 1%;
        height: fit-content;
    }
}
</style>
