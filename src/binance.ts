import { MainClient } from 'binance';
import { ISettings } from 'src/types/settings';

export class BinanceService {

    constructor(settings: ISettings) {
        this.client = new MainClient({
                api_key: settings.binanceKey,
                api_secret: settings.binanceSecret,
        });
        this.settings = settings;
    }

    public getOrders() {
        this.client
            .getAllOrders({ symbol: 'BTCUSDT' })
            .then((result) => {
                console.log("Result: ", result);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
        this.client
            .getAccountTradeList({ symbol: 'BTCUSDT' })
            .then((result) => {
                console.log('getAccountTradeList result: ', result);
            })
            .catch((err) => {
                console.error('getAccountTradeList error: ', err);
            });
    }

}
