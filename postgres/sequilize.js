import {Sequelize} from 'sequelize'
import config from './config/config.js'


const sequelize=new Sequelize(config.development);

(async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connected to postgres")
    }catch(error){
        console.error("Unable to connect to postgres",error)
    }
})();

export default sequelize;