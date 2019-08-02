var express=require("express");
var app=express();
var port=3002;
 
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log("Server started at " + port);

app.post('/api/login',function(req,res){

	 var results=[{   
	    title:"java",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:15
	},{
		title:"c++",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:20
	},{
		title:"C",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:15

	},{
		title:"Python",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:35
    },{
		title:"Python",
		instructor:"Krishna",
		level:"Advance",
		total_videos:45

	},{
		title:"C#",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:35

	},{
		title:"flask",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:15
	},{
		title:"nodejs",
		instructor:"Krishna",
		level:"Beginner",
		total_videos:20
	},{
		title:"Java",
		instructor:"Krishna",
		level:"25",
		total_videos:45


	}]; 

	res.json(results);
})
app.get("/math",function(req,res){
	res.sendFile("maths.html");
})






