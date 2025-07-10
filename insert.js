const dbConnect =require('./dbConnect');

const insert =async ()=>{
    const db =await dbConnect();
    // const result =await db.insertOne(
    //     {
    //         name:'Reno 10 5G', Brand:'Oppo', Price:39999
    //     }
    // );


    // insert many

    const result =await db.insertMany([
        {
            name:'Reno 10 5G', Brand:'Oppo', Price:39999
        },
        {
            name:'Nord 5 5G', Brand:'Oneplus', Price:49999
        }
    ]
    );
}


insert();