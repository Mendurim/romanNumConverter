function convertToRoman(num){
	var dualNumSys = {
		M:1000,
		CM:900,
		D:500,
		CD:400,
		C:100,
		XC:90,
		L:50,
		XL:40,
		X:10,
		IX:9,
		V:5,
		IV:4,
		I:1
	}, latin = "", key; 

	for(key in dualNumSys){
		while(num >= dualNumSys[key]){
			latin += key; 
			num -= dualNumSys[key]; 
		}
	}
	return latin; 
}
convertToRoman(36); 