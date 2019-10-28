/*=============================
===========VARIABLES============
==============================*/

        /****MODAL****/
        var c_modal_btn = document.getElementById("center-modal-btn");
        var b_modal_btn = document.getElementById("bottom-modal-btn");
        
        var top_modal=document.getElementById("center-modal");
        var bottom_modal=document.getElementById("bottom-modal");
        
        var span=document.getElementById("close");
        
        /****SNACKBAR****/
        var snackbar=document.getElementById("snackbar");
        var snackbar_btn=document.getElementById("snackbar-btn");
        
        /****OVERLAY****/
        var overlay_btn=document.getElementById("overlay-btn");
        var overlay=document.getElementById("overlay");
        
        
/*=============================
===========FUNCTIONS===========
==============================*/

        overlay_btn.onclick=function(){
            overlay.style.display="block";
        }        

        //TRIGGER UPON CLICKING  LINKTRIGGER ID
        c_modal_btn.onclick = function(){
            top_modal.style.display="block";
        
        }
        
        span.onclick=function(){
            top_modal.style.display="none";
        }
        
        b_modal_btn.onclick = function(){
            bottom_modal.style.display="block";    
        }
        
        /***********
        SNACKBAR
        ************/
        
        snackbar_btn.onclick=function(){
            snackbar.className="show";
            
            setTimeout(function(){snackbar.className=snackbar.className.replace("show", "");}, 3000);
        }
        
        /***********
        EXITING-MODAL-OVERLAY
        ************/
        
        window.onclick=function(event){
            if(event.target==top_modal){
                top_modal.style.display="none";
            }
            
            else if(event.target==bottom_modal){
                bottom_modal.style.display="none";
            }
            
            if(event.target==overlay){
                overlay.style.display="none";
            }
        }