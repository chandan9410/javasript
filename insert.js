
const dbConnect = require('./mongodb');
const insert = async () =>{
    const db =  await dbConnect();
     const  result = await db.insertOne(
        
        {
            name : 'mac book',
            brand : 'apple',
            price : 90000
        }
    
     );
     if(result.acknowledged)
     {
         console.warn("data is inserted")
     }
};
insert();

/*
const dbConnect = require('./mongodb');

async function insertData() {
    try {
        const collection = await dbConnect(); // Connect to the collection
        const result = await collection.insertOne({
            name: 'New Product',
            price: 100,
            description: 'This is a new product'
            // Add more fields as needed
        });
        console.log('Inserted new product:', result.insertedId);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}
*/
// insertData();
