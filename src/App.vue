<script setup>
import { onMounted, ref } from 'vue'
import { Field, CellGroup } from 'vant'
import spring, { toString } from 'css-spring'

defineProps({
  msg: String,
})

const widthFrom = ref('20')
const widthTo = ref('100')
const heightFrom = ref('20')
const heightTo = ref('100')
const unit = ref('px')
const opacityFrom = ref('0')
const opacityTo = ref('1')

const result = ref('')

const apply = () => {
  let value = toString(spring(
    { width: `${widthFrom.value * 100}px`, height: `${heightFrom.value * 100}px`, opacity: `${opacityFrom.value}` }, { width: `${widthTo.value * 100}px`, height: `${heightTo.value * 100}px`, opacity: `${opacityTo.value}` }, { preset: 'gentle' }
  ))
  value = value.replaceAll("width:", "width:calc(")
  value = value.replaceAll("height:", "height:calc(")
  value = value.replaceAll("px;", ` * 0.01${unit.value});`)
  value = value.replaceAll(":calc(0;", `:0;`)

  result.value = value
}

onMounted(apply)
</script>

<template>
  <h1>CSS Spring Online</h1>

  <div class="card">

    <van-cell-group inset>
      <van-field v-model="widthFrom" label="width from" />
      <van-field v-model="widthTo" label="width to" />
      <van-field v-model="heightFrom" label="height from" />
      <van-field v-model="heightTo" label="height to" />
      <van-field v-model="unit" label="unit" />
      <van-field v-model="opacityFrom" label="opacity from" />
      <van-field v-model="opacityTo" label="opacity to" />
    </van-cell-group>

    <button @click="apply">Apply</button>
  </div>

  <textarea readonly v-model="result"></textarea>

  <p>
    Want to use it in your code? Go to the github of <a href="https://github.com/codepunkt/css-spring"
      target="_blank">css-spring</a> and take a look!
  </p>
</template>

<style>
:root {
  background-color: #fafafa
}

.read-the-docs {
  color: #888;
}

.card {
  width: 240px;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
