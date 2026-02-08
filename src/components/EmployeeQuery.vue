<template>
  <div class="query-main">
    <input type="text" v-model="name">
    <select name="" id="" v-model="department">
      <option value="0">部门1</option>
      <option value="1">部门2</option>
      <option value="2">部门3</option>
      <option value="3">部门4</option>
    </select>
    <button>查询</button>
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive} from 'vue'
interface Props {}
withDefaults(defineProps<Props>(), {})

const name = ref('')
const department = ref('')
</script>
<style>
  
</style>