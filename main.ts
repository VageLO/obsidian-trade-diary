import { Plugin } from 'obsidian';
import { getDailyNote, createDailyNote, getAllDailyNotes } from 'obsidian-daily-notes-interface';

export default class TradeDiaryObsidian extends Plugin {
    async onload() {
    	const file = getDailyNote(moment() as any, getAllDailyNotes());
    
    	if (!file) {
    		console.log(await createDailyNote(moment() as any))
    	}
    }
}
