window.addEventListener(
    "DOMContentLoaded",
    function()
    {
        const main = document.getElementById( "main");
        for(let i=0;i<5; i++)
        {
            const id = setTimeout ( function(){
                const el = document.createElement("div");
                el.className = "number";
                el.innerHTML = format (i+1);
                main.appendChild(el);
                el.addEventListener("click", function (){
                    el.textContent= format(prompt());   
                })
            }, 1000 *(i+1));
        }
    }
   
);
function format(a){
    return  "this is "+ a+" !!!";

}