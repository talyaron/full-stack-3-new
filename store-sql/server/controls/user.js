const pool = require('./db');

const login = (req, res) => {

    const { username, password } = req.body;
    console.log(`......${username}, ${password}..........`)

    try {
        pool.getConnection((err, connection) => {
            if (err) throw err;

            connection.query(`INSERT INTO users (username, password) VALUE ('${username}', '${password}'); `, (error, result, fields) => {
                if (error) throw error;

                res.send({ results: result });
            })

        })


    } catch (err) {
        console.log('Error:', err)
        res.send({ error: err })
    }
}

const register = (req, res) => {

    const { username, password, email } = req.body;
    console.log(`......${username}, ${password}..........`)

    try {
        pool.getConnection( (err, connection) => {
            if (err) throw err;

            connection.query(`SELECT username FROM sql_store.users WHERE username = '${username}'`, (error, result, fields) => {
                if (error) throw error;

                if (!result.length) {
                    connection.query(`INSERT INTO users (username, password, email) VALUE ('${username}', '${password}','${email}'); `, (error, result, fields) => {
                        if (error) {
                            res.send({ error })
                            
                        } else {
                            res.send({ results: 'user added to DB' });
                           
                        }

                        
                    })

                } else {
                    res.send({ error: 'User allredy exists' });
                    
                }
                
            })
        })


    } catch (err) {
        console.log('Error:', err)
        res.send({ error: err })
    }
}

module.exports = { login, register }