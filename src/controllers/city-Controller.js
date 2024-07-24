const {CityService}=require('../services/index');


const cityService=new CityService();



const create= async (req,res)=>{

    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"SuccessFully created a city",
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a City',
            err:error
        })
    }

}





const destroy= async (req,res)=>{

    try{

        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"SuccessFully deleted a city",
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete  a City',
            err:error
        })
    }

}

const get= async (req,res)=>{

    try{

        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"SuccessFully fetched a city",
            err:{}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get  a City',
            err:error
        })
    }

}


const update= async(req,res)=>{

    try{

        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"SuccessFully updated  a city",
            err:{}
        });

    }
    catch(error){
       
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update  a City',
            err:error
        })
    }

}

module.exports={
    create,
    destroy,
    get,
    update
}



