//your JS code here. If required.
const daysOfAYear = () =>
	{
		let y = prompt("enter year");
		if(y%4==0 y%100 != 0)
		{
			console.log(366);
		}
		else {
			console.log(365);
		}
	}
