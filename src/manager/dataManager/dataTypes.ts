import {
  Data_Actor,
  Data_Map,
  Data_Enemy,
  Data_Armor,
  Data_Weapon,
  Data_Item,
  Data_Skill,
  Data_Class,
  Data_MapInfo,
  Data_State,
} from "@sigureya/rpgtypes";

export type RpgDataTypes =
  | Data_Map
  | Data_Actor[]
  | Data_Enemy[]
  | Data_Armor[]
  | Data_Weapon[]
  | Data_Item[]
  | Data_Skill[]
  | Data_Class[]
  | Data_MapInfo[]
  | Data_State[];
