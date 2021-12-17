<template>
  <CBox
    v-bind="mainStyles[colorMode]"
    d="flex"
    flex-dir="column"
    class="zero-cal-content py-8 px-6"
  >
    <header>
      <CHeading text-align="center" mb="4">今日は何を食べた？</CHeading>
    </header>
    <main class="flex-1 min-h-screen">
      <div class="w-full">
        <c-input-group size="lg">
          <c-input
            placeholder="今日何食べた？"
            variant="outline"
            class="rounded-full bg-white py-3 px-5 placeholder-gray-500 w-full"
          />
          <c-input-right-element width="4.5rem">
            <c-icon-button
              variant-color="#E07F6A"
              aria-label="0カロリー理論を検索する"
              icon="icon-submit"
              class="rounded-full"
            />
          </c-input-right-element>
        </c-input-group>
      </div>
    </main>
    <footer></footer>
  </CBox>
</template>

<script lang="js">
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
} from '@chakra-ui/vue'

export default {
  name: 'App',
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
    CInputGroup,
    CInputRightElement,
    CInput,
    CHeading
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.zero-cal-content {
  background: linear-gradient(180deg, #f6bd6a 0%, #fad8a1 100%);
  // background-image: url('@/assets/image/illust-zero.svg');
}
</style>
