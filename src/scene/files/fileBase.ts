export interface FileSceneInterface {
  mode(): string;
  needsAutosave(): boolean;
  activateListWindow(): void;
  helpWindowText(): string;
  firstSavefileId(): number;
  onSavefileOk(): void;
  savefileId(): number;
  isSavefileEnabled(savefileId: number): boolean;
}
