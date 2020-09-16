<template>
<div class="index">
    <img src="@/assets/frontend-logo.png" alt="">
    <h1>Coding UI by VNPQT</h1>
    <div>Just a simple place to share a lot of free UIs - Clone CodingUI.dev</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        padding: 1rem;
        max-width: 15rem;
        height: auto;

    }

    h1 {
        font-size: 2rem;
        font-weight: 500;
        font-style: italic;
        padding-bottom: 0.5rem;
        color: var(--gray);
    }
}
</style>
