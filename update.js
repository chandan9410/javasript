const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'max 5'},
        {
            $set:{name:'max pro 5', price:9410120}
        }
        )
    console.log(result)

}

updateData();