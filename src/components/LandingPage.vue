<template>
  <div class="main">
    <div class="headline">
      <h1>Welcome</h1>
    </div>
    <div class="data-container">
      <div class="data-item data-container-1">
        <h4>{{ msg }}</h4>
        <ButtonCircle @click="updateFirstString" />
      </div>
      <div class="data-item data-container-2">
        <h4 :id="someId">Some Placeholder with {{ someId }}</h4>
      </div>
      <div class="data-item data-container-3">
        <h4>Another Placeholder</h4>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCircle from "./ButtonCircle.vue";
export default {
  name: "LandingPage",
  components: {
    ButtonCircle,
  },
  data: function () {
    return {
      msg: "First One-Way Data-Binding String",
      someId: "id-0-middle",
    };
  },
  methods: {
    updateFirstString: function () {
      this.msg = "Button clicked";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  background-color: #383b38;
  height: 80vh;
}

.headline {
  display: flex;
  justify-content: center;
}

.data-container {
  display: flex;
  justify-content: space-evenly;
  height: 80%;
}
.data-item {
  margin-top: 10px;
}

.data-container-1 {
}

.data-container-2 {
}

.data-container-3 {
}
</style>
