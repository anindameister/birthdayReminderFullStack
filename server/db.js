const Pool=require("pg").Pool;

const pool=new Pool({
    user: "postgres",
    password: "@Ninda17071988",
    host: "localhost",
    port:5432,
    database: "birthdayreminder"
})

module.exports=pool;