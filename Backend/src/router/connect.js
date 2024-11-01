const sql=require('mssql')

const config ={
    user:'sa',
    password:'123456789',
    server:'localhost',
    database:'db_webanime',
    options:{
        encrypt:false,
        trustServerCertificate:true
    }
}
const poolPromise=sql.connect(config)
    .then(pool=>{
        if(pool.connected)
            console.log("Succes connect")
        return pool 
    })
    .catch(err=>{
        console.error("Error connect error:",err)
    });
        

module.exports={
    poolPromise,
    sql
}



   

