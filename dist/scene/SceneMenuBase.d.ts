import type { Rectangle } from "pixi.js";
import type { Game_Actor } from "../object";
import type { Scene_Base } from "./sceneBase";
import type { Window_Help } from "../window";
import type { Sprite, Sprite_Button } from "../sprite";
export declare class Scene_MenuBase extends Scene_Base {
    _actor: Game_Actor;
    _backgroundSprite: Sprite;
    _helpWindow: Window_Help;
    _cancelButton: Sprite_Button;
    _pageupButton: Sprite_Button;
    _pagedownButton: Sprite_Button;
    constructor();
    initialize(): void;
    create(): void;
    update(): void;
    helpAreaTop(): number;
    helpAreaBottom(): number;
    helpAreaHeight(): number;
    mainAreaTop(): number;
    mainAreaBottom(): number;
    mainAreaHeight(): number;
    actor(): Game_Actor;
    updateActor(): void;
    createBackground(): void;
    setBackgroundOpacity(opacity: number): void;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createButtons(): void;
    needsCancelButton(): boolean;
    createCancelButton(): void;
    needsPageButtons(): boolean;
    createPageButtons(): void;
    updatePageButtons(): void;
    arePageButtonsEnabled(): boolean;
    nextActor(): void;
    onActorChange(): void;
    previousActor(): void;
    onActorChange(): void;
}
