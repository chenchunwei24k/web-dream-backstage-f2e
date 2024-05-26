<template>
  <div class="MainSidebar">
    <el-menu
      class="MainSidebar__Menu"
      mode="vertical"
      :router="true"
      default-active="1"
    >
      <el-menu-item index="1" :route="{ name: 'PageData' }">
        <el-icon>
          <List />
        </el-icon>
        <span>Page data</span>
      </el-menu-item>

      <el-menu-item index="2" :route="{ name: 'UserData' }">
        <el-icon>
          <User />
        </el-icon>
        <span>User data</span>
      </el-menu-item>

      <el-menu-item index="3" :route="{ name: 'Dashboard' }">
        <el-icon>
          <Histogram />
        </el-icon>
        <span>Dashboard</span>
      </el-menu-item>

      <el-menu-item index="4" :route="{ name: 'Settings' }">
        <el-icon>
          <Setting />
        </el-icon>
        <span>Settings</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss">
.MainSidebar {
  &__Menu {
    width: 150px;
    height: 100%;
  }
}
</style>
