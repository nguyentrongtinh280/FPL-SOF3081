<template>
  <input :value="modelValue" @input="updateValue" />
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
