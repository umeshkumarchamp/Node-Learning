// https://stackoverflow.com/questions/39592908/error-getaddrinfo-enotfound-registry-npmjs-org-registry-npmjs-org443

const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'school',
    password : 'root',
    port : 5432,
});

const createUser = (req, res) => {
    const {fullname, email, address} = req.body;
    pool.query('INSERT INTO users (fullname, email, address) VALUES ($1, $2, $3) RETURNING *',[fullname, email, address],(err, result) => {
        if(err) {
            console.log(err);
            throw err;
        }
        res.status(200).json({
            message : "Record Inserted Successfully",
            data : result.rows[0],
        })
    });
}

const getUsers = (req, res) => {
    pool.query('SELECT * FROM public.users ORDER BY id ASC ',(err, result) => {
        if(err) {
            console.log(err);
            throw err;
        }
        res.json({
            data : result.rows
        })
    })
}

module.exports = {
    createUser , getUsers
}
