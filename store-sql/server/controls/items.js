const pool = require('./db');

const addItem = (req, res) => {

    
    const {item_name, item_cat_number, item_price, item_gender } = req.body;
   

    try {
        pool.getConnection( (err, connection) => {
            if (err) throw err;

            //first, check if user allready exist

            connection.query(`SELECT item_cat_number FROM items WHERE  item_cat_number = '${item_cat_number}'`, (error, result, fields) => {
                if (error) throw error;

                //If user don't exist, add to DB

                if (result.length === 0) {
                    connection.query(`INSERT INTO items (item_name, item_cat_number, item_price,item_gender) VALUE ('${item_name}','${item_cat_number}', ${item_price},'${item_gender}'); `, (error, result, fields) => {
                        if (error) {
                            res.send({success:false, error })
                            
                        } else {
                            res.send({ success:true, results: 'item added to DB' });
                           
                        }
                        connection.release();
                    })

                } else {

                    connection.release();
                    res.send({ error: 'Item allredy exists' });
                    
                }
                
            })
        })


    } catch (err) {
        console.log('Error:', err)
        res.send({ error: err })
    }
}

module.exports = {
    addItem
}