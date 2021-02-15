import PouchDB from "pouchdb";
import { path } from "src/db";

export default async function handler(req, res) {
  let db = new PouchDB(path);
  const favorites = await db.allDocs();
  res.status(200).json(favorites);
}
