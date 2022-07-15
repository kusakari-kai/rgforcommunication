import { NextApiRequest, NextApiResponse } from "next";

type User = {
  id:string,
  name:string,
  create_at:string, 
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    switch (method) {
      case 'PUT': {
        const value = req.url.substring(12);
        const { name } = req.body;
        const sqlite3 = require("sqlite3");
        const db = new sqlite3.Database("./test.db");
        const check = new Promise((resolve, reject) => {
          db.serialize(() => {
            db.all(`select * from Test where id = ?`, value , (err, tests) => {
                if (err) return reject(err)
                return resolve(tests)
            })
            db.close();
          })
        })

        check.then((selectRes:User[]) => {
          if(res != undefined) {
            const check = new Promise((resolve, reject) => {
              const sqlite3 = require("sqlite3");      
              const db = new sqlite3.Database("./test.db");
              db.serialize(() => {
                db.run(`UPDATE Test set name = ? where id = ?`, name , selectRes[0].id , (err, tests) => {
                    if (err) return reject(err)
                    return resolve(tests)
                })
                db.close();
              })
            });
          } else {
            res.status(404).json({})
          }
        }).then(deleteRes => 
          res.status(200).json({})
        );
        break;
      }
      default: {
        res.status(403).end();
      }
    }
}