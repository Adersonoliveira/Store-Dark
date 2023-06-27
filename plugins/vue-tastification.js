import Vue from"vue";
import Toast from "vue-toastification";
import  "vue-toastification/dist/index.css";

Vue.use(Toast,{
  transition: "Vue-toastification__fade",
  maxToasts: 10,
  newestOnTop: true,
  position: "bottom-rigth"
})