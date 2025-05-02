import { RowID, RowElement } from 'interface.ts';

declare function insertRow (row: RowElement): number

declare function updateRow(id: RowID, row: RowElement): RowID

declare function deleteRow(id: RowID): void