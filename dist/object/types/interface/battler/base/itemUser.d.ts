import type { Data_Skill } from "@sigureya/rpgtypes";
export interface ItemUser {
    canInput(): boolean;
    canMove(): boolean;
    isConfused(): boolean;
    confusionLevel(): boolean;
    isSkillWtypeOk(skill: Data_Skill): boolean;
    attackSkillId(): number;
    guardSkillId(): number;
}
