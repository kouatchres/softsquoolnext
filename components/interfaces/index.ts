// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type StateImage = {
  image: string;
};

export type Region = {
  regName: string;
  regCode: string;
};

export type ProviderValues = {
  clientID: string;
  clientSecret: string;
};

export interface IOptions {
  value: string | undefined;
  label: string | undefined;
}

export interface ISection {
  id: string | undefined;
  sectionName: string | undefined;
}
