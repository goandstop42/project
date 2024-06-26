import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/Style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_DataBindingString/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/reuse/pagetitle',
    name: 'PageView',
    component: () =>
      import(
        /* webpackChunkName: "reuse" , webpackPrefetch: true*/ '../views/4_reuse/PageView.vue'
      )
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: () =>
      import(
        /* webpackChunkName: "reuse" , webpackPrefetch: true*/ '../views/4_reuse/ParentView.vue'
      )
  },
  {
    path: '/reuse/list',
    name: 'ListView',
    component: () =>
      import(
        /* webpackChunkName: "reuse" , webpackPrefetch: true*/ '../views/4_reuse/ListView.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    component: () =>
      import(
        /* webpackChunkName: "reuse" , webpackPrefetch: true*/ '../views/4_reuse/SlotView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'DirectiveView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" , webpackPrefetch: true*/ '../views/5_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" , webpackPrefetch: true*/ '../views/5_advanced/PluginView.vue'
      )
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: () =>
      import(
        /* webpackChunkName: "todo" , webpackPrefetch: true*/ '../views/6_vuex/TodoView.vue'
      )
  },
  {
    path: '/template/p1/single',
    name: 'SingViewEditView',
    component: () =>
      import(
        /* webpackChunkName: "todo" , webpackPrefetch: true*/ '../views/11_template/p1/SingleViewEditView.vue'
      )
  },
  {
    path: '/template/p1/mixin',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: "todo" , webpackPrefetch: true*/ '../views/5_advanced/MixinView.vue'
      )
  },
  {
    path: '/module/font',
    name: 'FontView',
    component: () =>
      import(
        /* webpackChunkName: "font" , webpackPrefetch: true*/ '../views/9_module/FontawesomeView.vue'
      )
  },
  {
    path: '/module/sweetAlert',
    name: 'SweetAlert2View',
    component: () =>
      import(
        /* webpackChunkName: "font" , webpackPrefetch: true*/ '../views/9_module/SweetAlert2.vue'
      )
  },
  {
    path: '/template/p3/list',
    name: 'ListToDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template" , webpackPrefetch: true*/ '../views/11_template/p3/ListToDetailView.vue'
      )
  },
  {
    path: '/advanced/mix',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" , webpackPrefetch: true*/ '../views/5_advanced/MixinView.vue'
      )
  }
  // {
  //   path: '/template/p3/detail/:id',
  //
  //   name: 'DetailView',
  //
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/DetailView.vue'
  //     )
  // },
  //
  // {
  //   path: '/template/p3/edit/:id',
  //
  //   name: 'EditView',
  //
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/EditView.vue'
  //     )
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
