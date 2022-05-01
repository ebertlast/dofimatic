"use strict";
(self["webpackChunkdofimatic"] = self["webpackChunkdofimatic"] || []).push([[846],{

/***/ 8846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=b8518130


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Quasar App ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Essential Links ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_EssentialLink = (0,runtime_core_esm_bundler/* resolveComponent */.up)("EssentialLink");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      elevated: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          dense: "",
          round: "",
          icon: "menu",
          "aria-label": "Menu",
          onClick: _ctx.toggleLeftDrawer
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Quasar v" + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$q.version), 1)]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      modelValue: _ctx.leftDrawerOpen,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.leftDrawerOpen = $event),
      "show-if-above": "",
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          header: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
          _: 1
        }), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.essentialLinks, link => {
          return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_EssentialLink, (0,runtime_core_esm_bundler/* mergeProps */.dG)({
            key: link.title
          }, link), null, 16);
        }), 128))]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/EssentialLink.vue?vue&type=template&id=1d860da0

function EssentialLinkvue_type_template_id_1d860da0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
    clickable: "",
    tag: "a",
    target: "_blank",
    href: _ctx.link
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.icon ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
      key: 0,
      avatar: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: _ctx.icon
      }, null, 8, ["name"])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
        caption: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.caption), 1)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["href"]);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/EssentialLink.vue?vue&type=script&lang=js

/* harmony default export */ const EssentialLinkvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/EssentialLink.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/EssentialLink.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(EssentialLinkvue_type_script_lang_js, [['render',EssentialLinkvue_type_template_id_1d860da0_render]])

/* harmony default export */ const EssentialLink = (__exports__);
;




runtime_auto_import_default()(EssentialLinkvue_type_script_lang_js, 'components', {QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js


const linksList = [{
  title: 'Docs',
  caption: 'quasar.dev',
  icon: 'school',
  link: 'https://quasar.dev'
}, {
  title: 'Github',
  caption: 'github.com/quasarframework',
  icon: 'code',
  link: 'https://github.com/quasarframework'
}, {
  title: 'Discord Chat Channel',
  caption: 'chat.quasar.dev',
  icon: 'chat',
  link: 'https://chat.quasar.dev'
}, {
  title: 'Forum',
  caption: 'forum.quasar.dev',
  icon: 'record_voice_over',
  link: 'https://forum.quasar.dev'
}, {
  title: 'Twitter',
  caption: '@quasarframework',
  icon: 'rss_feed',
  link: 'https://twitter.quasar.dev'
}, {
  title: 'Facebook',
  caption: '@QuasarFramework',
  icon: 'public',
  link: 'https://facebook.quasar.dev'
}, {
  title: 'Quasar Awesome',
  caption: 'Community Quasar projects',
  icon: 'favorite',
  link: 'https://awesome.quasar.dev'
}];
/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',
  components: {
    EssentialLink: EssentialLink
  },

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }

    };
  }

}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(7605);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(6602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(1663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 6 modules
var QBtn = __webpack_require__(2731);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(1973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js + 9 modules
var QDrawer = __webpack_require__(1585);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (MainLayout_exports_);
;









runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QDrawer: QDrawer/* default */.Z,QList: QList/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=846.8f60943f.js.map