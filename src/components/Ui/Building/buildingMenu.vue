<template lang="">
  <div class="building-menu">
    <vertical-menu
      @backClick="$emit('close')"
      :menuList="baseList"
      @menuClick="checkMenu($event)"
      :checked="baseSelectId"
      z-index="3"
    />

    <vertical-menu
      :show="baseSelectId !== null"
      :headerText="secondMenuName"
      @backClick="
        baseSelectId = null;
        checkedUnitId = null;
      "
      :menuList="secondMenuList"
      @menuClick="checkedUnitId = $event"
      :checked="checkedUnitId"
      z-index="2"
    />

    <vertical-menu
      :show="checkedUnitId !== null"
      @backClick="checkedUnitId = null"
      headerText="Характеристики"
      :menuList="selectedUnitSpecsList"
      bottomButtonText="купить"
      listType="list"
      z-index="1"
    />
    <div class="building-menu__show-container">
    <user-resources-list></user-resources-list>
      <transition name="fade">
        <div
          v-if="checkedUnitId !== null"
          class="building-menu__show-animation"
          :key="selectedUnit"
          enter-class="fade-enter"
        >
          <showing-unit
            v-if="selectedUnit"
            :unit="selectedUnit"
            :key="selectedUnit"
          />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import UserResourcesList from "@/components/Ui/UserResourcesList";
import VerticalMenu from "../VerticalMenu.vue";
import ShowingUnit from "@/components/ViewPixi/ShowingUnit.vue";
export default {
  name: "building-menu",
  components: {
    VerticalMenu,
    ShowingUnit,
    UserResourcesList
  },
  data() {
    return {
      show: false,
      baseList: ["Платформы", "Орудия", "Модули"],
      baseSelectId: null,
      checkedUnitId: null,
    };
  },
  computed: {
    secondMenuName() {
      return this.baseList[this.baseSelectId];
    },
    secondMenuObject() {
      switch (this.baseSelectId) {
        case 0:
          return this.$store.getters.allStantions;
        case 1:
          return this.$store.getters.allWeapons;
        default:
          return {};
      }
    },
    secondMenuList() {
      const object = this.secondMenuObject;

      const arr = {};
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          arr[key] = object[key].specs.unitName;
        }
      }
      return arr;
    },
    selectedUnit() {
      return this.secondMenuObject[this.checkedUnitId];
    },
    selectedUnitSpecsList() {
      if (this.selectedUnit === null || this.selectedUnit === undefined)
        return {};

      const specs = this.selectedUnit.specs;

      switch (this.baseSelectId) {
        case 0:
          return {
            Название: specs.unitName,
            Размер: specs.size,
            Броня: specs.hp,
          };
        case 1:
          return {
            Название: specs.unitName,
            Размер: specs.size,
            Броня: specs.hp,
            Скорострельность: specs.fireInterval,
            "Снарядов за выстрел": specs.bulletsPerShot
              ? specs.bulletsPerShot
              : 1,
            Точность:
              Math.round(100 - 31.831 * specs.accuracy ? specs.accuracy : 0) +
              "%",
            Снаряд: null,
            Урон: specs.Bullet.specs.damage,
            Скорость: specs.Bullet.specs.speed,
            "Размер снаряда": specs.Bullet.specs.size,
          };

        default:
          return {};
      }
    },
  },
  methods: {
    checkMenu(menuId) {
      this.baseSelectId = menuId;
      this.checkedUnitId = null;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>
<style lang="scss" scoped>
.building-menu {
  display: flex;
  position: relative;
  background-color: #282f37;
  background-image: url("~@/assets/9.jpg");
  background-size: 100%;
  background-position: top;
  height: 100vh;
  width: 100vw;

  &__show-container {
    position: relative;
    flex-grow: 1;
    height: 100%;
  }

  &__show-animation {
    width: 100%;
    height: 100%;
    position: absolute;
    margin-left: 0%;
    opacity: 1;
    overflow: hidden;
  }
}

.fade {
  &-enter {
    &-from {
      margin-left: 100%;
      opacity: 0;
    }
    &-to {
      margin-left: 0%;
      opacity: 1;
    }
  }
  &-leave {
    &-to {
      margin-left: -100%;
      opacity: 0;
    }
  }

  &-leave-active,
  &-enter-active {
    transition: margin-left 1s, opacity 1s;
  }
}
</style>
