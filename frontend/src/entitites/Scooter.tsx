export enum ScooterType {
    kiwi = "kiwi",
    ewings = "ewings",
}

export type Scooter = {
    type: ScooterType,
    id: string | number,
    title: string,
    battery: number,
    location: {
        lat: number,
        lon: number,
    },
};