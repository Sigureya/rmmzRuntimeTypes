import type { Data_NamedItem, Data_UsableItem } from "@sigureya/rpgtypes";
import type { Window_ItemList } from "./Window_ItemList";
export declare class Window_BattleItem extends Window_ItemList {
    includes(item: Data_UsableItem & Data_NamedItem): void;
    show(): void;
    hide(): void;
}
