import type { Data_UsableItem } from "@sigureya/rpgtypes";
import type { Game_Actor } from "../object";
import type { Window_ItemList, Window_MenuActor } from "../window";
import type { Rectangle } from "../window/rectangle";
import type { Scene_MenuBase } from "./menuBase";

export declare class Scene_ItemBase extends Scene_MenuBase {
  _actorWindow: Window_MenuActor;
  _itemWindow: Window_ItemList;
  initialize(): void;
  create(): void;
  createActorWindow(): void;
  actorWindowRect(): Rectangle;
  item(): Data_UsableItem;
  user(): Game_Actor | null;
  isCursorLeft(): boolean;
  showActorWindow(): void;
  hideActorWindow(): void;
  isActorWindowActive(): boolean;
  onActorOk(): void;
  onActorCancel(): void;
  determineItem(): void;
  useItem(): void;
  playSeForItem(): void;
  activateItemWindow(): void;
  itemTargetActors(): Game_Actor[];
  canUse(): boolean;
  isItemEffectsValid(): boolean;
  applyItem(): void;
  checkCommonEvent(): void;
}
