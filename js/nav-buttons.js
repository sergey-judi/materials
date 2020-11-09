function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

var navButton = document.getElementsByClassName("button-bg");
var list = document.getElementsByClassName("list-wrapper");
var navButtonPressed = [false, false, false, false, false];
for (let i = 0; i < 5; i++) 
{

	navButton[i].addEventListener("click", async () =>
	{
		if (navButtonPressed[i]) 
		{
			navButton[i].style.height = '100%'; 
			navButton[i].style.top = '50%';
			navButtonPressed[i] = false;
		}
		else 
		{
			navButtonPressed[i] = true;
			navButton[i].style.top = '10%';
			navButton[i].style.height = '20%';
		}
	});
}

/*
for (let i = 0; i < 5; i++) 
{
	navButton[i].onmouseover = function()
	{
		let width = navButton[i].offsetWidth;
		let height = navButton[i].offsetHeight;
		this.style.width = "107%";
		this.style.height = height.toString() + "px";
	}
	navButton[i].onmouseout = function()
	{
		let width = navButton[i].offsetWidth;
		let height = navButton[i].offsetHeight;
		this.style.width = '100%';
		this.style.height = height.toString() + "px";
	}
}
*/