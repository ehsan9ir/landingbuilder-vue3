<template>
  <div class="space-y-2">
    <div class="divider">اصلی</div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">رنگ پس زمینه</span>
        <input v-model="block.data.mainBackgroundColor" type="color" class="">
      </label>
    </div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">رنگ پس زمینه فوتر</span>
        <input v-model="block.data.backgroundColor" type="color" class="">
      </label>
    </div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">خمیدگی بالای فوتر</span>
        <input v-model="block.data.hasFooterTop" type="checkbox" checked="checked" class="toggle toggle-primary">
      </label>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'FooterOptions',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props, context) {

    const block = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    })

    return { block }
  },
})
</script>
