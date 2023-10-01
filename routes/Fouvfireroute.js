const express=require('express');
const fov=express.Router();

const{getall,getones,POST,updates,deletes}=require('../controllers/fovcontorler')
fov.get('/',getall)
fov.get('/:id',getones)
fov.post('/',POST)
fov.put('/:',updates)
fov.delete('/:',deletes)


module.exports=fov