export interface IMango{
    name: string;
    variety: string;
    unit: "KG" | "TON";
    price: Number;
    stock: Number;
    origin: string;
    season: "Summer" | "winter" | "Others";
}