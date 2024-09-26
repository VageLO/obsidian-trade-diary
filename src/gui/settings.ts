import { Notice, PluginSettingTab, Setting } from "obsidian";

export class SettingsTab extends PluginSettingTab {
    display(): void {
        const { containerEl } = this;
        const plugin = (this as any).plugin;

        containerEl.empty()
        containerEl.createEl("h1", { text: "Settings" });


        new Setting(containerEl)
            .setName("Binance API Key")
            .addText(text => text
                    .setValue(plugin.settings.binanceKey)
                    .onChange((value) => {
                        if (value.trim().length === 0 || value == plugin.settings.binanceKey) {
                           new Notice("Enter binance key"); 
                        } else {
                            plugin.settings.binanceKey = value.trim();        
                        }
                        plugin.saveData(plugin.settings);
                    })
                    .inputEl.type = "password");

        new Setting(containerEl)
            .setName("Binance API Secret")
            .addText(text => text
                    .setValue(plugin.settings.binanceSecret)
                    .onChange((value) => {
                        if (value.trim().length === 0 || value == plugin.settings.binanceSecret) {
                           new Notice("Enter binance secret"); 
                        } else {
                            plugin.settings.binanceSecret = value.trim();        
                        }
                        plugin.saveData(plugin.settings);
                    })
                    .inputEl.type = "password");

    }
}
