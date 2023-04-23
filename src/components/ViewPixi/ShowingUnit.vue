<template>
  <div :class="'showing-unit'">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import FieldInit from "@/game/fieldInit";
import Team from "@/game/gameClasses/Team";
import Rotating from "@/game/gameClasses/movementControls/Rotating";
import FloatingInRadius from "@/game/gameClasses/movementControls/FloatingInRadius";

export default {
  name: "showing-unit",
  props: {
    unit: { type: Object },
  },
  mounted() {
    const a = new FieldInit({
      canvas: this.$refs.canvas,
      width: 500,
      height: 500,
    });
    a.afterLoad(() => {
      const member = this.unit.create();
      member.position.set(250, 250);
      member.addControlScript(
        new Rotating({ unit: member, speed: 1 / (this.unit.specs.size * 2) })
      );
      member.addControlScript(
        new FloatingInRadius({
          unit: member,
          speed: 0.05,
          radius: 10,
        })
      );
      const team = new Team({ name: "Review" });
      team.addMember({ member });

      a.addTeam({ team });

      a.start();
    });
  },
};
</script>
<style lang="css" scoped>
.showing-unit {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

canvas {
  width: auto;
  height: 100%;
}
</style>
