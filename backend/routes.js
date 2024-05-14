const express = require('express');
const getrouter = express.Router()


getrouter.post('POST', async (req,res)=>{
    try{
        const {firstCount, secondCount} = req.body
        const newCount = new timer_counts({
            firstCount,
            secondCount
        })
        await newCount.save()
        res.status(200).json({ "new count added": newCount });

    }catch(error){
        console.log(error.message, "POST error")
        res.status(500).json({ error: "Internal Server Error" });
    }
})

getrouter.get('GET', async (rea,res)=>{
    try {
        const details = await timer_counts.find();
    
        console.log("Retrieved details:", details);
    
        if (details.length === 0) {
          return res.status(404).json({ message: "No details found" });
        }
    
        res.status(200).json(details);
      } catch (err) {
        console.error(err, "GET error");
        res.status(500).json({ error: "Internal Server Error" });
      }
})