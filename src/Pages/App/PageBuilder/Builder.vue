<template>
    <BuilderLayout>
        <div class="lg:hidden text-center py-5">
          متأسفیم، اما ما در حال حاضر فقط از صفحه نمایش های بزرگ پشتیبانی می کنیم.
        </div>
        <div class="hidden lg:block">

            <div class="flex min-h-screen">
                <div class="bg-slate-100 overflow-y-auto h-screen w-1/6">
                    <div class="pb-48">
                        <BlockGroup v-for="group in groups" :key="group.uuid" :title="group.title" :blocks="group.blocks"/>
                    </div>
                </div>

                <div class="bg-slate-800 overflow-y-auto h-screen w-5/6">
                    <div class="p-0">
                        <div class="px-4 pt-4 gap-x-2 flex justify-end">
                            <router-link :to="'/app/preview/' + route.params.uuid + '/main'" target="_blank" class="btn btn-sm btn-success">
                                <span class="ml-1 font-normal text-xs">پیش نمایش</span>
                                <Icon styles="w-4 h-4" name="external-link"/>
                            </router-link>

                            <button @click="save()" class="btn btn-sm btn-info" :disabled="saving">
                                <span class="ml-1 font-normal text-xs">ذخیره</span>
                                <Icon styles="w-4 h-4" name="save" :loading="saving"/>
                            </button>

                            <button @click="publish()" class="btn btn-sm btn-error" :disabled="publishing">
                                <span class="ml-1 font-normal text-xs">انتشار</span>
                                <Icon styles="w-5 h-5" name="upload" :loading="publishing"/>
                            </button>
                            <div class="btn btn-sm btn-info">
                                <router-link to="/app" class="ml-1 font-normal text-xs">بستن ویرایشگر</router-link>
                                <Icon styles="w-4 h-4" name="close"/>
                            </div>
                        </div>
                        <div class="p-4 block">
                            <Draggable class="dragArea list-group min-h-[200px]" :list="draft" handle=".handle" group="blocks" item-key="uuid">
                                <template #item="{ element, index }">
                                    <div class="list-group-item">
                                        <BlockWrapper :block="element" @delete="deleteBlock(index)"/>
                                    </div>
                                </template>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BuilderLayout>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    import { 
        ACTION_GET_LANDING_PAGES,
        ACTION_UPDATE_DRAFT,
        ACTION_UPDATE_PAGES,

        ACTION_SHOW_ALERT,
    } from '../../../Utils/action-types'

    import { v4 as uuidv4 } from 'uuid'

    import blocks from '../../../Utils/blocks'

    import Draggable from 'vuedraggable'

    import BuilderLayout from '../../../Layouts/Builder.vue'
    import BlockWrapper from '../../../Components/Blocks/BlockWrapper.vue'
    import BlockGroup from '../../../Components/Blocks/BlockGroup.vue'
    
    import Icon from '../../../Components/Icon.vue'

    export default {
        name: 'PageBuilder',
        components: {
            BlockWrapper,
            Draggable,
            Icon,
            BuilderLayout,
            BlockGroup,
        },
        setup() {
            const route = useRoute()
            const store = useStore()

            const groups = blocks.groups
            const draft = ref([])
            
            const saving = ref(false)
            const publishing = ref(false)

            const cloneBlock = (block) => {
                block.uuid = uuidv4()
                return block
            }
            
            const deleteBlock = (index) => {
                draft.value.splice(index, 1)
            }

            onMounted(() => {
                let result = store.getters.findLandingPage(route.params.uuid)

                if(result == null) {
                    store.dispatch(ACTION_GET_LANDING_PAGES)
                        .then(() => {
                            result = store.getters.findLandingPage(route.params.uuid)

                            draft.value = result.draft.main
                        })
                }
                else {
                    draft.value = result.draft.main
                }
            })

            const save = () => {
                saving.value = true

                store.dispatch(ACTION_UPDATE_DRAFT, {uuid: route.params.uuid, draft: draft.value})
                    .then(() => {
                        saving.value = false
                    })
                    .catch(() => {
                        saving.value = false
                    })
            }

            const publish = () => {
                publishing.value = true

                store.dispatch(ACTION_UPDATE_PAGES, {uuid: route.params.uuid, pages: draft.value})
                    .then(() => {
                        publishing.value = false
                    })
                    .catch(() => {
                        publishing.value = false
                    })
            }

            return { groups, draft, cloneBlock, deleteBlock, save, publish, route, saving, publishing }
        },
    }
</script>
