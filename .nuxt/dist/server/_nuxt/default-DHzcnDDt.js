import { _ as _export_sfc, a as useAppConfig, m as mergeConfig, b as appConfig, c as useState, e as __nuxt_component_0$5 } from "../server.mjs";
import __nuxt_component_0$3 from "./Icon-LhNy2ogI.js";
import { defineComponent, computed, mergeProps, useSSRContext, useAttrs, toValue, toRef, ref, watch, createVNode, resolveDynamicComponent, withCtx, renderSlot, getCurrentInstance, provide, inject, onUnmounted, openBlock, createBlock, createCommentVNode, toDisplayString, createSlots, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
import { twMerge, twJoin } from "tailwind-merge";
import { _ as __nuxt_component_0$4 } from "./nuxt-link-CKPBee9r.js";
import { isEqual } from "ohash";
import { u as useToast } from "./useToast-DWHlJjCD.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@vueuse/core";
import "axios";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-e886EPiO.js";
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$6 = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const dynamic = computed(() => {
      var _a, _b;
      return props.dynamic || ((_b = (_a = appConfig2.ui) == null ? void 0 : _a.icons) == null ? void 0 : _b.dynamic);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      dynamic
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  if (_ctx.dynamic) {
    _push(ssrRenderComponent(_component_Icon, mergeProps({ name: _ctx.name }, _attrs), null, _parent));
  } else {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    xs: "p-1.5",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  // eslint-disable-next-line quotes
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
const notifications = {
  wrapper: "fixed flex flex-col justify-end z-[55]",
  position: "bottom-0 end-0",
  width: "w-full sm:w-96",
  container: "px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"
};
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$5 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$3.default.icon
    },
    size: {
      type: String,
      default: () => config$3.default.size,
      validator(value) {
        return Object.keys(config$3.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$3.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$3.default.chipPosition,
      validator(value) {
        return Object.keys(config$3.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$3);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$2;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive })
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              onClick: (e) => !isExternal && !_ctx.disabled && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  onUnmounted(() => {
    groupContext == null ? void 0 : groupContext.value.unregister(instance);
  });
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2,
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$2.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$2);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UIcon = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2,
    UAvatar: __nuxt_component_1$1,
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$1.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$1.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config$1.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config$1);
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      var _a;
      return twMerge(twJoin(
        ui.value.wrapper,
        (_a = ui.value.background) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow
      ), props.class);
    });
    const progressClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.progress.base,
        (_a = ui.value.progress.background) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.icon.base,
        (_a = ui.value.icon.color) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
    }
    function onMouseleave() {
    }
    function onClose() {
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    onUnmounted(() => {
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$2;
  const _component_UAvatar = __nuxt_component_1$1;
  const _component_UButton = __nuxt_component_2;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !(_ctx.title && _ctx.$slots.title) && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.notifications, notifications);
const _sfc_main$1 = defineComponent({
  components: {
    UNotification: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("notifications", toRef(props, "ui"), config);
    const toast = useToast();
    const notifications2 = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toast,
      notifications: notifications2,
      wrapperClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0;
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.wrapperClass,
      role: "region"
    }, _ctx.attrs))}>`);
    if (_ctx.notifications.length) {
      _push2(`<div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
      ssrRenderList(_ctx.notifications, (notification2) => {
        _push2(`<div>`);
        _push2(ssrRenderComponent(_component_UNotification, mergeProps(notification2, {
          class: notification2.click && "cursor-pointer",
          onClick: ($event) => notification2.click && notification2.click(notification2),
          onClose: ($event) => _ctx.toast.remove(notification2.id)
        }), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_, name) => {
            return {
              name,
              fn: withCtx((slotData, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, name, slotData)
                  ];
                }
              })
            };
          })
        ]), _parent));
        _push2(`</div>`);
      });
      _push2(`<!--]--></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div>`);
  }, "body", false, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$5;
      const _component_UNotifications = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DHzcnDDt.js.map
