const fs = require('fs')
const DB = './DB.json'
const ReadData = (db=DB)=>{
    let Users
    try{Users = JSON.parse(fs.readFileSync(db))}
    catch(e){Users = []}
    return Users
}
const WriteData = (data, db=DB)=>{
    fs.writeFileSync(db, JSON.stringify(data))
}

class User{
    static home = (req, res)=>{
        let users = ReadData()
        res.render('home', {pageTitle:"Add User", users})
    }
    static view = (req, res)=>{
        let user = ReadData().find(user=>user.id==req.params.id)
        res.render('view', {pageTitle:"Add User", user})
    }
    static togelStatus = (req, res)=>{
        let users = ReadData()
        let status = users[users.findIndex(user=>user.id==req.params.id)].status
        users[users.findIndex(user=>user.id==req.params.id)].status = ! status
        WriteData(users)
        res.redirect('/')
    }
    static add = (req, res)=>{
        res.render('add', {pageTitle:"Add User"})
    }
    static addPost = (req, res)=>{
        let tasks = ReadData()
        let data = {id:Date.now() , ...req.body}
        data['status'] = data['status']=='on' ? true:false
        tasks.push(data)
        console.log(tasks)
        WriteData(tasks)
        res.redirect('/')
    }
    static edit = (req, res)=>{
        let user = ReadData().find(user=>user.id==req.params.id)
        res.render('edit', {pageTitle:"Edit User", user})
    }
    static editPost = (req, res)=>{
        let users = ReadData()
        users[users.findIndex(user=>user.id==req.params.id)].name = req.body.name
        users[users.findIndex(user=>user.id==req.params.id)].age = req.body.age
        console.log(req.body)
        WriteData(users)
        res.redirect('/')
    }
    static delete = (req, res)=>{
        let users = ReadData()
        users.splice(users.findIndex(user=>user.id==req.params.id),1)
        WriteData(users)
        res.redirect('/')
    }
}

module.exports = User