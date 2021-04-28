export enum ScooterService {
    ewings = "ewings",
    kiwi = "kiwi",
    bolt = "bolt",
}


export enum ScooterType {
    scooter = "scooter",
}

export type Scooter = {
    service: ScooterService,
    type: ScooterType,
    id: string | number,
    title: string,
    battery: number,
    location: {
        lat: number,
        lon: number,
    },
};