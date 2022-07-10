type Test = {
  id:string,
  name:string,
  create_at:string,
}

export default function hello(req, res) {;
  const sqlite3 = require('sqlite3');
  const db = new sqlite3.Database('./test.db');
  const result = new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`select * from Test`, (err, tests) => {
          if (err) return reject(err)
          return resolve(tests)
      })
      db.close();
    })
  })
  result.then((responsetest) => {
      res.status(200).json(responsetest);
    }
  )
}
