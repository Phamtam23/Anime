const { getNation_service, createNation_service, updateNation_service } = require("../services/nation_service")


const getNation=async(req,res)=>{
    try{
        const data=await getNation_service();
            res.status(200).json(
                {
                    message:"Get Nation",
                    data:data
                }
                );
    }
    catch(e)
    {
        res.status(400).send("Lỗi",e);
    }
    
}

const createNation=async(req,res)=>{
    try{
        const name=req.body.name_nation;
        await createNation_service(name)
        res.status(200).json({
            message:"Create nation succes",
            Ec:1

        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Create nation failed",
            error:e.message

        })
    }
    
}

const updateNation=async(req,res)=>{
    try{
        const id=req.body.id_nation;
        const name=req.body.name_nation;
        const data=await updateNation_service(name,id)
        res.status(200).json({
            message:"Update Nation success",
            Ec:1
        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Update Nation failed",
            error:e.message
        })
    }
    
}


const deleteNation=async(req,res)=>{
    try{
        const id=req.body.id_nation;
        const data=await deleteNation(id)
        res.status(200).json({
            message:"Delete Nation success",
            Ec:1
        })
    }
    catch(e)
    {
        res.status(400).json({
            message:"Delete Nation failed",
            error:e.message
        })
    }
    
}

module.exports={
    getNation,createNation,updateNation,deleteNation
}