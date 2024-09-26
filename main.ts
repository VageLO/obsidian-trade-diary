import { Plugin } from 'obsidian';
import { getDailyNote, createDailyNote, getAllDailyNotes } from 'obsidian-daily-notes-interface';
import { ISettings } from 'src/types/settings';
import { SettingsTab } from 'src/gui/settings';
import { BinanceService } from 'src/binance';

export default class TradeDiaryObsidian extends Plugin {
    private settings: ISettings
    private binance: BinanceService

    async onload() {
        this.settings = await this.loadData() || this.getDefaultSettings()
        this.binance = new BinanceService(this.settings)
        this.addSettingTab(new SettingsTab(this.app, this)); 

        this.addCommand({
			id: 'get-orders',
			name: 'Get orders from binance',
			checkCallback: (checking: boolean) => {
			    this.binance.getOrders()
			    return true;
			}
		});
    }

    async onunload() {
        await this.saveData(this.settings);
    }

    private getDefaultSettings(): ISettings {
        return {
            binanceKey: "",
            binanceSecret: ""
        };
    }
}
