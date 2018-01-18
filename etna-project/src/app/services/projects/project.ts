export class Project {
  private _name: string;
  private _level: number;
  private _difficulty: number;
  private _language: string;
  private _score: number;

  constructor (name: string, level: number, difficulty: number, language: string, score: number) {
    this._name = name;
    this._level = level;
    this._difficulty = difficulty;
    this._language = language;
    this._score = score;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get level(): number {
    return this._level;
  }

  set level(level: number) {
    this._level = level;
  }

  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(difficulty: number) {
    this._difficulty = difficulty;
  }

  get language(): string {
    return this._language;
  }

  set language(language: string) {
    this._language = language;
  }

  get score(): number {
    return this._score;
  }

  set score(score: number) {
    this._score = score;
  }
}
