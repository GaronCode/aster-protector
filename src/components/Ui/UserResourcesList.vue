<template>
  <div style="background-color: darkred">
    <resources-list :resources="list"></resources-list>
  </div>
</template>

<script>
import ResourcesList from "@/components/Ui/ResourcesList";
import {useUserResourcesStore} from "@/store/pinia/currency.ts";
export default {
  name: "UserResourcesList",
  components: {
    ResourcesList
  },
  setup() {

    const userResourcesStore = useUserResourcesStore();

    return {
      list: userResourcesStore.list
    }
  }
}
</script>

<style scoped>

</style>
