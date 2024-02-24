const Pool = require ('../Connect/db')
exports.read = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await Pool.connect();
        const result = await client.query('SELECT * FROM public.users WHERE user_id = $1', [id]);
        const users = result.rows;
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server มีปัญหาอยู่เด้อ');
    } 
    
}

exports.list = async (req, res) => {
    try {
        const client = await Pool.connect();
        const result = await client.query('SELECT * FROM public.users ORDER BY user_id ASC');
        const users = result.rows;
        client.release();
        res.json(users);
    }
    catch {
        console.log(err)
        res.status(500).send('Server มีปัญหาอยู่เด้อ')
    }
}

exports.adddata = async (req, res) => {
    try {
        const { username, email,password  } = req.body; 
        const client = await Pool.connect();
        const result = await client.query('INSERT INTO public.users (username, email,password) VALUES ($1, $2, $3) RETURNING *', [username, email,password]);
        const newUser = result.rows[0]; 
        client.release();
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('มีปัญหาในการเพิ่มข้อมูลใหม่');
    }
}


exports.editdata = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const id = req.params.id; 
        const client = await Pool.connect();
        const result = await client.query('UPDATE public.users SET username = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *', [username, email, password, id]);
        const updatedUser = result.rows[0]; 
        client.release();
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('มีปัญหาในการอัปเดตข้อมูล');
    }
    
}

exports.dledata = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await Pool.connect();
        const result = await client.query('DELETE FROM public.users WHERE user_id = $1 RETURNING *', [id]);
        const deletedUser = result.rows[0]; 
        client.release();
        res.json(deletedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('มีปัญหาในการลบข้อมูล');
    }
    
}