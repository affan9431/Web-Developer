add = document.getElementById("add");
        add.addEventListener("click",()=>{
            console.log("Updating List...");
            tit = document.getElementById("title").value;
            desc = document.getElementById("description").value;
            if(localStorage.getItem("itemJson")==null){
                itemJsonArray = [];
                itemJsonArray.push([tit,desc])
                localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

            }
            else{
                itemJsonArrayStr = localStorage.getItem('itemJson');
                itemJsonArrayStr = JSON.parse(itemJsonArrayStr);
                tit = document.getElementById("title").value;
                desc = document.getElementById("description").value;
                itemJsonArray.push([tit,desc])
                localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
            }
            // Populate the table
           let tableBody=document.getElementById('tableBody').value;
            let str="";
            itemJsonArray.array.forEach(element => {



            });
        });
document.getElementById('del').addEventListener('click',()=>{
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    localStorage.removeItem('itemJson');
})        