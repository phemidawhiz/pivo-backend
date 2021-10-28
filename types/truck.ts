export interface BasicTruck {
    id: number,
}

export interface Truck extends BasicTruck {
    name: string,
    description: string,
    datetime: string, //date created
}
