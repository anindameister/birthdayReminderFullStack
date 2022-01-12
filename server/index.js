const express= require("express")
const app= express()

app.listen(5000,()=>{
    console.log("server has started on port 5000")
})

//middleware
const cors=require("cors")
app.use(cors())
app.use(express.json()) //req.body
//database part
const pool=require("./db")

//Routes

//CREATE a birthday reminder
app.post("/birthdayReminder",async(req,res)=>{
    try {
        // console.log(req.body)
        const {name}=req.body
        const {age}=req.body
        const newbirthdayReminder = await pool.query(
            "INSERT INTO birthdayReminderTable (name,age) VALUES($1,$2) RETURNING *",
            [name,age]
          );
      
          res.json(newbirthdayReminder.rows[0]);
        
        
    } catch (err) {
        console.error(err.message)
        
    }

})

//get all birthday reminder

app.get("/birthdayReminder", async (req, res) => {
    try {
      const allBirthdays = await pool.query("SELECT * FROM birthdayReminderTable");
      res.json(allBirthdays.rows);
    } catch (error) {
      console.error(error.message);
    }
  });

//get a birthday reminder

app.get("/birthdayReminder/:name",async(req,res)=>{
    try {
        // console.log(req.params)
        const { name } = req.params;
        const birthdays = await pool.query("SELECT * FROM birthdayReminderTable WHERE name = $1", [
            name
      ]);
  
      res.json(birthdays.rows[0]);
    } catch (error) {
        console.log(error.message)
        
    }
})

//update a birthday reminder in terms of multiple parameters like name and age

// PUT is a method of modifying resource where the client sends data that updates the entire resource . 
// PATCH is a method of modifying resources 
// where the client sends partial data that is to be updated without modifying the entire data

app.put("/birthdayReminder/:birthdayReminderTable_id", async (req, res) => {
    try {
      const { birthdayReminderTable_id } = req.params;

      const {name}=req.body
      const {age}=req.body
    
      const updateBirthday = await pool.query(
        "UPDATE birthdayReminderTable SET name=$1,age=$2 WHERE birthdayReminderTable_id = $3 RETURNING *",
        [name, age, birthdayReminderTable_id]
        
      );
  
      res.json("Name of the person has been updated");
    } catch (err) {
      console.error(err.message);
    }
  });

//delete a birthday reminder

app.delete("/birthdayReminder/:birthdayReminderTable_id", async (req, res) => {
    try {
        const { birthdayReminderTable_id } = req.params;

        const deleteBirthday = await pool.query("DELETE FROM birthdayReminderTable WHERE birthdayReminderTable_id = $1", [
            birthdayReminderTable_id
      ]);
      res.json("Birthday have been deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



