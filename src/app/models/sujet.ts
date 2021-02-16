export class Sujet {
  private _titre: string;
  private _description: string;
  private _choix: string;
  private _uerId: string;

  constructor(titre: string, description: string) {
    this._titre = titre;
    this._description = description;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get choix(): string {
    return this._choix;
  }

  set choix(value: string) {
    this._choix = value;
  }

  get uerId(): string {
    return this._uerId;
  }

  set uerId(value: string) {
    this._uerId = value;
  }
}
