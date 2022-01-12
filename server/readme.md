#### `npm init`
- that is going to track all our packages in the application and after running this command, we are gonna answer few questions.

#### `npm i express pg cors`
- `express` allows us to quickly create a server in nodejs
- `cors` allows different domain applications to interact with each other
    - Eg: server running at 5000 and client running at 3000
- `pg` is there to connect our database to server, in order to write postgres queries

#### `notepad index.js`
- `touch index.js` works for linux and the above works for windows

#### `node index` or `nodemon index` => which would do live updates
```
const express= require("express")
const app= express()

app.listen(5000,()=>{
    console.log("server has started on port 5000")
})
```
#### `npm install -g nodemon` only if nodemon doesn't work

#### `powershell-says-execution-of-scripts-is-disabled-on-this-system`
```
x64 (64 bit)
Open C:\Windows\system32\cmd.exe
Run the command powershell Set-ExecutionPolicy RemoteSigned
https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system
```

#### `middleware`
```
//middleware
const cors=require("cors")
app.use(cors())
```
#### starting with database with the code editor
```
CREATE DATABASE birthdayReminder;

-- PRIMARY KEY- this id would make this unique from others
-- SERIAL increases the primary key and creates another unique

CREATE TABLE birthdayReminderTable(
    birthdayReminderTable_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)

)
```

#### install postgresql
- https://www.youtube.com/watch?v=RAFZleZYxsc

#### starting with postgres in terminal
- https://www.youtube.com/watch?v=0EBkVzIBnoc
- you have got to add the environment variables

#### passwords
- https://dashboard.blaze.today/folder/DIMKgaLmegvqRhfpJe9i
- we automatically have this user named postgres, which is a super admin

#### working with the postgresql database
- `\l` - shows all the databases
- `ctrl+c`- to get out and go to the terminal starting point to enter command
- `CREATE DATABASE birthdayReminder;` - to create a database named birthdayReminder
- again `\l` to check and confirm the creation of the database named birthdayReminder
- `\c birthdayreminder` - to get connected to the database
- `\dt`- to check for tables within the connected database named birthdayreminder
- we put the below command below to create out table named `birthdayReminderTable` within our database named `birthdayreminder`, just to make sure that we have put `;` perfectly orelse we'll keep getting errors
```
CREATE TABLE birthdayReminderTable(
    birthdayReminderTable_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)

);
```
- again `\dt` to check the contents of the database in form of table
- `db.js`
- `database name` cannot be `birthdayReminder` and instead it has got to be `birthdayreminder`
```
const Pool=require("pg").Pool;

const pool=new Pool({
    user: "postgress",
    password: "@Ninda17071988",
    host: "localhost",
    port:5432,
    database: "birthdayreminder"
})

module.exports=pool;
```
#### additional database part with `index.js`
```
const pool=require("./db")
```
#### basic idea of `Routes`

```
//CREATE a birthday reminder

//get all birthday reminder

//get a birthday reminder

//update a birthday reminder
```

#### inserting values in table from database
```
INSERT INTO birthdayReminderTable(birthdayremindertable_id, description)
VALUES (1,'checking');
```

#### error while inserting values from the backend
- `app.use(express.json()) //req.body` this was not there inside the backend


