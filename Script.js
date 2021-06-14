var names = new Array();
names[0]="yakkov";
names[1]="jason";
names[2]="vivek";
names[3]="sonu";
names[4]="raj";
names[5]="maxwell";
names[6]="jhon";
names[7]="Jimmy";
names[8]="dev";
names[9]="ricky";
for( var i =0; i<names.length; i++)
{
if(names[i].charAt(0)==="j"){    
console.log("Good bye "+ names[i]);
}
else{
console.log("Hello "+ names[i]);    
}
}