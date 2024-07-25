const express=require('express');

const CityController=require('../../controllers/city-Controller');


const router=express.Router();

router.post('/city',CityController.create);




module.exports=router;






