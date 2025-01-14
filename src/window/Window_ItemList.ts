import type { Rectangle } from "./rectangle";
import type { Data_NamedItem } from "@sigureya/rpgtypes";
import type { Window_Selectable } from "./Window_Selectable";
import type { ISelectable } from "./types/";

// -----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.
export declare class Window_ItemList
  extends Window_Selectable
  implements ISelectable<Data_NamedItem>
{
  initialize(rect: Rectangle): void;

  setCategory(category: string): void;

  maxCols(): number;

  colSpacing(): number;

  maxItems(): number;

  item(): Data_NamedItem;

  itemAt(index: number): Data_NamedItem;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_NamedItem): void;

  needsNumber(): void;

  isEnabled(item: Data_NamedItem | undefined | null): boolean;

  makeItemList(): boolean;

  selectLast(): void;

  drawItem(index: number): void;

  numberWidth(): number;

  drawItemNumber(
    item: Data_NamedItem,
    x: number,
    y: number,
    width: number
  ): void;

  updateHelp(): void;

  refresh(): void;
}
