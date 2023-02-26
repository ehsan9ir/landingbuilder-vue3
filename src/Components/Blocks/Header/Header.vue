<template>
    <header block="header" :style="{ backgroundColor: block.data.mainBackgroundColor }">
      <div class="pb-3" :style="{ backgroundColor: block.data.backgroundColor }">
        <img :src="block.data.imageUrl" class="w-80 block mx-auto mb-3" alt="header">
        <div class="text-center">
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
      <svg v-if="block.data.hasHeaderBottom" preserveAspectRatio="none" height="71" viewBox="0 0 375 71" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%;margin-top: -3px">
        <mask id="mask0_189_3271" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="375" height="67">
          <path d="M0 0.5H375V12.0116L217.51 61.5586C197.975 67.7044 177.025 67.7044 157.49 61.5586L0 12.0116V0.5Z" :fill="block.data.backgroundColor"/>
        </mask>
        <g mask="url(#mask0_189_3271)">
          <rect width="375" height="71" :fill="block.data.backgroundColor"/>
        </g>
      </svg>
    </header>
</template>

<script>
    export default {
        name: 'Header',
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
