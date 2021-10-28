<template>
    <div>
        <hero></hero>
        <!-- <custom-controls></custom-controls> -->
        <!-- <javascript-components></javascript-components> -->
    </div>
</template>
<script>
import Hero from "./components/Hero";
import CustomControls from "./components/CustomControls";
import JavascriptComponents from "./components/JavascriptComponents";


export default {
  name: "components",
  components: {
    Hero,
    CustomControls,
    JavascriptComponents,
  }
};
</script>
