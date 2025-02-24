<template>
  <div class="app-layout">
    <Sidebar class="sidebar" />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'MainLayout',
  components: {
    Sidebar
  }
}
</script>

<style>
:root {
  --gradient-from: #2b5876;
  --gradient-to: #4e4376;
  --gradient-hover-from: #3a6f94;
  --gradient-hover-to: #5d5191;
  --primary-color: #2b5876;
  --text-primary: #333;
  --text-secondary: #666;
  --text-light: #999;
  --border-color: #e0e0e0;
  --bg-light: #f5f5f5;
  --bg-lighter: #f8f9fa;
  --shadow-sm: 0 2px 6px rgba(43, 88, 118, 0.2);
  --shadow-md: 0 4px 12px rgba(43, 88, 118, 0.4);
}

.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--bg-lighter);
}

.sidebar {
  flex-shrink: 0;
  border-right: 1px solid var(--border-color);
  width: 280px;
}

.main-content {
  flex: 1;
  overflow: auto;
  position: relative;
}
</style> 