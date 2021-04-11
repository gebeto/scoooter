export type Scooter = {
    type: "kiwi" | "ewings",
    id: string | number,
    title: string,
    battery: number,
    location: {
        lat: number,
        lon: number,
    },
};