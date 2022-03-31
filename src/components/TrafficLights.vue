<template>
  <div class="space-between-traffic-lights">
    <ButtonCircle
      :buttonId="'leftButton'"
      :ref="'greenLight'"
      @click="onlyLightOn('green')"
      :buttonColor="'Green'"
    />
    <ButtonCircle
      :buttonId="'middleButton'"
      :ref="'yellowLight'"
      @click="onlyLightOn('yellow')"
      :buttonColor="'Yellow'"
    />
    <ButtonCircle
      :buttonId="'rightButton'"
      :ref="'redLight'"
      @click="onlyLightOn('red')"
      :buttonColor="'Red'"
    />
  </div>
</template>

<script>
import ButtonCircle from "./ButtonCircle.vue";

export default {
  name: "TrafficLights",
  components: {
    ButtonCircle,
  },
  methods: {
    // the $refs-statements have top-down-functionality,
    // so using them in combination with a watcher
    // in ButtonCircle.vue it is possible to manipulate
    // child elements from the parent with a proper
    // DOM-update
    onlyLightOn: function (event) {
      if (event === "green") {
        this.$refs.greenLight.color = "Green";
        this.$refs.yellowLight.color = "Gray";
        this.$refs.redLight.color = "Gray";
        this.resetLights();
      } else if (event === "yellow") {
        this.$refs.greenLight.color = "Gray";
        this.$refs.yellowLight.color = "Yellow";
        this.$refs.redLight.color = "Gray";
        this.resetLights();
      } else if (event === "red") {
        this.$refs.greenLight.color = "Gray";
        this.$refs.yellowLight.color = "Gray";
        this.$refs.redLight.color = "Red";
        this.resetLights();
      }
    },
    resetLights: function () {
      setTimeout(() => {
        this.$refs.greenLight.color = "Green";
        this.$refs.yellowLight.color = "Yellow";
        this.$refs.redLight.color = "Red";
      }, 1000);
    },
  },
};
</script>

<style>
.space-between-traffic-lights {
  margin-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
}
</style>
