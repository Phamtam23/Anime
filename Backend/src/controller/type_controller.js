const { getType_service, createType_service, updateType_service, deleteType_service } = require("../services/type_service");


const getType=async(req,res)=>{
    try{
        const data=await getType_service();
            res.status(200).json(
                {
                    message:"Get type",
                    data:data
                }
                );
    }
    catch(e)
    {
        res.status(400).send("Lỗi",e);
    }
    
}

const createType=async(req,res)=>{
    try{
        const name=req.body.name_type;
        await createType_service(name)
        res.status(200).json({
            message:"Create type succes",
            Ec:1

        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Create type failed",
            error:e.message

        })
    }
    
}

const updateType=async(req,res)=>{
    try{
        const id=req.body.id_type;
        const name=req.body.name_type;
        const data=await updateType_service(name,id)
        res.status(200).json({
            message:"Update type success",
            Ec:1
        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Update type failed",
            error:e.message
        })
    }
    
}


const deleteType=async(req,res)=>{
    try{
        const id=req.body.id_type;
        const data=await deleteType_service();
        res.status(200).json({
            message:"Delete Type success",
            Ec:1
        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Delete type failed",
            error:e.message
        })
    }
    
}

module.exports={
   getType,createType,updateType,deleteType
}