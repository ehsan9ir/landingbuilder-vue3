<template>
  <section :style="{ backgroundColor: block.data.blockBackgroundColor }" class="py-5">
    <div class="py-5">
      <div class="text-2xl font-bold text-center whitespace-pre-line mb-5" :style="{color: block.data.titleColor}">
        {{ block.data.title }}
      </div>
      <carousel :items-to-show="1.7" :breakpoints="breakpoints" class="our-team-carousel" style="padding-bottom: 50px">
        <slide v-for="(item,index) in block.data.list" :key="item.uuid">
            <div class="item pb-5" :class="[`item-${index}`]">
            <img :src="item.image" :alt="item.title">
            <p class="title">{{  item.title }}</p>
            <p class="description">مشاور اختصاصی تغذیه</p>
            <p class="whitespace-pre-line">{{ item.description }}</p>
          </div>
        </slide>
        <template #addons>
          <pagination/>
          <navigation/>
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>
import Icon from "../../Icon.vue";
import { defineComponent, ref } from "vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation, Pagination} from 'vue3-carousel'

export default defineComponent({
    name: 'OurTeam',
    components: { Icon,Carousel, Slide, Navigation, Pagination },
    props: {
        block: {
            type: Object,
            required: true,
        }
    },
    setup() {
      const breakpoints = ref({
        600: {itemsToShow: 2.7},
        940: {itemsToShow: 3.5},
        1024: {itemsToShow: 5.5},
        1400: {itemsToShow: 7.5},
      })
      return {
        breakpoints
      }

    }
})
</script>
<style lang="scss">
.our-team-carousel {
  --vc-nav-color: '#D8D9E3';
  --vc-nav-color-hover: #FF5757;

  .item {
    margin: 90px 0 30px;
    padding: 55px 5px 15px;
    border-radius: 10px;
    position: relative;
    font-weight: 500;
    width: 200px;
    max-width: 90%;

    .title {
      font-weight: 700;
      margin-bottom: 0;
      font-size: 1rem;
    }
    .description {
      font-weight: 700;
      font-size: 14px;
      color: #FF8049;
      margin-bottom: 13px;
    }
    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -64%);
      width: 120px;
    }
    p {
      margin-bottom: 0;
      font-size: 14px;
    }


    &.orange {
      background-color: #FFDBCD;
      .description {
        color: #FF8049;
      }
    }
    &.yellow {
      background-color: #FFECBF;
      .description {
        color: #FFC058;
      }
    }
    &.blue {
      background-color: #CBDBFF;
      .description {
        color: #4B649D;
      }
    }

  }

  .carousel__slide {


    &:nth-child(3n+1) {
      .item {
        background-color: #CBDBFF;
      }
      .description {
        color: #4B649D;
      }
    }

    &:nth-child(3n+2) {
      .item {
        background-color: #FFDBCD;
      }
      .description {
        color: #FF8049;
      }
    }

    &:nth-child(3n+3) {
      .item {
        background-color: #FFECBF;
      }
      .description {
        color: #FFC058;
      }
    }
  }

  .carousel__pagination {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
  .carousel__pagination-button {
    --vc-pgn-width: 10px;
    --vc-pgn-height: 10px;
    --vc-pgn-border-radius: 50%;
    --vc-pgn-background-color: #D8D9E3;
    --vc-pgn-active-color: #FF5757;
  }

  .carousel__prev {
    top: 85%;
    left: 50%;
    transform: translateX(-180px);
    color: #D8D9E3;
  }
  .carousel__next {
    top: 85%;
    right: 50%;
    transform: translateX(180px);
    color: #D8D9E3;
  }
}
</style>