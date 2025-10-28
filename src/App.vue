<template>
  <div class="page">
    <div
      class="Page-header"
      :style="{
        display: state.isChannel ? 'none' : 'block',
      }"
    >
      <div class="Page-header--main default">
        <div class="Page-header--main__in container">
          <div class="Page-header--default">
            <div class="Page-header--logo">
              <h1>
                <a href="#/index">
                  <img
                    class="all-logo"
                    src="//static2.17youhui.com.cn/uploads/sites/23/2021/10/bdc193ddc9f9a93cfc7217d013373fb3.png"
                    alt="logo"
                    view-mark="1"
                  />
                  <img
                    class="mobile-logo"
                    src="//static2.17youhui.com.cn/uploads/sites/23/2021/10/bdc193ddc9f9a93cfc7217d013373fb3.png"
                    alt="logo-mobile"
                    view-mark="1"
                  />
                </a>
              </h1>
            </div>
            <div class="Page-header--menu">
              <div class="cc-element--wrapper menu-68fed09945d01--wrapper">
                <div
                  node-id="menu-68fed09945d01"
                  node-type="menu"
                  class="cc-menu cc-menu--style__line cc-menu--horizontal cc-menu--line-main"
                >
                  <ul class="cc-menu--nav">
                    <li
                      class="cc-menu--item"
                      :class="{ current: isActiveRoute('/index') }"
                    >
                      <div class="cc-menu--item__link">
                        <a href="#/index">
                          <span class="cc-menu--item__title"> 网站首页 </span>
                        </a>
                      </div>
                    </li>

                    <li
                      class="cc-menu--item"
                      :class="{ current: isActiveRoute('/channel') }"
                    >
                      <div class="cc-menu--item__link">
                        <a href="#/channel">
                          <span class="cc-menu--item__title"> 人才发展 </span>
                        </a>
                      </div>
                    </li>

                    <li
                      class="cc-menu--item"
                      :class="{ current: isActiveRoute('/about') }"
                    >
                      <div class="cc-menu--item__link">
                        <a href="#/about">
                          <span class="cc-menu--item__title"> 关于集团 </span>
                        </a>
                      </div>
                    </li>

                    <li
                      class="cc-menu--item"
                      :class="{ current: isActiveRoute('/news') }"
                    >
                      <div class="cc-menu--item__link">
                        <a href="#/news">
                          <span class="cc-menu--item__title"> 新闻中心 </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Page-header--main__placeholder"></div>

      <div class="Page-header--mobile default">
        <div class="Page-header--simple">
          <div class="Page-header--logo">
            <h1>
              <a href="/">
                <img
                  class="all-logo"
                  src="//static2.17youhui.com.cn/uploads/sites/23/2021/10/bdc193ddc9f9a93cfc7217d013373fb3.png"
                  alt="logo"
                  view-mark="1"
                />
                <img
                  class="mobile-logo"
                  src="//static2.17youhui.com.cn/uploads/sites/23/2021/10/bdc193ddc9f9a93cfc7217d013373fb3.png"
                  alt="logo-mobile"
                  view-mark="1"
                />
              </a>
            </h1>
          </div>
          <div class="Page-header--icons">
            <ul>
              <li class="menu" @click="toggleNav">
                <img
                  src="./assets/images/menu.png"
                  alt=""
                  style="width: 20px"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="Page-header--shade" @click="closeNav">
          <div class="Page-header--shade__menu" @click.stop>
            <!-- 关闭按钮 -->
            <div
              class="menu-close-btn"
              @click="closeNav"
              style="
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 1000;
                cursor: pointer;
                font-size: 24px;
                color: #fff;
                background: rgba(0, 0, 0, 0.5);
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              ×
            </div>
            <div class="cc-element--wrapper menu-68fed0996234e--wrapper">
              <div
                node-id="menu-68fed0996234e"
                node-type="menu"
                class="cc-menu cc-menu--style__default cc-menu--vertical cc-menu--arrow-icon"
              >
                <ul class="cc-menu--nav">
                  <li
                    class="cc-menu--item"
                    :class="{ current: isActiveRoute('/index') }"
                  >
                    <div class="cc-menu--item__link">
                      <a href="#/index" @click="closeNav">
                        <span class="cc-menu--item__title"> 网站首页 </span>
                      </a>
                    </div>
                  </li>

                  <li
                    class="cc-menu--item"
                    :class="{ current: isActiveRoute('/channel') }"
                  >
                    <div class="cc-menu--item__link">
                      <a href="#/channel" @click="closeNav">
                        <span class="cc-menu--item__title"> 人才发展 </span>
                      </a>
                    </div>
                  </li>

                  <li
                    class="cc-menu--item"
                    :class="{ current: isActiveRoute('/about') }"
                  >
                    <div class="cc-menu--item__link">
                      <a href="#/about" @click="closeNav">
                        <span class="cc-menu--item__title"> 关于集团 </span>
                      </a>
                    </div>
                  </li>

                  <li
                    class="cc-menu--item"
                    :class="{ current: isActiveRoute('/news') }"
                  >
                    <div class="cc-menu--item__link">
                      <a href="#/news" @click="closeNav">
                        <span class="cc-menu--item__title"> 新闻中心 </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Page-header--mobile__placeholder"></div>

      <div
        v-if="showAboutPages"
        class="Page-slot--template-header aboutPages"
        template_type="current"
        template_position="template-header"
        template_id="45"
      >
        <div
          node-id="row-68fed0eedc84c"
          node-type="row"
          class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__full"
        >
          <div
            node-id="column-68fed0eedd678"
            node-type="column"
            class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
          >
            <div class="cc-element--wrapper block-68fed0eedfbfc--wrapper">
              <div
                node-id="block-68fed0eedfbfc"
                node-type="block"
                class="cc-block cc-slot--wrapper"
              >
                <div
                  node-id="row-68fed0eee08e3"
                  node-type="row"
                  class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__default"
                >
                  <div
                    node-id="column-68fed0eee12ee"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
                  >
                    <div
                      class="cc-element--wrapper placeholder-68fed0eee406a--wrapper"
                    >
                      <div
                        node-id="placeholder-68fed0eee406a"
                        node-type="placeholder"
                        class="cc-placeholder"
                        style="height: 50px"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  node-id="row-68fed0eee4add"
                  node-type="row"
                  class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__row"
                >
                  <div
                    node-id="column-68fed0eee55c2"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-0 screen-min-768 screen-min-992 screen-min-1200"
                  >
                    <div
                      class="cc-element--wrapper breadcrumb-68fed0eee5f4c--wrapper"
                    >
                      <div
                        node-id="breadcrumb-68fed0eee5f4c"
                        node-type="breadcrumb"
                        class="cc-breadcrumb cc-breadcrumb cc-breadcrumb--align__right"
                      >
                        <ul>
                          <li><a href="#/index">首页</a></li>
                          <li class="disabled">
                            <a href="#/about">集团简介</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="showNewsPages"
        class="Page-slot--template-header newsPages"
        template_type="current"
        template_position="template-header"
        template_id="54"
      >
        <div
          node-id="row-68fed3a80192e"
          node-type="row"
          class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__full"
        >
          <div
            node-id="column-68fed3a804a7e"
            node-type="column"
            class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
          >
            <div class="cc-element--wrapper block-68fed3a8078bc--wrapper">
              <div
                node-id="block-68fed3a8078bc"
                node-type="block"
                class="cc-block cc-slot--wrapper"
              >
                <div
                  node-id="row-68fed3a8093ce"
                  node-type="row"
                  class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__default"
                >
                  <div
                    node-id="column-68fed3a80a075"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
                  >
                    <div
                      class="cc-element--wrapper placeholder-68fed3a80d769--wrapper"
                    >
                      <div
                        node-id="placeholder-68fed3a80d769"
                        node-type="placeholder"
                        class="cc-placeholder"
                        style="height: 50px"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  node-id="row-68fed3a810fb9"
                  node-type="row"
                  class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__row"
                >
                  <div
                    node-id="column-68fed3a811f2d"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-0 screen-min-768 screen-min-992 screen-min-1200"
                  >
                    <div
                      class="cc-element--wrapper breadcrumb-68fed3a812bfa--wrapper"
                    >
                      <div
                        node-id="breadcrumb-68fed3a812bfa"
                        node-type="breadcrumb"
                        class="cc-breadcrumb cc-breadcrumb cc-breadcrumb--align__right"
                      >
                        <ul>
                          <li><a href="https://www.cec.com.cn">首页</a></li>
                          <li class="disabled">
                            <a
                              href="https://www.cec.com.cn/%e5%9b%bd%e8%b5%84%e8%a6%81%e9%97%bb"
                              >国资要闻</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RouterView />

    <div
      class="Page-footer"
      :style="{
        display: state.isChannel ? 'none' : 'block',
      }"
    >
      <div
        class="Page-slot--template-footer"
        template_type="global"
        template_position="template-footer"
        template_id="12"
      >
        <div
          node-id="row-68fed0997b20b"
          node-type="row"
          class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__full cc-row-bg-footer"
        >
          <div
            node-id="column-68fed0997bee3"
            node-type="column"
            class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-24 cc-col-xl-24 cc-col-lg3-24 cc-col-lg2-24 cc-col-lg-24 cc-col-md-24 cc-col-sm-24 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
          >
            <div class="cc-element--wrapper block-68fed0997c927--wrapper">
              <div
                node-id="block-68fed0997c927"
                node-type="block"
                class="cc-block cc-slot--wrapper"
              >
                <div
                  node-id="row-68fed0997d2e0"
                  node-type="row"
                  class="cc-row cc-slot--wrapper cc-row--flex cc-row--justify__start cc-row--align__top cc-row--width__default"
                >
                  <div
                    node-id="column-68fed0997dddd"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-9 cc-col-xl-9 cc-col-lg3-9 cc-col-lg2-9 cc-col-lg-9 cc-col-md-9 cc-col-sm-9 cc-col-xs-24 screen-min-768 screen-min-992 screen-min-1200"
                  >
                    <div
                      class="cc-element--wrapper textblock-68fed09981073--wrapper"
                    >
                      <div
                        node-id="textblock-68fed09981073"
                        node-type="textblock"
                        class="cc-textblock"
                      >
                        <div class="cc-textblock__body richtext">
                          <p class="">
                            <span style="font-size: 18px"
                              ><strong
                                ><span style="color: #ffffff"
                                  >联系我们</span
                                ></strong
                              ></span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="cc-element--wrapper textblock-68fed09981fcf--wrapper"
                    >
                      <div
                        node-id="textblock-68fed09981fcf"
                        node-type="textblock"
                        class="cc-textblock"
                      >
                        <div class="cc-textblock__body richtext">
                          <p style="line-height: 1.2">
                            <span style="color: #ffffff"
                              >&nbsp;<span class="mark-fapkw"
                                ><!-- . --><img
                                  src="./assets/images/phone.png"
                                  mode=""
                                  style="width: 12px" /></span
                              >&nbsp; 咨询电话：</span
                            ><span style="font-size: 18px"
                              ><strong
                                ><span style="color: #ffffff"
                                  >010-83026500</span
                                ></strong
                              ></span
                            >
                          </p>
                          <p style="line-height: 1.2">
                            <span style="color: #ffffff"
                              >&nbsp;<span class="mark-fapkw"
                                ><!-- . --><img
                                  src="./assets/images/local.png"
                                  mode=""
                                  style="width: 12px" /></span
                              >&nbsp;
                              广东省深圳市南山区科发路3号中电长城大厦A座</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    node-id="column-68fed09982f33"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-3 cc-col-xl-3 cc-col-lg3-3 cc-col-lg2-3 cc-col-lg-3 cc-col-md-3 cc-col-sm-3 cc-col-xs-0 screen-min-768 screen-min-992 screen-min-1200"
                  ></div>
                  <div
                    node-id="column-68fed09983c1f"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-3 cc-col-xl-3 cc-col-lg3-3 cc-col-lg2-3 cc-col-lg-3 cc-col-md-3 cc-col-sm-3 cc-col-xs-12 screen-min-768 screen-min-992 screen-min-1200"
                  ></div>
                  <div
                    node-id="column-68fed0998471a"
                    node-type="column"
                    class="cc-col cc-slot--wrapper cc-col--align__top cc-col--justify__start cc-col-3 cc-col-xl-3 cc-col-lg3-3 cc-col-lg2-3 cc-col-lg-3 cc-col-md-3 cc-col-sm-3 cc-col-xs-12 screen-min-768 screen-min-992 screen-min-1200"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer__in container">
          <div class="richtext" style="text-align: left">
            <p style="text-align: center">
              <span style="color: #ffffff"
                >Copyright 2005- CEC版权所有 All Rights Reserved &nbsp;<a
                  style="color: #ffffff"
                  >京ICP备15015975号-1</a
                >
                &nbsp; | &nbsp;
                <a style="color: #ffffff">严正声明</a></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, onMounted, onUnmounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import config from "./config";

