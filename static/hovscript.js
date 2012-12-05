
function ShowPopup(hoveritem)
{
    if (hoveritem.id == "hoveroverContactInfo") {
	hp = document.getElementById("hoverpopupContactInfo")
} else if (hoveritem.id == "hoveroverEdInfo") {
	hp = document.getElementById("hoverpopupEdInfo");
	 };
	hp.style.top = hoveritem.offsetTop + 20;
	hp.style.left = hoveritem.offsetLeft + 300;

	hp.style.visibility = "Visible";
}

function HidePopup(hoveritem)
{

	    if (hoveritem.id == "hoveroverContactInfo") {
		hp = document.getElementById("hoverpopupContactInfo")
	} else if (hoveritem.id == "hoveroverEdInfo") {
		hp = document.getElementById("hoverpopupEdInfo");
		 };

	//hp = document.getElementById("hoverpopup");
	hp.style.visibility = 'Hidden';
}
