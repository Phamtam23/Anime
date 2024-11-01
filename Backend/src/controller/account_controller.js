const { User } = require("../object/User");
const { createuser_service, login } = require("../services/user_service");


const create_account=async(req,res)=>
{
    try{
        const {accountName,passWord,userName,role}=req.body;
        const dataUser=new User(accountName,passWord,userName,role)
        const data =await createuser_service(dataUser)
        res.status(200).send("Create succes")
    }
    catch(e)
    {
        console.error("Error create user:",e);
        return res.status(500).send()
    }

    
}

const handlogin=async(req,res)=>{
    try{
    const {accountNameName,passWord}=req.body;
    const data=await login(accountNameName,passWord);
    res.status(200).json(data)
    }
    catch(e)
    {
        res.status(500).send('An error occer')
    }
    
}

