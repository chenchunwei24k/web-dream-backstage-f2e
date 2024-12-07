<template>
  <div class="MainHeader">
    <div class="MainHeader__left">
      <div class="MainHeader__logo">
        <img src="@/assets/images/logo.jpg" alt="" />
      </div>
    </div>

    <div class="MainHeader__right">
      <el-dropdown>
        <span class="el-dropdown-link">
          Menu
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss">
.MainHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__logo {
    margin-right: 20px;

    img {
      height: 40px;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    outline: none;
  }

  &__left {
    display: flex;
    align-items: center;
  }
}
</style>
