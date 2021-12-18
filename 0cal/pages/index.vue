<template>
  <c-box d="flex" flex-dir="column" class="zero-cal-content py-8 px-6">
    <header>
      <c-heading text-align="center" mb="4">今日は何を食べた？</c-heading>
    </header>
    <main class="flex-1 min-h-screen">
      <div class="w-full">
        <c-input-group size="lg">
          <c-input
            v-model="inputData.name"
            placeholder="今日何食べた？"
            variant="outline"
            borderRadius="full"
            class="rounded-full bg-white py-3 px-5 placeholder-gray-500"
          />
          <c-input-right-element>
            <c-icon-button
              variant-color="#E07F6A"
              aria-label="0カロリー理論を検索する"
              icon="con-submit"
              class="rounded-full"
              @click="submitHandler(inputData)"
            />
          </c-input-right-element>
        </c-input-group>
      </div>
    </main>
    <footer></footer>
  </c-box>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api"

import {
  CBox,
  CButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CHeading,
  CInputGroup,
  CInputRightElement,
  CInput,
} from "@chakra-ui/vue";

export default defineComponent({
  components: {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CHeading,
    CInputGroup,
    CInputRightElement,
    CInput,
  },

  setup() {
    const $router = useRouter()

    const inputData = ref({
      name: '',
      logic: '',
    })

    const submitHandler = (food: string) => {
      console.log(food, 'はほげほごだから0カロリー。')
    }

    const db = $store.dispatch('fetchFoods')
    console.log('===========', db)

    // const addZeroCal = async () => {
    //   try {
    //     await 
    //   } catch {
    //     console.log('error')
    //   }
    // }

    return {
      // inject,
      // colorMode,
      inputData,
      submitHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.zero-cal-content {
  background: linear-gradient(180deg, #f6bd6a 0%, #fad8a1 100%);
  // background-image: url('@/assets/image/illust-zero.svg');
}
</style>
