// http://localhost:3000/api/blogs
import * as fs from 'fs';

export default function handler(req, res) {
    fs.readdir('blogData', "utf-8", (err, data)=>{
        res.status(200).json(data)
    })
}