const {poolPromise}=require("../router/connect");
const { createAnime } = require("./anime_service");

const getType_service=async()=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL="select * from Type_anime";
        const result=request.query(SQL);
        console.log("succes get type");
        return result;
       
    }
    catch(e)
    {
        console.error("failed ",e);
    }

}
const createType_service=async(name)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`insert into Type_anime(name_type) values(N'${name}')`;
        await request.query(SQL);
      
        console.log(" create type succes");
    }
    catch(e)
    {
        console.error("create faile ",e);
    }
   

}

const updateType_service=async(name,id)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`update Type_anime set name_type=N'${name}' where id_type=${id}`;
        await request.query(SQL);
      
        console.log(" update type succes");
    }
    catch(e)
    {
        console.error("update type faile ",e);
    }

}

const deleteType_service=async(id)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`delete Type_anime where id_type=${id}`;
        await request.query(SQL);
      
        console.log(" delete succes");
    }
    catch(e)
    {
        console.error("delete faile ",e);
    }
   

}


module.exports={
    getType_service,createType_service,updateType_service,deleteType_service
}