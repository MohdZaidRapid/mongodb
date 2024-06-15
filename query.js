// find all accounts

db.accounts.find({}).projection({}).sort({ _id: -1 }).limit(100);

// find by client Id
db.accounts
  .find({ clientId: "27809" })
  .projection({})
  .sort({ _id: -1 })
  .limit(3);

// find between dates
db.accounts
  .find({
    "linkedTo.date": {
      $gte: ISODate("2023-06-11"),
      $lte: ISODate("2024-06-11"),
    },
  })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

// find where predefined false or tds false
db.accounts
  .find({ $or: [{ predefined: false }, { tdsApply: false }] })
  .projection({})
  .sort({ _id: -1 })
  .limit(5);

//   find where predefined false or tds false
db.accounts
  .find({ $and: [{ predefined: false }, { tdsApply: false }] })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

// find where type.level :2
db.accounts
  .find({ "type.level": 2 })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

// find where group have Vendor and Diesel
db.accounts
  .find({ $and: [{ group: "Vendor" }, { group: "Diesel" }] })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

// find where tdsApply false or {type.level:1 ,name :"Bhopal"}
db.accounts
  .find({
    $and: [
      { tdsApply: false },
      {
        $or: [{ "type.level": 1 }, { name: "Bhopal" }],
      },
    ],
  })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

//
db.accounts
  .find({
    $and: [
      { tdsApply: false },
      {
        $or: [{ "type.level": 1 }, { billAc: false }],
      },
    ],
  })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);

// find where ancestors does not exists
db.accounts
  .find({ ancestors: { $exists: false } })
  .projection({})
  .sort({ _id: -1 })
  .limit(300);
db.accounts.find({ clientR: [] }).projection({}).sort({ _id: -1 }).limit(300);

// find where "access.0" false means empty array
db.accounts
  .find({ "access.0": { $exists: false } })
  .projection({})
  .sort({ _id: -1 })
  .limit(300);

// doubt
db.accounts.aggregate([
  {
    $match: {
      name: "Balance Sheet",
    },
  },
]);

// find where client id greater than lvl
db.accounts
  .find({ $expr: { $gt: ["$clientId", "$lvl"] } })
  .projection({})
  .sort({ _id: -1 })
  .limit(300);

//

db.accounts
  .find({ $expr: { $gt: ["$lvl", "$accountId"] } }) //lvl >accountID
  .projection({})
  .sort({ _id: -1 })
  .limit(300);

db.accounts
  .find({ name: { $regex: "balance", $options: "i" } })
  .projection({})
  .sort({ _id: -1 })
  .limit(300);

// find group which doesn't contain vendor or Diesel

db.accounts.aggregate([
  {
    $match: {
      group: { $nin: ["Vendor", "Diesel"] },
    },
  },
  { $sort: { _id: -1 } },
  { $limit: 100 },
]);
// db.accounts
//   .find({
//     $expr: {
//       $or: [{ $gt: ["$lvl", "$accountId"] }, { $lt: ["$clientId", 11609] }],
//     },
//   })
//   .projection({})
//   .sort({ _id: -1 })
//   .limit(300);
///////////////////////////////////////////////
db.accounts
  .find({ group: ["Vendor"] })
  .projection({})
  .sort({ _id: -1 })
  .limit(100);
// tempConversionStage = {
//   $addFields: {
//     degrees: { $toDouble: { $substrBytes: ["$temp", 0, 4] } },
//   },
// };
/////////////////////////////////////////////////////
// db.weather.aggregate([tempConversionStage]);
// // 5013+26923

// db.accounts
//   .find({
//     "ancestors.0": { $exists: false },
//   })
//   .projection({})
//   .sort({ _id: -1 })
//   .limit(300);

//   46
// pAN CARD FORMAT
// CERTE1234A

//   db.accounts
//   .find({
//     $and: [
//       { tdsApply: false },
//       {
//         $or: [{ deleted: false }, { billAc: false }],
//       },
//     ],
//   })
//   .projection({})
//   .sort({ _id: -1 })
//   .limit(100);

// db.accounts
//   .find({ commonHistory: { $ne: "kk" } })
//   .projection({})
//   .sort({ _id: -1 })
//   .limit(300);
