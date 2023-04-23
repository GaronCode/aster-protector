<template lang="">
    <div :class="'menu'">
        <div class="menu__header"><div class="container" @click="$emit('headerClick')">{{ headerText }}</div></div>
        <div class="menu__body">
            <ul>
                <li v-for="(item, index) in menuOptions" :key="index" >
                    <a href="!#" @click="$emit('menuClick', index)" class="button" :class="item.disabled?'disabled':'active'">{{item.text?item.text:item}}</a>
                </li>
            </ul>
        </div>
        <div class="menu__back"><a class="container" @click="$emit('footerClick')">{{ footerText }}</a></div>
    </div>
</template>
<script>
export default {
    name: "base-menu",
    props: {
        headerText: { type: String, default: "заголовок" },
        footerText: { type: String, default: "назад" },
        menuOptions: {
            type: Object,
        }
    }


}
</script>
<style lang="scss" scoped>
$baseColor: #FF8C00;
$baseColorMod: #ff9616;
$hoveredBaseColor: #A65B00;
$hoveredTextColor: #FFA940;
$additionColor: #FFBB00;
$borderRadius: 16px;

$base64noise: url("data:image/png;base64,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");
$base64bg: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABtCAYAAAD9LgIgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE/SURBVHhe7dpdisJAFAXhwSW7vd7cOIMPoQkxibd/bnUVCIpoztd5E39WqpTyfLyfL5NgeoLpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5gesuB///o8fd4v0S2ayTCT5ko6EuOUyczaV9tzwQP3To7usm+0BMMqsumGeBDNoxCDz3snifd81ofazlmKmhd9LBpodsi7kjEd3TvzuiU0LqzgPTQbUd37ui99G1xaGjdSKi/adETTE8wPcH0BNMTTE8wPcH0BNMTTE8wPcH0BNMTTE8wPcH0BNMTbIEt8y+eIxwOfhaTHn3nzt35zPAiRqeBR4+cFt3yjrT87sv1HDMcPuri3a87/KRfddkwA7Su2abZoHVh+5qdYIO+2poJWnd5e1Zo3UfH5ZNJ0K6JCK1bwbhbKeX5C0oeOmXeM6a9AAAAAElFTkSuQmCC");

.menu {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #9F0013;
    user-select: none;



    &__body {
        background-color: $baseColor;
        border-radius: $borderRadius /2;
        padding: 20px;
        background-image: $base64noise;

        & li {
            list-style-type: none;

            & .button {
                display: block;
                text-decoration: none;
                color: inherit;
                border-radius: $borderRadius;
                padding: 26px;
                margin: 10px 0;
                text-align: center;
            }

            & .active {
                cursor: pointer;
                background-color: rgba($baseColorMod, .5);

                &:hover {
                    background-color: rgba($hoveredBaseColor, .7);

                    background-image: $base64bg;

                    color: $hoveredTextColor;
                }
            }

            & .disabled {
                background-color: rgba($baseColorMod, .3);
                color: rgba($hoveredTextColor, .8);
                cursor: no-drop;
            }
        }


    }

    &__header,
    &__back {
        display: flex;
        align-items: center;


    }

    &__header>*,
    &__back>* {
        background-color: $additionColor;
        padding: 15px;
        min-width: 80%;
        text-align: center;

    }

    &__header>* {
        border-radius: $borderRadius $borderRadius 0 0;
    }

    &__back>* {
        border-radius: 0 0 $borderRadius $borderRadius;
        display: block;

        &:hover {
            background-color: desaturate($additionColor, 10%);
            cursor: pointer;
            background-image: $base64bg;
        }
    }




}

.container {
    margin: 0 auto;
}
</style>