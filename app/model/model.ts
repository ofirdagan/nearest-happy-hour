export interface Location {
  latitude: number,
  longitude: number
}

export class BarDto {
  constructor(
  public name: string,
  public imageUrl: string,
  public location: Location,
  public rating: number) {}
}
export class Bar extends BarDto{
  constructor(
  public name: string,
  public imageUrl: string,
  public location: Location,
  public rating: number,
  public distance: number) {
    super(name, imageUrl, location, rating);
  }
}