import type { Data_UsableItem } from "@sigureya/rpgtypes";
export interface IUsableItem {
    initialize(item: Data_UsableItem): void;
    isSkill(): boolean;
    isItem(): boolean;
    isUsableItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    isEquipItem(): boolean;
    isNull(): boolean;
    itemId(): number;
    object(): Data_UsableItem | null;
    setObject(item: Data_UsableItem): void;
}
