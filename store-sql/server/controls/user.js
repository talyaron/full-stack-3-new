const pool = require('./db');

const login = (req, res) => {

    const { username, password } = req.body;
   

    try {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            
            //search for a username in the databse

            connection.query(`SELECT username, password FROM sql_store.users WHERE username = '${username}'`, (error, result, fields) => {
                if (error) throw error;
                if(result.length === 0){
                    res.send({ error: 'No such username' });
                    
                } else {
                    const user = result[0];
                    if(user.password == password){
                        res.send({success:true});
                    } else {
                        res.send({success:false, error:'Inncorect password'})
                    }
                }
                connection.release();
               
            })

        })


    } catch (err) {
        console.log('Error:', err)
        res.send({ error: err })
    }
}

const register = (req, res) => {

    const { username, password, email } = req.body;
   

    try {
        pool.getConnection( (err, connection) => {
            if (err) throw err;

            //first, check if user allready exist

            connection.query(`SELECT username FROM sql_store.users WHERE username = '${username}'`, (error, result, fields) => {
                if (error) throw error;

                //If user don't exist, add to DB

                if (!result.length) {
                    connection.query(`INSERT INTO users (username, password, email) VALUE ('${username}', '${password}','${email}'); `, (error, result, fields) => {
                        if (error) {
                            res.send({success:false, error })
                            
                        } else {
                            res.send({ success:true, results: 'user added to DB' });
                           
                        }
                        connection.release();
                    })

                } else {

                    connection.release();
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