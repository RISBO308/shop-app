import { ExecOptionsWithStringEncoding } from "child_process";

export interface Product{
    id: number;
    name: string;
    description: string;
    soldprice: number

    regularprice: number;
    price: number;
    image: string;
}