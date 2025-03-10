import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data = await fs.promises.readdir('contactdata');

      fs.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body), ()=>{});

      res.status(200).json(["Yahoo! post api created"]);
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allBlogs"]);
    }
  }