const state = reactive({
  isChannel: false,
});

// 导航菜单展开状态
const isNavOpen = ref(false);

// 关于我们下拉菜单展开状态
const isAboutDropdownOpen = ref(false);

// 滚动状态
const isScrolled = ref(false);

// 切换导航菜单
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
  updateBodyClass();
};

// 关闭导航菜单
const closeNav = () => {
  isNavOpen.value = false;
  updateBodyClass();
};

// 更新body的类名
const updateBodyClass = () => {
  if (isNavOpen.value) {
    document.body.classList.add("show-mobile-menu");
  } else {
    document.body.classList.remove("show-mobile-menu");
  }
};

// 更新body的left-sidebar类
const updateLeftSidebarClass = () => {
  if (shouldShowLeftSidebar.value) {
    document.body.classList.add("left-sidebar");
  } else {
    document.body.classList.remove("left-sidebar");
  }
};

// 处理滚动事件（使用requestAnimationFrame优化）
let scrollAnimationFrame = null;
let lastScrollTop = 0;
let ticking = false;
const SCROLL_THRESHOLD = 3; // 进一步降低滚动阈值

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = Math.abs(scrollTop - lastScrollTop);

      // 只有当滚动距离足够大时才更新状态，避免微小滚动造成抖动
      if (scrollDelta > 1) {
        const newScrolledState = scrollTop > SCROLL_THRESHOLD;

        // 只有当状态真正改变时才更新
        if (isScrolled.value !== newScrolledState) {
          isScrolled.value = newScrolledState;
          console.log(
            "滚动状态改变:",
            newScrolledState ? "固定" : "正常",
            "scrollTop:",
            scrollTop
          );
        }

        lastScrollTop = scrollTop;
      }

      ticking = false;
    });

    ticking = true;
  }
};

