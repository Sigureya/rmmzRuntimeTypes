import type { AudioFileParams } from "@sigureya/rpgtypes";
import type { WebAudio } from "../game/core";
interface AudioBufferRMMZ {
  dummy: number;
}
export interface AudioManager {
  _bgmVolume: number;
  _bgsVolume: number;
  _meVolume: number;
  _seVolume: number;
  _currentBgm: null;
  _currentBgs: null;
  _bgmBuffer: null;
  _bgsBuffer: null;
  _meBuffer: null;
  _seBuffers: [];
  _staticBuffers: [];
  _replayFadeTime: number;
  _path: "audio/";

  playBgm(bgm: AudioFileParams, pos: number): void;
  replayBgm(bgm: AudioFileParams): void;

  isCurrentBgm(bgm: AudioFileParams): boolean;
  updateBgmParameters(bgm: AudioFileParams): void;
  updateCurrentBgm(bgm: AudioFileParams, pos: number): void;
  stopBgm(): void;
  fadeOutBgm(duration: number): void;
  fadeInBgm(duration: number): void;

  playBgs(bgs: AudioFileParams, pos: number): void;
  replayBgs(bgs: AudioFileParams): void;
  isCurrentBgs(bgs: AudioFileParams): boolean;

  updateBgsParameters(bgs: AudioFileParams): void;
  updateCurrentBgs(bgs: AudioFileParams, pos: number): void;
  stopBgs(): void;
  fadeOutBgs(duration: number): void;
  fadeInBgs(duration: number): void;
  playMe(me: AudioFileParams): void;
  updateMeParameters(me: AudioFileParams): void;
  fadeOutMe(duration: number): void;
  stopMe(): void;
  playSe(se: AudioFileParams): void;
  updateSeParameters(buffer: AudioBufferRMMZ, se: AudioFileParams): void;
  cleanupSe(): void;
  stopSe(): void;
  playStaticSe(se: AudioBufferRMMZ): void;
  loadStaticSe(se: AudioBufferRMMZ): void;
  isStaticSe(se: AudioBufferRMMZ): boolean;

  saveBgm(): AudioFileParams;
  saveBgs(): AudioFileParams;
  stopAll(): void;
  makeEmptyAudioObject(): { name: string; volume: 0; pitch: 0 };

  createBuffer(folder: string, name: string): WebAudio;
  updateBufferParameters(
    buffer: WebAudio,
    configVolume: number,
    audio: AudioFileParams
  ): void;
  audioFileExt(): string;
  checkErrors(): void;
}
