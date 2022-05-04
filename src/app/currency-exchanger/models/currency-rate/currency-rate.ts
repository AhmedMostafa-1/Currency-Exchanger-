import { Rates } from "./rates";

export interface CurrencyRate {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: Rates;
}
