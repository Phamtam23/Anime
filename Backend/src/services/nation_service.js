const {poolPromise}=require("../router/connect");
const { createAnime } = require("./anime_service");

const getNation_service=async()=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL="select * from Nation";
        const result=request.query(SQL);
        return result;
        console.log("succes get nation");
    }
    catch(e)
    {
        console.error("fail ",e);
    }
   

}

const createNation_service=async(name)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`insert into Nation(name_type) values(N'${name}')`;
        await request.query(SQL);
      
        console.log(" create succes");
    }
    catch(e)
    {
        console.error("create faile ",e);
    }
   

}

const updateNation_service=async(name,id)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`update  Nation  set name_type=N'${name}' where id_Nation=${id}`;
        await request.query(SQL);
      
        console.log(" update succes");
    }
    catch(e)
    {
        console.error("update faile ",e);
    }
   

}

const deleteNation_service=async(id)=>{
    try{
        const pool=await poolPromise;
        const request=poolPromise.request();
        const SQL=`delete Nation where id_Nation=${id}`;
        await request.query(SQL);
      
        console.log(" delete succes");
    }
    catch(e)
    {
        console.error("delete faile ",e);
    }
   

}


module.exports={
    getNation_service,createNation_service,updateNation_service,deleteNation_service
}