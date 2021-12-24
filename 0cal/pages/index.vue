<template>
  <c-box d="flex" flex-dir="column" class="zero-cal-content px-6">
    <c-box
      maxW="1440px"
      mx="auto"
      class="min-h-screen flex flex-col py-8 w-full"
    >
      <header>
        <c-heading text-align="center" mb="4">今日は何を食べた？</c-heading>
      </header>
      <main class="flex-1 overflow-x-hidden">
        <c-box mb="60px">
          <c-input-group size="lg">
            <c-input
              v-model="inputData.name"
              placeholder="今日何食べた？"
              variant="outline"
              borderRadius="full"
              class="rounded-full bg-white py-3 px-5 placeholder-gray-500"
            />
            <c-input-right-element>
              <c-button px="0" rounded="full" @click="submitHandler(inputData)">
                <img src="@/assets/image/icon-submit.svg" alt="">
              </c-button>
            </c-input-right-element>
          </c-input-group>
        </c-box>
        <div v-if="show">
          <div v-if="name">
            <p class="text-3xl font-bold">{{ name }}は{{ logic }}</p>
          </div>
          <div v-else>
            <p class="text-3xl font-bold">
              どうやらカロリーをまだ握りつぶせてないようだ。
            </p>
          </div>
        </div>
      </main>
      <footer></footer>
    </c-box>
  </c-box>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api";

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

type FoodsType = {
  name: string;
  logic: string;
};

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
    const $router = useRouter();

    const inputData = ref({
      name: "",
      logic: "",
    });

    const show = ref(false);

    const name = ref<string>("");
    const logic = ref<string>("");

    const foods = [
      {
        name: "カステラ",
        logic: "潰したらピンポン玉くらい小さくなるので、0カロリー。",
      },
      {
        name: "駅弁",
        logic:
          "新幹線で食べるもの。新幹線に乗って移動するとカロリーはついていけないので0カロリー",
      },
      {
        name: "王将アイス",
        logic: "２で割れないから0カロリー。",
      },
      {
        name: "アイス",
        logic:
          "冷たい。冷たくすることによってカロリーは全部飛ぶので0カロリー。",
      },
      {
        name: "キャベツ太郎",
        logic: "キャベツが入っている。キャベツは野菜なので0カロリー。",
      },
      {
        name: "バウムクーヘン",
        logic:
          "真ん中のカロリーのあるところを全部くり抜いてるのでカロリーゼロ。",
      },
      {
        name: "白米",
        logic: "白い。白い物は基本的にカロリーがないので、0カロリー。",
      },
    ];

    const submitHandler = (food: FoodsType) => {
      show.value = true;
      name.value = "";
      logic.value = "";
      const getFood = foods.find((it) => it.name === food.name);
      if (!getFood) return;
      name.value = getFood.name;
      logic.value = getFood.logic;
    };

    // const db = $store.dispatch('fetchFoods')
    // console.log('===========', db)

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
      show,
      name,
      logic,
      inputData,
      submitHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.zero-cal-content {
  // background-image: linear-gradient(
  //     rgba(0, 0, 255, 0.5),
  //     rgba(255, 255, 0, 0.5)
  //   ),
  //   url("~assets/image/illust-zero.svg");
  background-image: linear-gradient(180deg, #f6bd6a 0%, #fad8a1 100%),
    url("~assets/image/illust-zero.svg");
  background-position: bottom left;
  background-repeat: no-repeat;
}
</style>
