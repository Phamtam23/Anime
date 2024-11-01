const { showAnimeall, showAnimehot, showAnimenew,searchAnime, showAnimelove, showAnimeType, updateAnime, deleteAnime, createAnime, checkID } = require("../services/anime_service")
const Anime= require('../object/Anime');  
const getanimeall=async(req,res)=>{
    try
    {
        const data=await showAnimeall();
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', error);
        res.status(505).send("An error :",e)
    }
}

const getanimehot=async(req,res)=>{
    try
    {
        const data=await showAnimehot();
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', error);
        res.status(505).send("An error :",e)
    }
}

const getanimenew=async(req,res)=>{
    try
    {
        const data=await showAnimenew();
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', error);
        res.status(505).send("An error :",e)
    }
}

const getanimelove=async(req,res)=>{
    try
    {
        const data=await showAnimelove();
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', error);
        res.status(505).send("An error :",e)
    }
}


const getanimeType=async(req,res)=>{
    try
    {
        const id_type=req.query.key
        const data=await showAnimeType(id_type);
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', error);
        res.status(505).send("An error :",e)
    }
}

const getanimeSearch=async(req,res)=>{
    try
    {
        const key=req.query.key;
        const data=await searchAnime(key);
        if(!data)
        {
            return res.status(404).send("Not anime found");
        }
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.error('Error occurred:', e);
        res.status(505).send("An error :",e)
    }
}



const createAnime_controller = async (req, res) => {
    try {
        const animeData = new Anime(
            req.body.name,         
            req.body.day_start,
            req.body.author,
            req.body.content,
            req.body.status,
            req.body.number_episode,
            req.body.image_inside,
            req.body.image_outside,
            req.body.number_like,
            req.body.number_watch,
            req.body.id_Nation,
            req.body.id_type
        );
        await createAnime(animeData);
        res.status(200).json({
            message:"Create Anime succes",
            Ec:1
        })
    } catch (e) {
        console.error('Error occurred:', e);
        res.status(500).json({
            message:"Create Anime failed",
            error:e.error
        })
    }
};



const updateAnime_controller = async (req, res) => {
    try {
        const id = req.body.id; // Lấy ID từ req.body

        // Kiểm tra ID có tồn tại không
        const idExists = await checkID(id);
        if (idExists==false) {
            return res.status(404).json({
                message:"Không có Anime đó",
                Ec:2
            })}
        const animeData = new Anime(
            req.body.name,         
            req.body.day_start,
            req.body.author,
            req.body.content,
            req.body.status,
            req.body.number_episode,
            req.body.image_inside,
            req.body.image_outside,
            req.body.number_like,
            req.body.number_watch,
            req.body.id_Nation,
            req.body.id_type
        );

        await updateAnime(animeData, id); // Gọi hàm updateAnime
        res.status(200).json({
            message:"Update Anime succes",
            Ec:1
        })
    } catch (e) {
        console.error('Error occurred:', e);
        res.status(500).json({
            message:"Update Anime failed",
            error:e.error
        })
    }
};


const deleteAnime_controller=async(req,res)=>{
    try{
        const id=req.query.id;
        await deleteAnime(id);
        res.status(200).json(
            {
                message:"Delete Anime succes",
                Ec:1
            }
        )
    }
    catch(e)
    {
        console.error('Error occurred:', e);
        res.status(500).send("Delete anime succes")
    }
   
}



module.exports={
    getanimeall,
    getanimehot,
    getanimelove,
    getanimenew,
    getanimeType,
    getanimeSearch,
    createAnime_controller,
    updateAnime_controller,
    deleteAnime_controller
}