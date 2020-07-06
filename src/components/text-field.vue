<template>
    <div class="order-form">
        <label class="textfield-label" :for="labelId">{{labelText}}</label>
        <br>
        <input type="text" class="textfield-input" :name="ladelId" :id="labelId">
    </div>
</template>

<script>
    export default {
        props:{
          labelId: String,
          labelText: String,
        },
        name: "text-field"
    }
</script>

<style>
    .order-form {
        padding: 10px 0;
    }

    .order-form label {
        font-size: 16px;
        color: black;
    }
    .order-form input[type="text"] {
        font: inherit;
        color: inherit;
        border: 1px solid gray;
        background-color: white;
        box-sizing: border-box;
        width: 100%;
        height: 54px;
        padding: 9px 15px;
    }

    .order-form input[type="text"]:hover {
        border-color: black;
    }

    .order-form input[type="text"]:focus {
        border-color: black;
    }
</style>