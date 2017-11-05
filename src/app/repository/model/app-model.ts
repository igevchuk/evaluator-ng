export interface IOption {
    id: number;
    selected: boolean;
    description: string;
}

export interface IApplication {
    scope?: number;
    industry?: string;
    name?: string;
    duration?: {
        period?: number,
        startingYear?: number,
        startupYear?: number,
        normalYear?: number,
        reinvest?: boolean
    };
}

export class ApplicationModel implements IApplication {
    //hasLoaded?: false;
    //scope?: 1;
    //industry?: string;
    //name?: string;
    duration?: {
        period?: number,
        startingYear?: number,
        startupYear?: number,
        normalYear?: number,
        reinvest?: boolean
    };
    constructor(
      public hasLoaded?: boolean,
      public scope?: number,
      public industry?: string,
      public name?: string) { }
}
