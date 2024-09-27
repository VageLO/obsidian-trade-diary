import { ITable } from 'src/types/table' 

export const orderTable = (el: HTMLElement) => {
    const data: ITable[] = [{
        stock: "Stock",
        typeOrder: "long",
        entryPrice: 123,
        exitPrice: 125,
    }]
    
    makeTable(el, data);
}

const makeTable = (el: HTMLElement, data: ITable[]) => {
    const table = el.createEl("table")
    const thead = table.createEl("thead")
    const tbody = table.createEl("tbody")

    data.forEach(obj => {
        const trhead = thead.createEl("tr")
        const trbody = tbody.createEl("tr")
        Object.entries(obj).forEach(([key, value]) => {
            trhead.createEl("td", { text: key.toUpperCase() });
            trbody.createEl("td", { text: value });
        })
    })
}
