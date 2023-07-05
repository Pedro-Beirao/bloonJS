const bloonUtils = require('../utils/utils.js');
const mysql = require('mysql2/promise');
const config = bloonUtils.getConfig();

const sp_banInsert = async(banedUserDiscordId, banReason, handledByDiscordId) => {
    try{
        const query = `CALL ban_insert(?, ?, ?)`;
    
        const connection = await createConnection();

        const [rows] = await connection.execute(query, [banedUserDiscordId, banReason, handledByDiscordId]);

        return parseInt(rows[0][0]['LAST_INSERT_ID()']); // Awfull, but eh.

    }catch(error){
        console.error("Error in sp_banInsert: ", error);
        return 0;
    }
}

const createConnection = async () => {
    return await mysql.createConnection({
        host: config.mysqlHost,
        user: config.mysqlUser,
        password: config.mysqlPass,
        database: config.mysqlDDBB
    });
}

const execSP = (query) => {
    const connection = createConnection();

    connection.connect(function(err) {
        if (err) {
            //return console.error('SQL connection error: ' + err.message);
            return false;
        }
    
        //console.log('Connected to SQL!');
    
        connection.query(query, function (err, result, fields) {
            if (err) {
                //console.error("SQL query error: ", err);
                return false;
            };

            console.log("SQL RESULT: ", result);
            
            /* CLOSE CONECTION */
            connection.end(function(err) {
                if (err) {
                    //return console.log('SQL connection end error:' + err.message);
                    return false;
                }
                //console.log('Closed the database connection!');
                return true;
            });
        });
    });
}


module.exports = {
    sp_banInsert
}