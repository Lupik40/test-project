interface IPokemonType {
  type: { name: any };
}
export interface IPokemonItem {
  id: number;
  name: string;
  sprites: { other: { dream_world: { front_default: string } } };
  types: IPokemonType[];
  height: number;
  weight: number;
}
