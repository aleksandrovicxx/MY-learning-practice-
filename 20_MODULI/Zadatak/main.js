/*import { generalList, generateItem as generateListItem } from "./modules/list.js";
import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

let ul = generalList(document.body)
generateListItem(ul, "images/slikaa1.png")
generateListItem(ul, "images/slikaa2.png")
generateListItem(ul, "images/slikaa3.png")

let table = generateTable(document.body)
let tr = generateTableRow(table)
generateTableItem(tr, `images/slikaa1.png`)
generateTableItem(tr, `images/slikaa2.png`)
generateTableItem(tr, `images/slikaa3.png`)*/


import * as List from "./modules/list.js"
import * as Table from "./modules/table.js"

let ul = List.generalList(document.body)
List.generateItem(ul, "images/slikaa1.png")
List.generateItem(ul, "images/slikaa2.png")
List.generateItem(ul, "images/slikaa3.png")

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table)
Table.generateItem(tr, `images/slikaa1.png`)
Table.generateItem(tr, `images/slikaa2.png`)
Table.generateItem(tr, `images/slikaa3.png`)