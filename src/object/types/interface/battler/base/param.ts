import type { ParamID } from "@sigureya/rpgtypes";

export interface IParam {
  paramMin(paramId: ParamID): number;
  paramMax(paramId: ParamID): number;
}
