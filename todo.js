
//this will create a delete button for other remaining list before the clicking functions list
var node_list= document.getElementsByTagName("li");
for(i=0;i<node_list.length;i++){
    var deletebutton = document.createElement("button");
    var deletebuttontext = document.createTextNode("Delete");
     deletebutton.className="del";
     deletebutton.appendChild(deletebuttontext);
     node_list[i].appendChild(deletebutton); 
}


// this will create the Check button for other reamining lists before he clicking functions list
var check_list=document.getElementsByTagName("li");
for(i=0;i<check_list.length;i++){
    var checkbutton= document.createElement("button");
    var checkbuttontext = document.createTextNode("Check");
    checkbutton.className="checked";
    checkbutton.appendChild(checkbuttontext);
    check_list[i].appendChild(checkbutton);
}

//this is for deleting a list
var closelist= document.getElementsByClassName("del");
for(i=0;i<closelist.length;i++){
    closelist[i].onclick= function(){
        var hide= this.parentElement;
    hide.style.display="none";
    }
}

//this for checking the task
var checking_the_list= document.getElementsByClassName("checked");
for(i=0;i<checking_the_list.length;i++){
    checking_the_list[i].onclick=function(){
        var strickedout = this.parentElement;
        strickedout.style.textDecoration="line-through";
        strickedout.style.color="blue";
        strickedout.style.textDecorationColor="black";
    }
}



document.getElementById("addbutton").addEventListener("click",addtodolist);
function addtodolist(){
    
    //1.when ever we click "ADD"button a list of"LI" will created inside the ol
   var li= document.createElement("li");
   var inputvalue = document.getElementById("textid").value;
   var textinput= document.createTextNode(inputvalue);
   li.appendChild(textinput);
   if(inputvalue=="")
   {
    //    when ever if we miss writing and clic to add button then the li should not be created
    //    so for that purpose we keep a condition and then it will show a alert warning box to etner a task in input box
       alert("Write some task in the input box!");
   }
   else{
       document.getElementById("mylist").appendChild(li); //here a li will be get created in "ol" by appending method
       document.getElementById("textid").value=""; //after adding a enter list the textbox need to get empty so here we clear the value of input box
   }

    //3.now we create a check button to a list
    var check_list= document.getElementsByTagName("li");
    var checkbutton= document.createElement("button");
    var checkbuttontext = document.createTextNode("Check");
    checkbutton.className="checked";
    checkbutton.appendChild(checkbuttontext);
    check_list[i++].appendChild(checkbutton);

           //now we can check/strick out the finished work of the list exteranlly added
           var checking_the_list= document.getElementsByClassName("checked");
           for(i=0;i<checking_the_list.length;i++){
               checking_the_list[i].onclick=function(){
                   var strickedout = this.parentElement;
                   strickedout.style.textDecoration="line-through";
                   strickedout.style.color="blue";
                   strickedout.style.textDecorationColor="black";
               }
           }
      i--;

    //    2.now we create a delete button to list 
   var node_list = document.getElementsByTagName("li");
   var deletebutton = document.createElement("button");
   var deletebuttontext = document.createTextNode("Delete");
    deletebutton.className="del";
    deletebutton.appendChild(deletebuttontext);
    node_list[i++].appendChild(deletebutton); 
    

     


//     //now we can delete a list of which we added 
    var closelist= document.getElementsByClassName("del");
for(i=0;i<closelist.length;i++){
    closelist[i].onclick= function(){
        var hide= this.parentElement;
    hide.style.display="none";
    }
}

 
        

}