// 更新header的fixed类
const updateHeaderClass = () => {
  const headerElement = document.querySelector(".Page-header--main.default");
  if (headerElement) {
    // 使用classList.toggle确保平滑切换
    headerElement.classList.toggle("fixed", isScrolled.value);
    console.log(
      "Header类名更新:",
      isScrolled.value ? "添加fixed" : "移除fixed"
    );
  }
};

// 切换关于我们下拉菜单
const toggleAboutDropdown = (event) => {
  // 在移动端，阻止默认的链接跳转行为
  if (window.innerWidth <= 767) {
    event.preventDefault();
    isAboutDropdownOpen.value = !isAboutDropdownOpen.value;
  }
};

// 关闭关于我们下拉菜单
const closeAboutDropdown = () => {
  isAboutDropdownOpen.value = false;
};

const route = useRoute();

// 计算当前路由的激活状态
const isActiveRoute = (path) => {
  const currentPath = route.path || route.fullPath;
  // 处理首页路由的特殊情况
  if (path === "/index" || path === "#/index") {
    return (
      currentPath === "/" ||
      currentPath === "/index" ||
      currentPath === "#/index" ||
      currentPath === "#/"
    );
  }
  return currentPath === path;
};

// 计算是否显示aboutPages
const showAboutPages = computed(() => {
  const currentPath = route.path || route.fullPath;
  return currentPath === "/about" || currentPath === "#/about";
});

