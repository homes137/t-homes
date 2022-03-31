<template>
  <button :id="id" type="button" class="button-circle">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonCircle",
  // Props are used to set (possible) initial values to define a button
  props: {
    buttonId: String,
    buttonText: String,
    buttonColor: String,
  },
  // Data is used to update the color of buttons
  data: function () {
    return {
      id: this.buttonId,
      color: this.buttonColor,
      text: this.buttonText,
    };
  },
  mounted: function () {
    this.setColor(this.color, this.id);
  },
  watch: {
    color(color) {
      this.setColor(color, this.id);
    },
  },
  methods: {
    setColor: function (color, id) {
      let x = document.getElementById(id);
      if (x !== null) {
        switch (color) {
          case "Green":
            x.style.background =
              "radial-gradient(circle, #36f846, #279630,#383b38)";
            break;
          case "Yellow":
            x.style.background =
              "radial-gradient(circle, #e3e632, #aca32d,#383b38)";
            break;
          case "Red":
            x.style.background =
              "radial-gradient(circle, #fa4646, #d11818,#383b38)";
            break;
          case "Gray":
            x.style.background =
              "radial-gradient(circle, #7a7a76, #64645e,#383b38)";
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>

<style>
.button-circle {
  background: radial-gradient(circle, #7a7a76, #64645e, #383b38);
  width: 7vh;
  height: 7vh;
  border: none;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
</style>
