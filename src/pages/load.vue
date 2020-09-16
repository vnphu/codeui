<template>
<div>
    <div class="content">
        <div class="circle">
            <div class="circle-loading">
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.circle-loading {
    width: 5rem;
    height: 5rem;
    border-radius: 15rem;
    position: relative;
    z-index: 10;
    margin: 0 auto;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    border-radius: 15rem;
    z-index: 11;
    position: relative;
    margin: 0 auto;
}

.circle-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 0.5rem solid white;
    border-right-color: var(--pink);
    border-bottom-color: var(--secondary);
    animation: circleLoading 0.8s forwards infinite linear;
}

.circle::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 0.5rem solid white;
    border-right-color: var(--yellow);
    border-bottom-color: var(--secondary);
    animation: circleLoading 0.5s forwards infinite linear;
}

@keyframes circleLoading {
    to {
        transform: rotate(360deg);
    }
}
</style>