// 计算是否显示newsPages
const showNewsPages = computed(() => {
  const currentPath = route.path || route.fullPath;
  return currentPath === "/news" || currentPath === "#/news";
});

// 计算是否应该显示左侧边栏（非首页和人才发展页面）
const shouldShowLeftSidebar = computed(() => {
  const currentPath = route.path || route.fullPath;
  const isIndex =
    currentPath === "/" ||
    currentPath === "/index" ||
    currentPath === "#/index" ||
    currentPath === "#/";
  const isChannel = currentPath === "/channel" || currentPath === "#/channel";
  return !isIndex && !isChannel;
});

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath == "/channel") {
      state.isChannel = true;
    } else {
      state.isChannel = false;
    }

    // 更新left-sidebar类
    updateLeftSidebarClass();
  }
);

// 监听shouldShowLeftSidebar变化
watch(shouldShowLeftSidebar, (newValue) => {
  updateLeftSidebarClass();
});

// 监听滚动状态变化
watch(isScrolled, (newValue) => {
  updateHeaderClass();
});

onMounted(() => {
  document.title = config.TITLE;

  // 初始化left-sidebar类
  updateLeftSidebarClass();

  // 初始化header类
  updateHeaderClass();

  // 监听滚动事件
  window.addEventListener("scroll", handleScroll);

  // 监听窗口大小变化，在桌面端自动关闭移动端菜单
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      isNavOpen.value = false;
      updateBodyClass();
    }
  });

  // 监听ESC键关闭菜单
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isNavOpen.value) {
      closeNav();
    }
  });
});

