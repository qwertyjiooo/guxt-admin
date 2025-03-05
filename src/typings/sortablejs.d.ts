declare module 'sortablejs' { // 拖拽组件
    export default class Sortable {
        constructor(el: Element, options: SortableOptions);
    }

    interface SortableOptions {
        animation?: number;
        onStart?: (evt: Event) => void;
        onEnd?: (evt: Event) => void;
        // 根据需要添加更多的事件处理和选项
    }
}
