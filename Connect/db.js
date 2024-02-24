const { Pool } = require('pg');

try {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Memu',
        password: '0982043946Cola', 
        port: 5432, 

    });
 console.log('เชื่อม database ได้เเล้ว !!!');
    module.exports = pool;
} catch (error) {
    console.error('Error creating PostgreSQL pool:', error);
    console.log('Failed to connect to the PostgreSQL database');
}
