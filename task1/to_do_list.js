let input;
let list=0

while (input !== "q")
{
    if (input == "new")
  {
      input = prompt("enter new to do");
  }
  
  if (input == "list")
  {
    for (let j = 0; j < 10;j++)
    {
      console.log(list[j]);
    }
     input = prompt("What do you like to have?");
  } 
     list[0] = input;
    for (let i = 0; i < 100; i++)
    {
      if (list[0] != 0)
      {
        if (list[i] == undefined)
       {
         list[i] = input;
         break;
       }
      }
    
   } 
 
}
