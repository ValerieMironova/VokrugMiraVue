<template>
    <div class="background-popup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "background-popup"
    }
</script>

<style>
    .background-popup {
        content: '';
        background: rgba(0, 0, 0, 0.73);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>
