<template>
    <div :class="'v-menu'">
        <div class="v-menu__header"><a href="!#" class="v-menu__header-back-button" @click="$emit('backClick')">❮</a>
            <h1>Выбор формации</h1>
        </div>
        <ul class="v-menu__list">
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li class="v-menu__item_checked">Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1</li>
            <li>Viper Mk2</li>
            <li>Bastion Mk1</li>
            <li>Linebreacker Mk1sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</li>
        </ul>
        <a href="" class="v-menu__footer-button">сбросить</a>
    </div>
</template>
<script>
export default {
    name: "vertical-menu",

}
</script>
<style lang="scss" scoped>
$additionColor: #FFA940;
$bgcolor: #FFBB00;

.v-menu {
    width: 200px;
    background-color: #BF7F30;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 5px solid #A62800;

    &__header {

        text-transform: uppercase;
        background-color: $additionColor;
        color: #A62800;
        display: flex;


        &>h1 {
            display: flex;
            align-items: center;
            font-size: x-large;
            padding: 6px;
        }

        &-back-button {
            padding: 10px;
            display: flex;
            align-items: center;


            &:hover {
                background-color: desaturate($additionColor, 50%);
            }
        }

    }

    &__list {
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: scroll;
        margin: 20px 0;

        &>* {
            padding: 6px;
            color: $additionColor;
            cursor: pointer;
            user-select: none;

            &:hover {
                color: #A67A00;
                background-color: $bgcolor;
            }
        }
    }

    &__item_checked {
        background-color: desaturate($bgcolor, 50%);
        color: #FFDA73
    }

    &__footer-button {
        display: block;
        text-align: center;
        padding: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        background-color: #FFA940;
        cursor: pointer;

        &:hover {
            background-color: #FFC073;
        }
    }
}
</style>