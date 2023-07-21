import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://SalmaQassem:Salma499@cluster0.niqz1uy.mongodb.net/MyWedding?retryWrites=true&w=majority"
    );
    const db = client.db();
    const governoratesCollection = db.collection("Governorates");
    const result = await governoratesCollection.find().toArray();
    client.close();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
}

export default handler;
