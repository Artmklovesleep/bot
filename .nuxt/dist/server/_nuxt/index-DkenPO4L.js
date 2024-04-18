import { useSSRContext, defineComponent, ref, watch, unref } from "vue";
import "hookable";
import { d as defineStore, u as useHead, s as storeToRefs, A as API } from "../server.mjs";
import { u as useToast } from "./useToast-DWHlJjCD.js";
import { ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
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
import "tailwind-merge";
import "axios";
const _sfc_main$1 = {
  __name: "carditem",
  __ssrInlineRender: true,
  props: {
    imagesrc: String,
    title: String,
    price: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none hover:opacity-75"><img${ssrRenderAttr("src", __props.imagesrc)} class=""></div><div class="mt-4 flex justify-between"><div><h3 class="text-md font-bold">${ssrInterpolate(__props.title)}</h3></div><p class="text-md font-medium">$${ssrInterpolate(__props.price)}</p></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carditem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const carditem = _sfc_main$1;
const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  actions: {
    addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
    clearCart() {
      this.items = [];
    },
    updateItemQuantity(itemId, quantity) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
      if ((item == null ? void 0 : item.quantity) == 0) {
        this.removeItem(itemId);
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Store" });
    const cartStore = useCartStore();
    const { items: cartItems, totalItems, totalPrice } = storeToRefs(cartStore);
    const selectedCategory = ref(0);
    const loading = ref(true);
    const filteredProducts = ref([]);
    const selectedProduct = ref(null);
    useToast();
    const products = ref({
      count: 0,
      results: []
    });
    const categories = ref({
      count: 0,
      results: []
    });
    function get_data() {
      Promise.all([
        API.get("categories/"),
        API.get("products/")
      ]).then(function([categoriesResponse, productsResponse]) {
        categories.value = categoriesResponse.data;
        products.value = productsResponse.data;
        if (categories.value.count > 0) {
          selectedCategory.value = categories.value.results[0].id;
          filterProducts();
        } else if (products.value.count > 0) {
          filteredProducts.value = products.value.results;
        }
        loading.value = false;
      }).catch(function(error) {
        console.log(error);
        loading.value = true;
      });
    }
    function filterProducts() {
      if (selectedCategory.value === 0) {
        filteredProducts.value = products.value.results;
      } else {
        filteredProducts.value = products.value.results.filter(
          (product) => product.category === selectedCategory.value
        );
      }
    }
    watch(selectedCategory, (newValue) => {
      if (newValue === 0) {
        filteredProducts.value = products.value.results;
      } else {
        filteredProducts.value = products.value.results.filter(
          (product) => product.category === newValue
        );
      }
    });
    get_data();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex h-screen"><div class="grow h-screen overflow-y-auto p-4">`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center h-full animate__animated animate__fadeIn"><div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>`);
      } else {
        _push(`<div><div class=""><div class="mt-2 pt-4 absolute top-0 left-0 w-full z-10 bg-pale-sky-100 dark:bg-pale-sky-800 rounded-full shadow-lg shadow-pale-sky-500/20"><div class="flex flex-wrap">`);
        if (categories.value.count > 0) {
          _push(`<!--[-->`);
          ssrRenderList(categories.value.results, (category) => {
            _push(`<button class="${ssrRenderClass([{ "bg-neutral-400 dark:bg-pale-sky-600": category.id === selectedCategory.value }, "text-center bg-transparent hover:bg-pale-sky-200 my-auto shadow-lg dark:shadow-neutral-700/50 text-black-700 font-semibold p-1 border-2 border-pale-sky-900 dark:border-neutral-400 hover:dark:bg-neutral-500 rounded-lg animate__animated hovanimate__swing ml-3 mb-3"])}">${ssrInterpolate(category.title)}</button>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">`);
        if (filteredProducts.value.length !== 0) {
          _push(`<!--[-->`);
          ssrRenderList(filteredProducts.value, (product) => {
            _push(`<div class="group relative bg-pale-sky-200 dark:bg-pale-sky-800 p-3 rounded-md"><a href="" class="animate__animated animate__fadeIn">`);
            _push(ssrRenderComponent(carditem, {
              imagesrc: "data:image/png;base64," + product.images,
              title: product.title,
              price: product.price
            }, null, _parent));
            _push(`</a><div class="flex flex-row-reverse pt-1 animate__animated animate__fadeIn">`);
            if (!product.quantity) {
              _push(`<button class="mt-2 py-1 w-full middle none center rounded-full bg-white font-mono font-bold uppercase shadow-md shadow-pale-sky-500/20 transition-all duration-200 hover:shadow-lg active:bg-pale-sky-900 active:text-pale-sky-400 text-black text-2xl">+</button>`);
            } else {
              _push(`<div class="mt-2 w-full middle none center rounded-full bg-white font-mono text-xs font-bold uppercase text-white shadow-md shadow-pale-sky-500/20 transition-all hover:shadow-lg"><div class="flex flex-row justify-between px-2"><button class="w-8 text-black bg-white text-2xl my-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">-</button><label class="block font-medium text-gray-900 my-auto text-xl animate__animated animate__fadeIn" for="quantity">${ssrInterpolate(product.quantity)}</label><button class="w-8 text-black bg-white text-2xl my-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">+</button></div></div>`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<div class="animate__animated animate__fadeIn">Нет данных</div>`);
        }
        _push(`</div></div>`);
      }
      if (selectedProduct.value) {
        _push(`<div class="fixed z-10 inset-0 overflow-y-auto animate__animated animate__fadeIn"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 animate__animated animate__fadeIn"><div class="fixed inset-0 transition-opacity" aria-hidden="true"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-center"><div class="mt-3 sm:mt-0 sm:w-1/2 flex justify-center items-center"><img${ssrRenderAttr("src", "data:image/png;base64," + selectedProduct.value.images)} class="w-full"></div><div class="mt-3 sm:mt-0 sm:ml-6 sm:w-1/2"><div class="mb-4"><label for="title" class="block text-sm font-medium text-gray-700">Название</label><input disabled type="text" id="title"${ssrRenderAttr("value", selectedProduct.value.title)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="category" class="block text-sm font-medium text-gray-700">Категория</label><select disabled id="category" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><!--[-->`);
        ssrRenderList(categories.value.results, (category) => {
          _push(`<option${ssrRenderAttr("value", category.id)}>${ssrInterpolate(category.title)}</option>`);
        });
        _push(`<!--]--></select></div><div class="mb-4"><label for="price" class="block text-sm font-medium text-gray-700">Цена</label><input disabled type="number" id="price"${ssrRenderAttr("value", selectedProduct.value.price)} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button type="button" class="my-3 md:my-0 lg:my-0 xl:my-0 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Отмена </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="fixed bottom-0 left-0 w-full p-4"><button class="${ssrRenderClass([{ "animate__fadeInUp": unref(cartItems).length > 0, "animate__fadeOutDown": unref(cartItems).length === 0 }, "w-full py-3 px-6 bg-pale-sky-800 dark:bg-pale-sky-50 dark:text-black text-white font-semibold rounded-xl hover:bg-pale-sky-700 dark:hover:bg-pale-sky-600 transition duration-200 animate__animated shadow-md shadow-gray-400 dark:shadow-pale-sky-700 hover:shadow-lg"])}"><div class="flex flex-row justify-between"><div>40min</div><div>Заказ</div><div>${ssrInterpolate(unref(totalPrice))}руб</div></div></button></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DkenPO4L.js.map
