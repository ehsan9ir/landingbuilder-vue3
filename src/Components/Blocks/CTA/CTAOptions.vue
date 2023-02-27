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
        <span class="label-text text-base ml-auto">رنگ پس زمینه کال تو اکشن</span>
        <input v-model="block.data.backgroundColor" type="color" class="">
      </label>
    </div>

    <div class="divider">کال تو اکشن</div>
    <div class="form-control">
      <label class="label mb-1">
        <span class="label-text">متن دکمه</span>
      </label>
      <input v-model="block.data.buttonText" type="text" class="input input-bordered input-sm">
    </div>
    <div class="form-control">
      <label class="label -mb-2">
        <span class="label-text">لینک دکمه</span>
      </label>
      <input v-model="block.data.buttonLink" type="text" class="input input-bordered input-sm text-left" dir="ltr">
    </div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">رنگ دکمه</span>
        <input v-model="block.data.buttonBackgroundColor" type="color" class="">
      </label>
    </div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">رنگ متن دکمه</span>
        <input v-model="block.data.buttonColor" type="color" class="">
      </label>
    </div>
    <div class="divider">تصویر</div>
    <div class="form-control">
      <label class="label mb-2">
        <span class="label-text">از گالری انتخاب کنید</span>
      </label>
      <ImageSelect v-model="block.data.imageUrl"/>
    </div>
    <div class="form-control">
      <label class="label mb-2">
        <span class="label-text">یا یک تصویر جدید آپلود کنید</span>
      </label>
      <ImageUploadButton v-model="block.data.imageUrl" class="btn btn-sm btn-info btn-outline btn-block text-xs font-normal"/>
    </div>
    <div class="form-control">
        <button class="btn btn-sm btn-error" @click="()=> {block.data.imageUrl = ''}">پاک کردن عکس</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import ImageSelect from '../../ImageSelect.vue'
import ImageUploadButton from '../../ImageUploadButton.vue'

export default defineComponent({
  name: 'HeaderOptions',
  emits: ['update:modelValue'],
  components: {
    ImageSelect,
    ImageUploadButton,
  },
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
