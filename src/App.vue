<template>
  <div class="main">
    <transition name="left-slide" mode="out-in">
      <div class="container-bg" v-if="!window">
        <div class="center">
          <base-menu
            :menuOptions="menuPrepare"
            @menuClick="changeMenu($event)"
            headerText="подготовка"
            class="center__menu"
          />
        </div>
      </div>

      <component v-else :is="window" @close="window = null" />
    </transition>
    <div class="background"></div>
  </div>
</template>

<script>
import BaseMenu from "@/components/Ui/BaseMenu.vue";
import BuildingMenu from "./components/Ui/Building/buildingMenu.vue";
export default {
  name: "Ap-a",
  components: {
    BaseMenu,
    BuildingMenu,
  },
  data() {
    return {
      window: undefined,
      menuPrepare: {
        formation: { text: "Выбор формации", disabled: true },
        setup: { text: "Оснащение", disabled: true },
        building: "Строительство",
        research: { text: "Исследования", disabled: true },
      },
    };
  },
  methods: {
    changeMenu(name) {
      switch (name) {
        case "building":
          this.window = "BuildingMenu";
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.main {
  height: 100vh;
  background-color: #282f37;
  overflow: hidden;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__menu {
    min-width: 50vw;
  }
}
.background {
  height: 100vh;
  background-image: url("~@/assets/8.jpg");
  background-size: 100%;
  background-position: top;
}
.container-bg {
  height: 100vh;
  background-image: url("~@/assets/9.jpg");
  background-size: 100%;
  background-position: bottom;
}

.left-slide {
  &-enter {
    &-from {
      margin-top: -100vh;
    }
    &-to {
      margin-top: 0%;
    }
  }
  &-leave {
    &-to {
      margin-top: -100vh;
    }
  }

  &-leave-active,
  &-enter-active {
    transition: margin-top 0.5s;
  }
}
</style>
