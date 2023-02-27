<template>
    <footer id="footer" block="footer" :style="{ backgroundColor: block.data.mainBackgroundColor }">
      <svg v-if="block.data.hasFooterTop" preserveAspectRatio="none" height="85" viewBox="0 0 375 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
        <g clip-path="url(#clip0_183_3184)">
          <g filter="url(#filter0_d_183_3184)">
            <mask id="mask0_183_3184" maskUnits="userSpaceOnUse" x="0" y="29" width="375" height="246" style="mask-type: alpha;">
              <path d="M375 274.5L0 274.5L1.66103e-05 84.5L156.792 33.9083C176.757 27.4663 198.243 27.4663 218.208 33.9083L375 84.5L375 274.5Z" fill="#004E37"></path>
            </mask>
            <g mask="url(#mask0_183_3184)">
              <path d="M0 85V24H375V85H0Z" :style="{ fill: block.data.backgroundColor }"></path>
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_183_3184" x="-40" y="-14.9229" width="455" height="135.923" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="-4"></feOffset> <feGaussianBlur stdDeviation="20"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.596078 0 0 0 0 0.478431 0 0 0 0.2 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_183_3184"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_183_3184" result="shape"></feBlend></filter>
          <clipPath id="clip0_183_3184"><rect width="375" height="85" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div class="footer-content" :style="{ backgroundColor: block.data.backgroundColor }">
        <div class="logo">
          <img src="/images/samples/v1/footer/behandam-logo.svg" alt="behandam" loading="lazy">
        </div>
        <div>
          <h3>به اندام دکتر کرمانی</h3>
          <h4>معجزه‌ای برای چاق‌ها و لاغرها</h4>
          <a href="https://kermany.com" rel="nofollow"><h4>www.kermany.com</h4></a>
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
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
<style lang="scss">
#footer {
  .footer-content {
    padding: 60px 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
  }
  .logo {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    margin-left: 10px;
    box-shadow: 0 4px 35px #7F5FC9;
    img {
      max-width: 80%;
      }
  }

  h3 {
    font-weight: 900;
    font-size: 25px;
    line-height: 22px;
    color: #FF5757;
  }
  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
  svg {
    width: 100%;
    margin-top: -2px;
  }
}
</style>