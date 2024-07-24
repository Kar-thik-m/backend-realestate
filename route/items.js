import express  from "express";
import { items } from "../model/items.js";
import { v4 } from "uuid";
const itemRouter=express.Router();




itemRouter.post("/create",async(req,res)=>{
   
    try{
     
     const item=new items({...req.body,id:v4()});
     await item.save();
         res.send({msg:' created '});
     }catch(err){
         console.log(err);
         res.status(500).send({msg:'Error in creating'})
     }
     });


     itemRouter.get('/getall', async (req, res) => {
        try {
          
          const products = await items.find({});
          res.json(products);
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error' });
        }
      });


      
      


     export default itemRouter;