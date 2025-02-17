import type {
  Direction8,
  IDisplayableCharacter,
} from "./types/interface/character";

export declare class Game_CharacterBase implements IDisplayableCharacter {
  get x(): number;
  get y(): number;

  _x: number;
  _y: number;
  _realX: number;
  _realY: number;
  _moveSpeed: number;
  _moveFrequency: number;
  _opacity: number;
  _blendMode: number;
  _direction: Direction8;
  _pattern: number;
  _priorityType: number;
  _tileId: number;
  _characterName: string;
  _characterIndex: number;
  _isObjectCharacter: boolean;
  _walkAnime: boolean;
  _stepAnime: boolean;
  _directionFix: boolean;
  _through: boolean;
  _transparent: boolean;
  _bushDepth: number;
  _animationId: number;
  _balloonId: number;
  _animationPlaying: boolean;
  _balloonPlaying: boolean;
  _animationCount: number;
  _stopCount: number;
  _jumpCount: number;
  _jumpPeak: number;
  _movementSuccess: boolean;
  initialize(): void;
  initMembers(): void;
  pos(x: number, y: number): boolean;
  posNt(x: number, y: number): boolean;
  moveSpeed(): number;
  setMoveSpeed(moveSpeed: number): void;
  moveFrequency(): number;
  setMoveFrequency(moveFrequency: number): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  blendMode(): number;
  setBlendMode(blendMode: number): void;
  isNormalPriority(): boolean;
  setPriorityType(priorityType: number): void;
  isMoving(): boolean;
  isJumping(): boolean;
  jumpHeight(): number;
  isStopping(): boolean;
  checkStop(threshold: number): boolean;
  resetStopCount(): void;
  realMoveSpeed(): number;
  distancePerFrame(): number;
  isDashing(): boolean;
  isDebugThrough(): boolean;
  straighten(): void;
  reverseDir(d: Direction8): Direction8;
  canPass(x: number, y: number, d: number): boolean;
  canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
  isMapPassable(x: number, y: number, d: any): boolean;
  isCollidedWithCharacters(x: number, y: number): boolean;
  isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithVehicles(x: number, y: number): boolean;
  setPosition(x: number, y: number): void;
  copyPosition(character: {
    _x: number;
    _y: number;
    _realX: number;
    _realY: number;
    _direction: number;
  }): void;
  locate(x: number, y: number): void;
  direction(): Direction8;
  setDirection(d: Direction8): void;
  isTile(): boolean;
  isObjectCharacter(): boolean;
  shiftY(): number;
  scrolledX(): number;
  scrolledY(): number;
  screenX(): number;
  screenY(): number;
  screenZ(): number;
  isNearTheScreen(): boolean;
  update(): void;
  updateStop(): void;
  updateJump(): void;
  updateMove(): void;
  updateAnimation(): void;
  animationWait(): number;
  updateAnimationCount(): void;
  updatePattern(): void;
  maxPattern(): number;
  pattern(): number;
  setPattern(pattern: number): void;
  isOriginalPattern(): boolean;
  resetPattern(): void;
  refreshBushDepth(): void;
  isOnLadder(): boolean;
  isOnBush(): boolean;
  terrainTag(): number;
  regionId(): number;
  increaseSteps(): void;
  tileId(): number;
  characterName(): string;
  characterIndex(): number;
  setImage(characterName: string, characterIndex: number): void;
  setTileImage(tileId: number): void;
  checkEventTriggerTouchFront(d: Direction8): void;
  checkEventTriggerTouch(x: number, y: number): boolean;
  isMovementSucceeded(x: number, y: number): boolean;
  setMovementSuccess(success: boolean): void;
  moveStraight(d: Direction8): void;
  moveDiagonally(horz: number, vert: number): void;
  jump(xPlus: number, yPlus: number): void;
  hasWalkAnime(): boolean;
  setWalkAnime(walkAnime: boolean): void;
  hasStepAnime(): boolean;
  setStepAnime(stepAnime: boolean): void;
  isDirectionFixed(): boolean;
  setDirectionFix(directionFix: boolean): void;
  isThrough(): boolean;
  setThrough(through: boolean): void;
  isTransparent(): boolean;
  bushDepth(): number;
  setTransparent(transparent: boolean): void;
  startAnimation(): void;
  startBalloon(): void;
  isAnimationPlaying(): boolean;
  isBalloonPlaying(): boolean;
  endAnimation(): void;
  endBalloon(): void;
  pattern(): number;
}
