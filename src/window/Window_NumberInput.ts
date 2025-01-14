import type { Rectangle } from "./rectangle";
import type { Window_Message } from "./Window_Message";
import type { Window_Selectable } from "./Window_Selectable";

//-----------------------------------------------------------------------------
// Window_NumberInput
//
// The window used for the event command [Input Number].
export declare class Window_NumberInput extends Window_Selectable {
  setMessageWindow(messageWindow: Window_Message): void;

  start(): void;

  updatePlacement(): void;

  windowWidth(): number;

  windowHeight(): number;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  itemRect(index: number): Rectangle;

  isScrollEnabled(): boolean;

  isHoverEnabled(): boolean;

  createButtons(): void;

  placeButtons(): void;

  totalButtonWidth(): number;

  buttonSpacing(): void;

  buttonY(): number;

  update(): void;

  processDigitChange(): void;

  changeDigit(up: boolean): void;

  isTouchOkEnabled(): boolean;

  isOkEnabled(): boolean;

  isCancelEnabled(): boolean;

  processOk(): void;

  drawItem(index: number): void;

  onButtonUp(): void;

  onButtonDown(): void;

  onButtonOk(): void;
}
