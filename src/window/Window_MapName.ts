import type { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_MapName
//
// The window for displaying the map name on the map screen.
export declare class Window_MapName extends Window_Base {
  update(): void;

  updateFadeIn(): void;

  updateFadeOut(): void;

  open(): void;

  close(): void;

  refresh(): void;

  drawBackground(x: number, y: number, width: number, height: number): void;
}
