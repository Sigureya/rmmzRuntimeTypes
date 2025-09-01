import type { Rectangle } from "./rectangle";
import type { Window_Status } from "./Window_Status";
import type { Window_Selectable } from "./Window_Selectable";
import type { ISelectable } from "./types/ISelctable";
import type { Data_Item, ParamArray_ShopGoods } from "@sigureya/rpgtypes";
export declare class Window_ShopBuy extends Window_Selectable implements ISelectable<Data_Item> {
    initialize(rect: Rectangle): void;
    setupGoods(shopGoods: ParamArray_ShopGoods[]): void;
    maxItems(): number;
    item(): Data_Item;
    itemAt(index: number): Data_Item;
    setMoney(money: number): void;
    isCurrentItemEnabled(): boolean;
    price(item: Data_Item): number;
    isEnabled(item: Data_Item): boolean;
    refresh(): void;
    makeItemList(): boolean;
    goodsToItem(goods: ParamArray_ShopGoods): Data_Item;
    drawItem(index: number): void;
    priceWidth(): number;
    setStatusWindow(statusWindow: Window_Status): void;
    updateHelp(): void;
}
