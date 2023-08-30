import db, { Department, Employee } from './src/model.js';

const legal = await Department.create({
  deptCode: "legal",
  deptName: "Legal",
  phone: "555-2222"
});

const leonard = await Employee.create({
  name: 'Leonard',
  deptCode: 'legal',
  salary: 90000,
});

await legal.save();
await leonard.save();

// const emps = await Employee.findAll();

// find by PRIMARY KEY
// const emp3 = await Employee.findByPk(3);

// find by WHERE
// const mktgEmps = await Employee.findAll({
//   where: { state: 'CA' }
// });

// find by WHERE AND
// await Employee.findAll({
//   where: { deptCode: 'legal', salary: 100000 }
// });

// OTHER METHODS
// - findALL
// - findOne
// - findByPk
// - findOrCreate

// [Op.ne]: 20,                             // != 20
// [Op.is]: null,                           // IS NULL
// [Op.not]: true,                          // IS NOT TRUE
// [Op.or]: [5, 6],                         // 5 OR 6

// // Number comparisons
// [Op.gt]: 6,                              // > 6
// [Op.gte]: 6,                             // >= 6
// [Op.lt]: 10,                             // < 10
// [Op.lte]: 10,                            // <= 10
// [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
// [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

// [Op.in]: [1, 2],                         // IN [1, 2]
// [Op.notIn]: [1, 2],                      // NOT IN [1, 2]
// [Op.like]: '%hat',                       // LIKE '%hat'
// [Op.startsWith]: 'hat',                  // LIKE 'hat%'
// [Op.endsWith]: 'hat',                    // LIKE '%hat'