
export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: string;
  }[];
}

export interface PlantRecommendation {
  plantName: string;
  reason: string;
  careInstructions: {
    water: string;
    light: string;
    tip: string;
  };
  imageUrl?: string;
}

export enum AppState {
  Welcome,
  Quiz,
  Loading,
  Result,
}
