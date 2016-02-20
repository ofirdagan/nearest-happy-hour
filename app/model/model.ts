export interface Location {
  latitude: number,
  longitude: number
}

export class BarDto {
  constructor(
  public id: string,
  public name: string,
  public imageUrl: string,
  public location: Location,
  public rating: number) {}
}
export class Bar extends BarDto{
  constructor(
  public id: string,
  public name: string,
  public imageUrl: string,
  public location: Location,
  public rating: number,
  public distance: number) {
    super(id, name, imageUrl, location, rating);
  }
}