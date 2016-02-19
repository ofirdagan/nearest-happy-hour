export interface Location {
  latitude: number,
  longitude: number
}

export interface BarDto {
  name: string;
  imageUrl: string;
  location: Location;
  rating: number;
}
export class Bar implements BarDto{
  constructor(
  public name: string,
  public imageUrl: string,
  public location: Location,
  public rating: number,
  public distance: number) {}
}