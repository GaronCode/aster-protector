<template>
  <div>
    <div v-for="res in resourcesList" :key="res.label">
      <h2>{{ res.label }}: {{ res.amount }}</h2>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "ResourcesList",
  props: {
    resources: {type: Object}
  },
  setup(props) {

    const resourcesList = computed(()=> {
      const resourcesClasses = Object.values(props.resources);
      const arr = []

      resourcesClasses.forEach((resource) => {
        arr.push({
          label: resource.name,
          imgUrl: resource.img,
          amount: resource.getRef()
        })
      });

      return arr;
    });

    return {
      resourcesList
    }
  }
}
</script>

<style scoped>

</style>
