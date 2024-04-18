import { c as useState } from './server.mjs';

function useToast() {
  const notifications = useState("notifications", () => []);
  function add(notification) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification
    };
    const index = notifications.value.findIndex((n) => n.id === body.id);
    if (index === -1) {
      notifications.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  }
  return {
    add,
    remove
  };
}

export { useToast as u };
//# sourceMappingURL=useToast-DWHlJjCD.mjs.map
