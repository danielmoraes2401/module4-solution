(function(window){
var names = ["Daniel", "Caio", "Elisa", "Fernanda", "Cleiton", "Frank","Mariana", "Jaime","Jota"];
for(var i=0;i<names.length;i++){
	var firstLetter = names[i].charAt(0).toLowerCase();
if(firstLetter==="j"){
	byespeaker.speak(names[i]);
}else{
	hellospeaker.speak(names[i]);
}
};

})(window);