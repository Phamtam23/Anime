const express =require('express')
const { getanimeall, getanimehot, getanimenew, getanimelove, getanimeType, getanimeSearch, createAnime_controller, updateAnime_controller, deleteAnime_controller } = require('../controller/anime_controller')
const { updateAnime } = require('../services/anime_service')
const { getNation, createNation, updateNation, deleteNation } = require('../controller/nation_controller')
const { getType, createType, updateType, deleteType } = require('../controller/type_controller')
const routerAPI=express.Router()

// Định nghĩa các API

//anime
routerAPI.get('/showAnime',getanimeall)
routerAPI.get('/showHot',getanimehot)
routerAPI.get('/showNew',getanimenew)
routerAPI.get('/showLove',getanimelove)
routerAPI.get('/searchType',getanimeType)
routerAPI.get('/search',getanimeSearch)
routerAPI.post('/createAnime',createAnime_controller)
routerAPI.put('/updateAnime',updateAnime_controller)
routerAPI.delete('/deleteteAnime',deleteAnime_controller)


//Nation
routerAPI.get('/showNation',getNation)
routerAPI.post('/createNation',createNation)
routerAPI.put('/updateNation',updateNation)
routerAPI.delete('/deleteNation',deleteNation)


//Type
routerAPI.get('/showType',getType)
routerAPI.post('/createType',createType)
routerAPI.put('/updateType',updateType)
routerAPI.delete('/deleteType',deleteType)



module.exports={
    routerAPI
}