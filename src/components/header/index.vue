<template>
<div class="index">
    <Title />
    <Menu />
</div>
</template>

<script>
import Title from './TheTitle'
import Menu from './TheMenu'

export default {
    components: {
        Title,
        Menu

    }

}
</script>

<style lang="scss" scoped>
.index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
