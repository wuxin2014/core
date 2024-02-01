export const enum ShapeFlags {
  ELEMENT = 1, // 1: 普通元素
  FUNCTIONAL_COMPONENT = 1 << 1, // 2: 函数组件
  STATEFUL_COMPONENT = 1 << 2, // 4: 有状态组件
  TEXT_CHILDREN = 1 << 3, // 8: 子节点为文本节点 
  ARRAY_CHILDREN = 1 << 4, // 16: 子节点为数组
  SLOTS_CHILDREN = 1 << 5, // 32: 子节点为插槽
  TELEPORT = 1 << 6, // 64: TELEPORT组件
  SUSPENSE = 1 << 7, // 128: SUSPENSE组件
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 256: 
  COMPONENT_KEPT_ALIVE = 1 << 9, // 512: 
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
