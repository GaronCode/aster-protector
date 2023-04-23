<template>
  <transition name="left-slide">
    <div :class="'v-menu'" v-if="showEl" :style="'z-index: ' + zIndex">
      <div class="v-menu__header">
        <a
          href="!#"
          class="v-menu__header-back-button"
          @click="$emit('backClick')"
          >❮</a
        >
        <h1>{{ headerText }}</h1>
      </div>
      <ul
        class="v-menu__main-list"
        :class="listType === 'buttons' ? 'v-menu__buttons' : 'v-menu__list'"
      >
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :class="{ 'v-menu__item_checked': checked === index }"
          @click="$emit('menuClick', index)"
        >
          <span>{{ index }}</span> {{ item }}
        </li>
      </ul>
      <a
        v-if="bottomButtonText !== undefined"
        href="!#"
        class="v-menu__footer-button"
        >{{ bottomButtonText }}</a
      >
    </div>
  </transition>
</template>
<script>
export default {
  name: "vertical-menu",
  props: {
    show: { default: true },
    zIndex: { default: "auto" },
    menuList: { type: Object, default: new Object() },
    listType: { type: String, default: "buttons" },
    checked: { default: undefined },
    bottomButtonText: { default: undefined },
    headerText: { type: String, default: "Назад" },
  },
  data() {
    return {
      showEl: false,
    };
  },
  watch: {
    show(v) {
      this.showEl = v;
    },
  },
  mounted() {
    this.showEl = this.show;
  },
};
</script>
<style lang="scss" scoped>
$additionColor: #ffa940;
$bgcolor: #ffbb00;
$borderColor: #a62800;

.v-menu {
  width: 200px;
  background-color: #bf7f30;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 5px solid $borderColor;
  z-index: 1;

  &__header {
    text-transform: uppercase;
    background-color: $additionColor;
    color: #a62800;
    box-shadow: 0px 2px 10px #4b4639;
    display: flex;

    & > h1 {
      display: flex;
      align-items: center;
      font-size: 100%;
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

  &__main-list {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 20px 0;

    & > * {
      cursor: pointer;
      user-select: none;
      padding: 10px;
    }
  }

  &__buttons > * {
    color: $additionColor;

    &:hover {
      color: #a67a00;
      background-color: $bgcolor;
    }
  }

  &__list > * {
    font-size: larger;

    & span {
      display: block;
      text-align: center;
      margin-bottom: 20px;
      padding-bottom: 6px;
      font-size: medium;
      border-bottom: 1px solid $borderColor;
    }

    &:nth-child(odd) {
      color: #7f5d00;
      background-color: $bgcolor;
    }

    &:nth-child(even) {
      background-color: desaturate($bgcolor, 50%);
      color: #ffda73;
    }
  }

  &__item_checked {
    background-color: desaturate($bgcolor, 50%);
    color: #ffda73;
  }

  &__footer-button {
    display: block;
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #ffa940;
    box-shadow: 0px 2px 10px #4b4639;
    cursor: pointer;

    &:hover {
      background-color: #ffc073;
    }
  }
}

.left-slide {
  &-enter {
    &-from {
      margin-left: -100%;
    }
    &-to {
      margin-left: 0%;
    }
  }
  &-leave {
    &-to {
      margin-left: -100%;
    }
  }

  &-leave-active,
  &-enter-active {
    transition: margin-left 1s;
  }
}
</style>
