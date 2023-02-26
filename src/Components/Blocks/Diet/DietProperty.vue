<template>
  <section :style="{ backgroundColor: block.data.blockBackgroundColor }">
    <div class="diet-property" :style="{ height: `${ 130 * block.data.list.length}px` }">
      <div>
        <h3 class="title" :style="{color: block.data.titleColor}">{{ block.data.title }}</h3>
      </div>
      <div v-for="item in block.data.list" :key="item.uuid" class="item">
        <img :src="item.image" :alt="item.title" loading="lazy" class="mx-auto mb-3">
        <p class="whitespace-pre-line">
          <span>{{ item.title }}</span>
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import Icon from "../../Icon.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'DietProperty',
    components: { Icon },
    props: {
        block: {
            type: Object,
            required: true,
        }
    },
    setup() {}
})
</script>
<style lang="scss">
.diet-property {
  padding: 70px 20px 50px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    color: white;
  }

  .item {
    min-height: 165px;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 20px 0 0;
    font-weight: 700;
    line-height: 21px;
    box-shadow: 0 4px 20px rgba(39, 60, 117, 0.1);

    p {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: 500;
      strong {
        font-weight: 700;
        font-size: 20px;
        display: block;
      }
    }

  }

  > div {
    width: 155px;
  }

}
@media (max-width: 350px) {
  .diet-property {
    > div {
      width: 130px;
    }
  }
}
@media (max-width: 767px) {
  .diet-property {
    flex-direction: column;
    justify-content: start;
  }
}
@media (min-width: 767px) {
  .diet-property {
   height: auto!important;
  }
}
</style>