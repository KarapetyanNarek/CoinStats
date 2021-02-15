import PouchDB from "pouchdb";

export default async function handler(req, res) {
    let db = new PouchDB('favoriteCoins');
    const favorites = await db.allDocs();
    res.status(200).json(favorites);
}
