var names=new Array();
names[0]="Shiv";
names[1]=sachin";
names[2]="Akshat";
names[3]="Satyam";
names[4]="paul";
names[5]="Amrit";
names[6]="saurav";
names[7]="Nishant";
names[8]="Prashant";
names[9]="Rajiv";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='S'|| names[i].charAt(0)==='s'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}