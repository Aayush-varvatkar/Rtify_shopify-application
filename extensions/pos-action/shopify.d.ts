import '@shopify/ui-extensions';

//@ts-expect-error -- shopify global is injected at runtime by the POS extension sandbox
declare module './src/Action.jsx' {
  const shopify: import('@shopify/ui-extensions/pos.product-details.action.render').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-expect-error -- shopify global is injected at runtime by the POS extension sandbox
declare module './src/MenuItem.jsx' {
  const shopify: import('@shopify/ui-extensions/pos.product-details.action.menu-item.render').Api;
  const globalThis: { shopify: typeof shopify };
}
