<template>
  <div class="Main">
    <MainHeader></MainHeader>
    <div class="Main__container">
      <MainSidebar></MainSidebar>
      <div class="Main__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainSidebar from "@/components/MainSidebar.vue";
</script>

<style lang="scss">
.Main {
  .MainHeader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  &__container {
    position: relative;
    margin-top: 60px;

    .MainSidebar {
      margin-top: 60px;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
    }
  }

  &__content {
    margin-left: 150px;
  }
}
</style>
