var lib=[
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true

    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true 
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false

    }]
    
for(var i=0;i<3;i++)
{
    if(lib[i].readingStatus)
    {
    console.log("\nYou Already read "+lib[i].title+" by "+lib[i].author);
    }
    else
    console.log("\nYou still need to read "+lib[i].title+" by "+lib[i].author);
}

