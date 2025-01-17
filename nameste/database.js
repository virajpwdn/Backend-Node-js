const { MongoClient } = require("mongodb");
// const url = 'mongodb://localhost:27017';

const url =
  "mongodb+srv://alphadeveloper:c2zkQ04lrFjRC6F8@cluster0.j7cia.mongodb.net/";

const client = new MongoClient(url);

const dbName = "usersdata";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  const data = [
    {
      firstName: "Deepika",
      city: "Mumbai",
      phoneNum: "98490812948",
    },
    {
      firstName: "Ranveer Singh",
      city: "Mumbai",
      phoneNum: "9809131234",
    },
  ];

  //   const insertResult = await collection.insertMany(data);
  //   console.log("Inserted documents =>", insertResult);
  const update = await collection.updateOne(
    { firstName: "Deepika" }, // Filter to find the document
    { $set: { firstName: "Deepika Padukone" } } // Use $set to update the field
  );
  
  console.log(update);
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    return "done.";
}

main()
  .then(console.log())
  .catch(console.error)
  .finally(() => client.close());
