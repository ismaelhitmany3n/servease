/*=============================
===========VARIABLES============
==============================*/

        //When the user scrolls the page, execute sticknav
        window.onscroll=function(){stickynav()};

        var navbar=document.getElementById("navbar");
        var sticky=navbar.offsetTop;

/*=============================
===========FUNCTIONS===========
==============================*/

        
        function stickynav(){
       
            if (window.pageYOffset >= sticky ){
                //Will ADD/TRIGGER CLASS STICKY to ID NAVBAR
                navbar.classList.add("sticky");
                }
            else{
                navbar.classList.remove("sticky");
                }
        }