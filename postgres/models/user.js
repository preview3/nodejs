import { DataTypes } from "sequelize";
import sequelize  from "../sequilize.js";

const user=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

sequelize.sync().then(()=>{
    console.log("User table created successfully")
}).catch((error)=>{
    console.error("Unable to create table",error)
})

export default user;