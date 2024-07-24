const express=require('express');
const bodyParser=require('body-parser');






const {PORT}=require('./config/serverConfig');

const CityRepository=require('./repository/city-repo');




const setUpServer=async()=>{


    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // const repo = new CityRepository();

    // try {
    //     await repo.createCity({ name: "New Delhi" });

    //     console.log('City created successfully');
    // } catch (error) {
    //     console.error('Error creating city:', error);
    // }


    app.listen(PORT,async ()=>{
        console.log(`Server is running on Port  ${PORT}`);
       
        
    });

}





setUpServer();