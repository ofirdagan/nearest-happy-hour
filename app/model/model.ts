export interface Location {
  latitude: number,
  longitude: number
}

export interface Bar {
  name: string,
  imageUrl: string,
  location: Location,
  rating: number
}