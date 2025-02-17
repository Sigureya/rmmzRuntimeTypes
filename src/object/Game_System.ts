// -----------------------------------------------------------------------------
// Game_System
//

import type { AudioFileParams, ColorRGBA } from "@sigureya/rpgtypes";

// The game object class for the system data.
export declare class Game_System {
  _saveEnabled: boolean;
  _menuEnabled: boolean;
  _encounterEnabled: boolean;
  _formationEnabled: boolean;
  _battleCount: number;
  _winCount: number;
  _escapeCount: number;
  _saveCount: number;
  _versionId: number;
  _savefileId: number;
  _framesOnSave: number;
  _bgmOnSave: null | AudioFileParams;
  _bgsOnSave: null | AudioFileParams;
  _windowTone: null | ColorRGBA;
  _battleBgm: null | AudioFileParams;
  _victoryMe: null | AudioFileParams;
  _defeatMe: null | AudioFileParams;
  _savedBgm: null | AudioFileParams;
  _walkingBgm: null | AudioFileParams;
  constructor();
  initialize(): void;
  isJapanese(): boolean;
  isChinese(): boolean;
  isKorean(): boolean;
  isCJK(): boolean;
  isRussian(): boolean;
  isSideView(): boolean;
  isAutosaveEnabled(): boolean;
  isSaveEnabled(): boolean;
  disableSave(): void;
  enableSave(): void;
  isMenuEnabled(): boolean;
  disableMenu(): void;
  enableMenu(): void;
  isEncounterEnabled(): boolean;
  disableEncounter(): void;
  enableEncounter(): void;
  isFormationEnabled(): boolean;
  disableFormation(): void;
  enableFormation(): void;
  battleCount(): number;
  winCount(): number;
  escapeCount(): number;
  saveCount(): number;
  versionId(): number;
  savefileId(): number;
  setSavefileId(savefileId: number): void;
  windowTone(): ColorRGBA;
  setWindowTone(value: ColorRGBA): void;
  battleBgm(): AudioFileParams;
  setBattleBgm(value: AudioFileParams): void;
  victoryMe(): AudioFileParams;
  setVictoryMe(value: AudioFileParams): void;
  defeatMe(): AudioFileParams;
  setDefeatMe(value: AudioFileParams): void;
  onBattleStart(): void;
  onBattleWin(): void;
  onBattleEscape(): void;
  onBeforeSave(): void;
  onAfterLoad(): void;
  playtime(): number;
  playtimeText(): string;
  saveBgm(): void;
  replayBgm(): void;
  saveWalkingBgm(): void;
  replayWalkingBgm(): void;
  saveWalkingBgm2(): void;
  mainFontFace(): string;
  numberFontFace(): string;
  mainFontSize(): number;
  windowPadding(): number;
  windowOpacity(): number;
}
