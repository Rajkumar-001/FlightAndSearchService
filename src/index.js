const express=require('express');


const {PORT}=require('./config/serverConfig');


const setUpServer=async()=>{
    const app=express();

    app.listen(PORT,()=>{
        console.log(`Server is running on Port  ${PORT}`);
        
    });

}


setUpServer();