var sidenav=document.querySelector(".side-navbar")

function shownavbar(){
     sidenav.style.left="0"   //for navbar transition it comes -40% to 0 so the black screen willbe appear
}

function closenavbar(){
sidenav.style.left="-40%"  // again the blackscreen(navbar) will disappear
}



