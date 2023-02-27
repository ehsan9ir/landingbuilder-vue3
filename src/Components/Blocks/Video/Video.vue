<template>
  <section :style="{ backgroundColor: block.data.blockBackgroundColor }" class="py-5">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-5 p-4 video-container" :style="{ backgroundColor: block.data.videoBackgroundColor }" >
        <div class="video_holder">
          <img src="/images/samples/v1/video/video.svg" alt="video" class="ic-video">
          <div class="has-icon">
            <video :poster="block.data.posterUrl" preload="none" :ref="'video' + block.uuid">
              <source :src="block.data.videoUrl" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="play-btn">
              <div :style="{backgroundColor: block.data.playIconBackgroundColor, color: block.data.playIconColor}" @click="play">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M2.7875 0.881084C3.21719 0.787334 3.68047 0.842412 4.07031 1.05022C8.42852 3.38499 12.7871 5.72015 17.1453 8.0553C17.5129 8.26272 17.925 8.42093 18.2055 8.75062C18.6195 9.20687 18.7715 9.87249 18.6199 10.467C18.4953 10.9744 18.1438 11.4198 17.6793 11.6592C13.2359 14.0401 8.79259 16.4201 4.34922 18.801C4.18555 18.8869 4.02617 18.9834 3.85196 19.0479C3.30938 19.251 2.67266 19.1846 2.18633 18.8682C1.6832 18.5514 1.34492 17.9799 1.32812 17.3838C1.3293 12.4479 1.32773 7.51155 1.32891 2.57562C1.36836 1.76858 1.99961 1.0471 2.7875 0.881084ZM2.98477 2.12562C2.71992 2.22054 2.55156 2.4971 2.56992 2.77522C2.56719 7.56663 2.57031 12.3576 2.56836 17.1491C2.56641 17.333 2.58438 17.5326 2.71133 17.6772C2.89219 17.9084 3.23985 17.9846 3.49649 17.8358C8.0254 15.4088 12.5551 12.9826 17.0844 10.5561C17.2238 10.4819 17.3418 10.3588 17.3914 10.2069C17.4945 9.92015 17.3598 9.57522 17.0828 9.44358C12.5551 7.0178 8.02735 4.5928 3.5 2.16663C3.34492 2.07913 3.15195 2.06272 2.98477 2.12562Z" :fill="block.data.playIconColor"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="video-caption whitespace-pre-line">
          <h4 :style="{color: block.data.titleColor}">{{ block.data.videoTitle }}</h4>
        </div>
      </div>
      <div class="text-center">
        <a class="btn"
           id="gtag_cta_video"
           :href="block.data.buttonLink"
           :style="{
                      backgroundColor: block.data.buttonBackgroundColor,
                      borderColor: block.data.buttonBackgroundColor,
                      color: block.data.buttonColor
                    }">
          {{ block.data.buttonText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from "../../Icon.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Video',
    components: { Icon },
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
    setup(props) {
      function play() {
        const video = this.$refs['video' + props.block.uuid]
        video.play()
        video.setAttribute("controls", "controls");
        video.parentElement.classList.remove("has-icon");
      }
      return {
        play
      }
    }
})
</script>
<style lang="scss">
.video-container {
  position: relative;
  border-radius: 20px;
  width: 500px;
  max-width: 100%;

  .ic-video {
    transform: rotate(15deg);
    position: absolute;
    bottom: 10px;
    right: 13px;
    font-size: 45px;
    color: white;
    z-index: 0;
    width: 60px;
  }
}
.video-caption {
  position: relative;
  z-index: 1;
  font-weight: 500;
  text-align: center;
  h4 {
    font-weight: 900;
    font-size: 18px;
  }
}
.video_holder {
  margin-bottom: 20px;
  border: 4px solid #FFFFFF;
  border-radius: 20px;
  > div {
    position: relative;
    padding-bottom: 56.25%;
    display: block;
    border-radius: 15px;
    overflow: hidden;
    transition: opacity .3s;
    .play-btn {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 18px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      div {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        line-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.has-icon {
      .play-btn {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  small {
    display: none;
    position: absolute;
    top: 56%;
    left: 0;
    text-align: center;
    right: 0;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    strong {
      font-weight: 700;
      display: block;
    }
  }
  &:hover {
    video {
      opacity: 1!important;
    }
  }
  .has-icon small {
    display: block;
  }
}
video {
  width: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  border-radius: 15px;
  border: none;
  outline: none;
  bottom: 0;
  min-height: 100%;
}
</style>