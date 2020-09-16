<template>
<div>
    <nav>
        <router-link to='/' class="li" active-class="active"> Form</router-link>
        <router-link to='/button' class="li" active-class="active"> Button</router-link>
        <router-link to='/loading' class="li" active-class="active"> Loading</router-link>
        <router-link to='/text' class="li" active-class="active"> Text</router-link>
        <router-link to='/dropdown' class="li" active-class="active"> Dropdown</router-link>
        <router-link to='/menu' class="li" active-class="active"> menu</router-link>
    </nav>

</div>
</template>

<script>
// import Form from '../form/index'
export default {

}
</script>

<style lang="scss" scoped>
// margin-top: 2rem;

nav {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    width: 100vw;
    border-top: 0.1rem solid #ccc;
    // border-bottom: 0.1rem solid #ccc;

    .li {
        padding: 1rem 2rem;
        margin-top: 1rem;
        color: var(--gray);

        font-size: 1.8rem;
        border-radius: 0.5rem;
        transition: all 0.3s;

        &:hover {
            background: linear-gradient(to right, #ff6ec4, #7873f5);
            cursor: pointer;
            transition: all 0.3s;
        }
    }
}

.active {
    background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
    cursor: pointer;
    transition: all 0.3s;
}
</style>
