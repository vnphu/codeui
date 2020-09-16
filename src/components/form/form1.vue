<template>
<div>
    <div class="search-form"><img src="@/assets/search.svg" class="search-form__icon" alt=""><input type="text" placeholder="Search" class="search-form__input" /></div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div {
    background-color: var(--white);
}

.search-form {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    align-items: center;
}

.search-form__icon {
    width: 2rem;
}

.search-form__input {
    padding: 0 1.5rem;
    flex: 1;
}
</style>