// 组件卸载时清理
onUnmounted(() => {
  // 移除body类
  document.body.classList.remove("show-mobile-menu");
  document.body.classList.remove("left-sidebar");

  // 移除滚动事件监听
  window.removeEventListener("scroll", handleScroll);

  // 清理滚动状态
  ticking = false;
  lastScrollTop = 0;

  // 移除header的fixed类
  const headerElement = document.querySelector(".Page-header--main.default");
  if (headerElement) {
    headerElement.classList.remove("fixed");
  }
});
</script>
<style scoped>
a {
  cursor: pointer;
}
.cc-row-bg-footer {
  background-image: url(./assets/images/46365ffa53e47ca52c4a3d9e769a1ecf.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
}
</style>

<style>
/* 移动端不应用fixed效果 */
@media (max-width: 767px) {
  .Page-header--main.default.fixed {
    position: static !important;
    box-shadow: none !important;
    transform: none !important;
  }

  body:has(.Page-header--main.default.fixed) {
    padding-top: 0 !important;
  }
}

/* 确保header内容不会抖动 */
.Page-header--main.default .Page-header--main__in {
  transition: none; /* 禁用内部元素的过渡 */
}

.Page-header--main.default .cc-menu--nav {
  transition: none; /* 禁用菜单的过渡 */
}

.Page-header--main.default .cc-menu--item {
  transition: none; /* 禁用菜单项的过渡 */
}

/* 优化滚动性能 */
.Page-header--main.default * {
  transition: none !important; /* 禁用所有内部元素的过渡 */
}

/* 确保header在固定时不会产生布局偏移 */
.Page-header--main.default.fixed {
  margin: 0;
  border: none;
  outline: none;
}
</style>