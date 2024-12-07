<template>
  <div class="MainSidebar">
    <el-menu
      class="MainSidebar__Menu"
      mode="vertical"
      :router="true"
      default-active="1"
    >
      <el-menu-item index="1" :route="{ name: 'accounts' }">
        <el-icon>
          <List />
        </el-icon>
        <span>帳號管理</span>
      </el-menu-item>

      <el-menu-item index="2" :route="{ name: 'semesters' }">
        <el-icon>
          <User />
        </el-icon>
        <span>學期管理</span>
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
