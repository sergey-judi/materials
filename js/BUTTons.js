function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

var navButt = document.getElementsByClassName("button-bg");
var list = document.getElementsByClassName("list-wrapper");
var temp = document.getElementsByClassName("temp");
var navButtonPressed = [false, false, false, false, false];
for (let i = 0; i < 5; i++) {

	navButt[i].addEventListener("click", async () =>
	{
		if (navButtonPressed[i]) {
			navButt[i].style.height = "100%"; 
			navButt[i].style.top = "50%";

			
			//list[i].style.visibility = "hidden";
			//list[i].style.height = "0";	
			//list[i].style.top = "100%";			
			
			navButtonPressed[i] = false;
		}
		else {
			navButt[i].style.height = "calc(100% - 120px)"; 
			navButt[i].style.top = "10%";
			navButt[i].style.height = "20%";

			//list[i].style.top = "60%";	
			//list[i].style.height = "80%";
			//await sleep(400);	
			//list[i].style.visibility = "visible";	

			navButtonPressed[i] = true;
		}
	});
}
