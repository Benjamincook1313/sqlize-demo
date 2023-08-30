// const { Model, DataTypes } = require("sequelize");
// const connectToDB = require("./db");
import { Model, DataTypes } from "sequelize";
import connectToDB from "./db.js";
import url from "url";
import util from "util";

const db = await connectToDB('postgresql:///employees');

export class Employee extends Model {};

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "CA"
    },
    salary: {
      type: DataTypes.INTEGER
    }
  },
  {
    modelName: "employee",
    sequelize: db
  }
);

export class Department extends Model {};

Department.init({
  deptCode: {
    type: DataTypes.STRING(5),
    primaryKey: true,
  },
  deptName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.INTEGER,
  }
},{
  modelName: "department",
  sequelize: db
});

Department.hasMany(Employee, {foreignKey: 'deptCode'});
Employee.belongsTo(Department, { foreignKey: "deptCode"});

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log('Syncing database...');
  await db.sync();
  console.log('Finished syncing database!');
}


