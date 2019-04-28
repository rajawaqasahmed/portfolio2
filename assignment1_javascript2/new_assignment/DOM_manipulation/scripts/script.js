var myCard = document.getElementById('cardDiv');

for (var i = 1; i <= 10; i++) {
   
    if(i%2===0) {
       // even
        myCard.innerHTML += "<div  class='mainDiv__card'><p class='mainDiv__card--text'> This is a test Card for Norrof it is number " + i + "</p> <div id='bar' class='fullBar'><div id='progress' class='progBar' style='width:" + i*10 + "%'></div></div> <p class='mainDiv__card--text'> By Michael</p> <p class='mainDiv__card--textTime'>43 minutes ago</p> <button class='mainDiv__card--button' >View on Site</button></div>";
       }
    else {
       // odd
        myCard.innerHTML += "<div  class='mainDiv__cardGreen'><p class='mainDiv__cardGreen--text'> This is a test Card for Norrof it is number " + i + "</p> <div id='bar' class='fullBar'><div id='progress' class='progBar' style='width:" + i*10 + "%'></div></div><p class='mainDiv__card--text'> By Michael</p> <p class='mainDiv__cardGreen--textTime'>an hour ago</p> <button class='mainDiv__cardGreen--button' >View on Site</button></div>";
       }
    
    

}
document.activeElement

        