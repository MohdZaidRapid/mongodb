const workbook = new ExcelJS.Workbook();

workbook.creator = "Ng Wai Foong";
workbook.lastModifiedBy = "Bot";
workbook.created = new Date(2021, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2021, 7, 27);

const worksheet = workbook.addWorksheet("New Sheet");

// const worksheet = workbook.addWorksheet('New Sheet', {properties:{tabColor:{argb:'FFC0000'}}});

// // hide grid lines
// const worksheet = workbook.addWorksheet('New Sheet', {views: [{showGridLines: false}]});

// // freeze first row and column
// const worksheet = workbook.addWorksheet('New Sheet', {views:[{state: 'frozen', xSplit: 1, ySplit:1}]});

// // pageSetup settings for A4 - landscape
// const worksheet =  workbook.addWorksheet('New Sheet', {
//   pageSetup:{paperSize: 9, orientation:'landscape'}
// });

// headers and footers
// const worksheet = workbook.addWorksheet('New Sheet', {
//   headerFooter: {oddFooter: "Page &P of &N";, oddHeader: 'Odd Page'}
// });

worksheet.headerFooter.oddFooter = "Page &P of &N";

worksheet.autoFilter = "A1:C1";

worksheet.columns = [
  { header: "Id", key: "id" },
  { header: "Name", key: "name" },
  { header: "Age", key: "age" },
];
const idCol = worksheet.getColumn("id");
const nameCol = worksheet.getColumn("B");
const ageCol = worksheet.getColumn(3);

// iterate on cell
ageCol.eachCell(function (cell, rowNumber) {});

// iterate on empty cells
dobCol.eachCell({ includeEmpty: true }, function (cell, rowNumber) {});

// adding new row using array
const row = worksheet.addRow([2, "Kaneki", 22]);


