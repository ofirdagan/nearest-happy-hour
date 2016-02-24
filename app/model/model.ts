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
  public rating: number,
  public phone: string,
  public details: string) {}
}
export class Bar extends BarDto{
  constructor(bar: BarDto,
  public distance: number) {
    super(bar.id, bar.name, bar.imageUrl, bar.location, bar.rating, bar.phone, bar.details);
  }
}