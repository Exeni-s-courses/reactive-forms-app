export interface Country {
  name: NamedCurve;
  cca3: string;
  borders: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}
