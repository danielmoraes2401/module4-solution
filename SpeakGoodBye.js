(function(window){
var byespeaker={};
var speakword="Good Bye";
byespeaker.speak=function(names){
	console.log(speakword+" "+names);
}
window.byespeaker=byespeaker;
})(window);

