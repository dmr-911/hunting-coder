// http://localhost:3000/api/blogs
import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogData");
    let myFile ;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        // const element = array[index];
        myFile = await fs.promises.readFile(`blogData/${data[index]}`, "utf-8")
        allBlogs.push(JSON.parse(myFile))
    }
    res.status(200).json(allBlogs);
}