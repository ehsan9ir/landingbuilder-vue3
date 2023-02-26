<template>
    <section :style="{ backgroundColor: block.data.blockBackgroundColor }" class="py-5">
        <div class="max-w-6xl mx-auto">
            <div class="py-6 md:pt-12 pb-24 px-4 md:px-8">
                <div class="space-y-12 text-center">
                    <h4 class="max-w-3xl text-2xl md:text-3x font-bold mx-auto">
                        {{ block.data.title }}
                    </h4>
                </div>
                <div class="max-w-3xl mx-auto mt-16 space-y-8">
                    <div v-for="faq in block.data.list" :key="faq.uuid" class="">
                        <div class="md:text-xl font-normal">
                            {{ faq.question }}
                        </div>
                        <div class="text-base font-light">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'FAQList',
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
    })
</script>
