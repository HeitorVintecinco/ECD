window.onload = () => {
let ftr = document.getElementById("ftr");
let hdr= document.getElementById("hdr");
   
    let cor = 0;
    let cor2 = 0;
    let cor3 = 0;
    let c1 = true;
    let c2 = false;
    let c3 = false;
    
 
    function loop() {
       
        hdr.style.boxShadow = `0 0 15px rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        ftr.style.boxShadow = `0 0 15px rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        ftr.style.borderColor = `rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        hdr.style.borderColor = `rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        

        
        if(c1==true){
        cor++;
        cor2++;
        cor3++;
        }
        if(c1==false){
        cor--;
        cor2--;
        cor3--;
        }
        
       
       
        if (cor<=0 ) 
            {
                c1 = true;
               
              
            }
            else if (cor >= 255)
                {
                c1= false
                }
        
      


        setTimeout(loop, 10);
    }


    loop();



  
};
