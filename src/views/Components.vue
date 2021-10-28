<template>
    <div>
        <hero></hero>
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
