const jwt=require("jsonwebtoken")
const {poolPromise}=require("../router/api")
const bcrypt=require('bcrypt')
const salthash=4

const createuser_service=async(datauser)=>{
    try{
    const pool=await poolPromise;
    const request=pool.request();
    const newpass=await bcrypt.hash(datauser.password,salthash);
    const SQL=`insert into Account values('${datauser.accountname}','${newpass}','${datauser.usernaem}',1)`
    await request.query(SQL)
    console.log("Create user Succes");
    }
    catch(e)
    {
        console.error("Create user falied :",e);
    }
    
}


const login=async(accountname,password)=>
    {

        try{
            const pool=await poolPromise;
            const request=pool.request();
            const SQL=`select * from anime where accountName=${accountname}`
            const result=await request.query(SQL);
            const user=result.recordset[0];
            if(user)
            {
                console.log("User found:",user)
    
                // check pass
                const isMatch=await bcrypt.compare(password,user.passWord);
                if(!isMatch)
                {
                    return{
                        EC:2,
                        EM:"Name/pass không hợp lệ"
                    }
                }
                else
                {
                    const payload={
                        accountname:user.accountName,
                        username:user.userName
                    }
    
                    const accesstoken=jwt.sign(payload,process.env.JWT_key,process.env.JWT_expire)
    
                    return{
                        EC:1,
                        accesstoken:accesstoken,
                        user:{
                            accountName:user.accountName,
                            userName:user.userName
                        }
                    }
                }
    
              
            }
            else{
                return{
                        EC:0,
                        Em:"User/pass không hợp lệ "
                    }
            }
        }
        catch(e)
            {
                console.error("Error during user_login service ",e)
                return{
                    EC:3,
                    Em:"Sever error"
                }
            }
        
    }




module.exports={
    createuser_service,
    login
}