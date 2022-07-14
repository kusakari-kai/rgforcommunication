import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    const nowtime = new Date();
    const datetime = nowtime.getFullYear()
    + "/" + (nowtime.getMonth() + 1).toString().padStart(2, '0')
    + "/" + nowtime.getDate().toString().padStart(2, '0')
		+ " " +	nowtime.getHours().toString().padStart(2, '0')
    + ":" + nowtime.getMinutes().toString().padStart(2, '0')
    + ":" + nowtime.getSeconds().toString().padStart(2, '0');
    switch (method) {
      case 'POST': {
        const { name } = req.body;
        const sqlite3 = require("sqlite3");
        const db = new sqlite3.Database("./test.db");
        const result = db.run("insert into Test(id, name, create_at) values(?,?,?)", uuidv4(), name, datetime);
        res.status(200).json({ result });
        break;
      }
      default: {
        res.status(403).end();
      }
    }
}