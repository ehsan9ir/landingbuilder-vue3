<template>
  <section :style="{ backgroundColor: block.data.mainBackgroundColor }" class="py-32">

    <div class="container mx-auto px-3">
      <div id="cta"
           class="mx-auto text-center py-5 my-5 px-3 rounded-lg max-w-full"
           :style="{ backgroundColor: block.data.backgroundColor }"
           style="width: 500px">
        <div v-if="block.data.imageUrl" class="text-center mb-3">
          <img :src="block.data.imageUrl" alt="cta" class="mx-auto">
        </div>

        <a class="btn"
           :href="block.data.buttonLink"
           :style="{
                      backgroundColor: block.data.buttonBackgroundColor,
                      color: block.data.buttonColor
                    }">
          {{ block.data.buttonText }}
        </a>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        name: 'CTA',
        props: {
            block: {
                type: Object,
                required: true,
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            
        },
    }
</script>
