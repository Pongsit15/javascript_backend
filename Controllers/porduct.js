exports.read = async (req, res) => {
    try {
        res.send('read:สวัสดีคาฟฟู่วววว~~~~')
     }
     catch {
         console.log(err)
         res.status(500).send('Server.list มีปัญหาอยู่เด้อ')
     } 
}

exports.list = async (req, res) => {
    try {
       res.send('สวัสดีคาฟฟู่วววว~~~~')
    }
    catch {
        console.log(err)
        res.status(500).send('Server.list มีปัญหาอยู่เด้อ')
    }
}

exports.adddata = async (req, res) => {
    try {
       res.send('สวัสดีคาฟฟู่วววว~~~~')
    }
    catch {
        console.log(err)
        res.status(500).send('Server.adddata มีปัญหาอยู่เด้อ')
    }
}

exports.editdata = async (req, res) => {
    try {
       res.send('สวัสดีคาฟฟู่วววว~~~~')
    }
    catch {
        console.log(err)
        res.status(500).send('Server.editdata มีปัญหาอยู่เด้อ')
    }
}

exports.dledata = async (req, res) => {
    try {
       res.send('สวัสดีคาฟฟู่วววว~~~~')
    }
    catch {
        console.log(err)
        res.status(500).send('Server.dledata มีปัญหาอยู่เด้อ')
    }
}