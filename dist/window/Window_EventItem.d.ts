import type { Window_Message } from "./Window_Message";
import type { Window_ItemList } from "./Window_ItemList";
import type { Data_AnyGoods } from "@sigureya/rpgtypes";
export declare class Window_EventItem extends Window_ItemList {
    setMessageWindow(messageWindow: Window_Message): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    updatePlacement(): void;
    placeCancelButton(): void;
    includes(item: Data_AnyGoods): void;
    needsNumber(): void;
    isEnabled(): boolean;
    onOk(): void;
    onCancel(): void;
}
