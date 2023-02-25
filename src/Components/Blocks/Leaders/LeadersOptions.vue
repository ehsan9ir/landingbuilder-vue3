<template>
  <div class="space-y-3">
    <div class="divider">اصلی</div>
    <div class="form-control">
      <label class="cursor-pointer label flex justify-start">
        <span class="label-text text-base ml-auto">رنگ پس زمینه</span>
        <input v-model="block.data.backgroundColor" type="color">
      </label>
    </div>
    <div class="form-control">
      <label class="label mb-2">
        <span class="label-text">عنوان</span>
      </label>
      <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
    </div>

    <div class="divider pt-5">اضافه کردن قهرمان جدید</div>

    <div class="form-control">
      <label class="label mb-2">
        <span class="label-text">نام</span>
      </label>
      <input v-model="name" type="text" class="input input-bordered input-sm">
    </div>
    <div class="form-control">
      <label class="label -mb-2">
        <span class="label-text">تغییر وزن</span>
      </label>
      <input v-model="weightChange" class="input input-bordered input-sm">
    </div>
    <div class="form-control">
      <img v-if="imageUrl" :src="imageUrl" alt="imageUrl">
      <label class="label mb-2">
        <span class="label-text">از گالری انتخاب کنید</span>
      </label>
      <ImageSelect v-model="imageUrl"/>
    </div>
    <div class="form-control">
      <label class="label mb-2">
        <span class="label-text">یا یک تصویر جدید آپلود کنید</span>
      </label>
      <ImageUploadButton v-model="imageUrl" class="btn btn-sm btn-info btn-outline btn-block text-xs font-normal"/>
    </div>
    <div class="flex justify-end">
      <button @click="add()" class="btn btn-sm btn-outline btn-primary mt-2">تایید</button>
    </div>

    <div class="divider pt-5">لیست قهرمانان</div>

    <div class="flex flex-col mb-8">
      <div class="my-2 overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full">
          <div class="overflow-hidden rounded-xl">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="feature in block.data.list" :key="feature.uuid">
                <td class="px-2 py-1 whitespace-nowrap">
                  {{ feature.name }}
                </td>
                <td class="px-2 py-1 flex justify-end items-center my-auto py-auto">
                  <button @click="remove(block.uuid)" class="btn btn-sm btn-ghost text-red-500">
                    <Icon name="trash" class="w-4 h-4"/>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {defineComponent, computed, ref} from 'vue'
import Icon from '../../Icon.vue'
import {v4 as uuidv4} from 'uuid'
import ImageSelect from '../../ImageSelect.vue'
import ImageUploadButton from '../../ImageUploadButton.vue'

export default defineComponent({
  name: 'LeadersOptions',
  emits: ['update:modelValue'],
  components: {
    Icon,
    ImageSelect,
    ImageUploadButton
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

    const name = ref('')
    const weightChange = ref(0)
    const imageUrl = ref('')

    const add = () => {
      block.value.data.list.push({
        uuid: uuidv4(),
        name: name.value,
        weightChange: weightChange.value,
        image: imageUrl.value,
      })

      name.value = ''
      weightChange.value = 0
      imageUrl.value = ''
    }

    const remove = (uuidToRemove) => {
      const index = block.value.data.list.findIndex((features) => {
        return features.uuid == uuidToRemove
      })

      block.value.data.list.splice(index, 1);
    }

    return {block, add, remove, name, weightChange, imageUrl}
  },
})
</script>
