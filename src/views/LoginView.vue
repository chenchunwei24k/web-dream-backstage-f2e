<script setup></script>

<template>
  <main class="Login">
    <div class="Login__container">
      <div class="Login__logo">
        <img src="@/assets/images/logo.jpg" alt="" />
      </div>

      <div class="Login__card">
        <div class="Login__block">
          <div class="Login__title">帳號</div>
          <div class="Login__input">
            <el-input placeholder="請輸入帳號"></el-input>
          </div>
        </div>

        <div class="Login__block">
          <div class="Login__title">密碼</div>
          <div class="Login__input">
            <el-input type="password" placeholder="請輸入密碼"></el-input>
          </div>
        </div>

        <div class="Login__block Login__button">
          <el-button size="large" @click="login">登入</el-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  console.log("login");
  router.push({ name: "PageData" });
};
</script>

<style lang="scss">
.Login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  &__container {
    width: 100%;
    max-width: 360px;
    padding: 20px;
  }

  &__logo {
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 100%;
      border-radius: 12px;
    }
  }

  &__card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  &__block {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__input {
    .el-input {
      width: 100%;
    }
  }

  &__button {
    text-align: center;
    margin: 40px auto 0;
  }
}
</style>
