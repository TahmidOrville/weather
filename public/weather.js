
document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault();
    const addr= document.getElementById("txt").value;

    fetch('http://localhost:3000/weather?address='+addr)
    .then(res=>{
       res.json().then(data=>{
           if (data.error) {
               document.getElementById("lineo").innerText=data.error;
           }
           else{
            document.getElementById("lineo").innerText=data.location;
            document.getElementById("linet").innerText=data.forecast;

              console.log(data.location);
              console.log(data.forecast);
      
           }
      
          })
    })
   
    

})



 
 