const jwt=require('jsonwebtoken')
const Anime= require('../object/Anime'); 
const { poolPromise, sql } = require("../router/connect");



const showAnimeall=async()=>
    {
        try
        {
            const pool=await poolPromise;
            const request=pool.request();
            const SQL =`select * from Anime`;
            const result= await request.query(SQL);
            return result;
        }
       catch(e)
       {
        console.error("error all anime :",e)
       }
    }

    
const showAnimeType=async(id_type)=>
{
    try{
       const pool=await poolPromise;
       const request=pool.request();
       const SQL=`select * from Anime where id_type ='${id_type}'`
       const result= await request.query(SQL);
       console.log("show type anime")
       return result;
  
    }
    catch(e)
    {
        console.error("error show type anime :",e)
    }
}


const showAnimehot=async()=>
    {
        try{
            const pool=await poolPromise;
            const request=pool.request();
            const SQL=`select * from anime where day_start in
		    (select distinct top 3 day_strart from Anime order by day_start desc )`
            const result= await request.query(SQL);
            return result;
          
        }
        catch(e)
        {
            console.error("error show type anime :",e)
        }
    }

const showAnimenew=async()=>
        {
            try{
                const pool=await poolPromise;
                const request=pool.request();
                const SQL=`select * from anime where day_start in
		        (select distinct top 3 day_strart from Anime order by day_start desc )`
                const result= await request.query(SQL);
                return result;
            }
            catch(e)
            {
                console.error("error show type anime :",e)
            }
        }
const showAnimelove=async()=>
            {
                try{
                    const pool=await poolPromise;
                    const request=pool.request();
                    const SQL=`select * from anime where number_like in
		(select distinct top 3 number_like from Anime order by number_like desc )`
                  const result= await request.query(SQL);
                 return result;
                }
                catch(e)
                {
                    console.error("error show type anime :",e)
                }
            }

const searchAnime=async(key)=>
            {
                try{
                    const pool=await poolPromise;
                    const request=pool.request();
                    const SQL=`select * from Anime where name like '${key}%'`
                  const result= await request.query(SQL);
                 return result;
                }
                catch(e)
                {
                    console.error("error show type anime :",e)
                }
            }

const createAnime = async (animeData) => {
    try {
        const SQL = `
            INSERT INTO Anime (name, day_start, author, content, status, number_episode, image_inside, image_outside, number_like, number_watch, id_Nation, id_type)
            VALUES (N'${animeData.getname}', '${animeData.day_start}', N'${animeData.author}', N'${animeData.content}', ${animeData.status}, ${animeData.number_episode}, '${animeData.image_inside}', '${animeData.image_outside}', ${animeData.number_like}, ${animeData.number_watch}, ${animeData.id_Nation}, ${animeData.id_type})
        `;
        const pool = await poolPromise;
        const request = pool.request();
        await request.query(SQL);
        console.log("Add anime success");
    } catch (e) {
        console.error("Add anime error", e);
        throw e;
    }
};


const checkID=async(id)=>
{
    try{
        const pool=await poolPromise;
        const request=pool.request();
        const sql=`select * from anime where id_anime=${id}`
        const result=request.query(sql);
        if
        ( result.recordset && result.recordset.length > 0)
        return true;
        else
        return false;
        
    }
    catch(e)
    {
            console.error("lỗi update:",e);
          
    }
}
const updateAnime = async (animeData, id) => {
    try {   
        const SQL = `
        UPDATE Anime 
        SET 
            name = N'${animeData.name}', 
            day_start = '${animeData.day_start}', 
            author = N'${animeData.author}', 
            content = N'${animeData.content}', 
            status = ${animeData.status}, 
            number_episode = ${animeData.number_episode}, 
            image_inside = '${animeData.image_inside}', 
            image_outside = '${animeData.image_outside}', 
            number_like = ${animeData.number_like}, 
            number_watch = ${animeData.number_watch}, 
            id_Nation = ${animeData.id_Nation}, 
            id_type = ${animeData.id_type} 
        WHERE id_anime = ${id}
        `;
        const pool = await poolPromise;
        const request = pool.request();
        await request.query(SQL);
        console.log("Update anime success");
    } catch (e) {
        console.error("Update anime error", e);
        throw e; // Ném lỗi để có thể xử lý ở controller
    }
};


const deleteAnime=async(id)=>{
    try{
        
    const SQL = `delete anime where id_anime=${id}`;
        const pool =await poolPromise;
        const request=pool.request();
        await request.query(SQL)
        console.log("Delete anime succes")
    }
    catch(e)
    {
        console.error("Delete anime eroorr",e)
    }
}

    module.exports={
        showAnimeall,
        showAnimeType,
        showAnimehot,
        showAnimenew,
        showAnimelove,
        searchAnime,
        updateAnime,
        deleteAnime,
        createAnime,
        checkID
    }