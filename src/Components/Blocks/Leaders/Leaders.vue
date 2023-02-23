<template>
  <div :style="{ backgroundColor: block.data.backgroundColor }">
    <div class="">
      <div class="py-6">
        <div class="text-center">
          <img :src="block.data.titleImage" class="m-auto" alt="stars" loading="lazy">
          <div class="text-2xl font-bold">
            {{ block.data.title }}
          </div>
          <carousel :items-to-show="1" class="leaders-carousel">
            <slide v-for="item in block.data.list" :key="item.uuid">
              <div>
                <img width="360" :src="item.image" alt="leaders" class="block">
                <div class="flex justify-center">
                  <div class="text-right mt-6">
                    <strong class="block mr-2">{{ item.name }}</strong>
                    <div class="bg-teal-100 text-success rounded-2xl px-3 py-1">
                      <span class="inline-block"> {{ item.weightChange > 0 ? 'کاهش وزن' : 'افزایش وزن' }}</span>
                      <strong class="inline-block">کیلوگرم</strong>
                      <strong class="inline-block text-xl">{{ Math.abs(item.weightChange) }}</strong>
                    </div>
                  </div>
                  <img class="" height="86" width="61" src="/images/samples/v1/leaders/medal.svg" alt="medal"
                       loading="lazy">
                </div>
              </div>
            </slide>
            <template #addons>
              <navigation/>
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Icon from '../../../Components/Icon.vue'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'

export default defineComponent({
  name: 'Leaders',
  components: {
    Icon,
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    block: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  },
  setup() {
  },
})
</script>
<style lang="scss">
.leaders-carousel {
  .carousel__prev {
    top: 87%;
    left: 50%;
    transform: translateX(-180px);
  }

  .carousel__next {
    top: 87%;
    right: 50%;
    transform: translateX(180px);
  }
}
</style>