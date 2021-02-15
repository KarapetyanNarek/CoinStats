import PouchDB from "pouchdb";

export default async function handler(req, res) {
  let db = new PouchDB("favoriteCoins");
  switch (req.method) {
    case "DELETE":
      await db.remove({
        _id: req.query.id,
        _rev: JSON.parse(req.body).value.rev,
      });
      res.status(200).json({});
      break;
    case "PUT":
      await db.put({ _id: req.query.id });
      res.status(200).json({});
      break;
  }
}
