let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click",async () =>{
    let lest = document.querySelector("#list");
    lest.innerText = "";
    let country = document.querySelector("input").value;
    
    let result = await getcolleges(country);
    console.log(result)
    showh(result);
    

})

function showh(result){
    let list = document.querySelector("#list")
    for(h of result){
        let li = document.createElement("li");
        console.log(result.name)
        li.innerText = h.name;
        list.appendChild(li)
        
    }

}

async function getcolleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log(e); 
    }
}