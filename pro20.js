var num=1
for(var i=0;i<5;i++)
{
    var row="";
    for(var j=0;j<i;j++)
    {
        row=row+num+' ';
        num++;
    }
    console.log(row);

}