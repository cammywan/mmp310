var slides = [
	{
		image: "1.jpg",
		caption: "The most photogenic award goes to..."
	},
	{	
		image: "2.jpg",
		caption: "Woof Woof - Good Boy Airlines."
	},
	{
		image: "3.jpg",
		caption: "Only pack the essentials."
	},
	{
		image: "4.jpg",
		caption: "When you have no idea what is going on, but still trying to help."
	},
	{
		image: "5.jpg",
		caption: "It tickles!"
	},
	{
		image: "6.jpg",
		caption: "This is a risk I am willing to take."
	},
	{
		image: "7.jpg",
		caption: "Sorry, Finnish president, your dog is cuter than you."
	},
	{
		image: "8.jpg",
		caption: "Waiting on my luggage."
	},
	{
		image: "9.jpg",
		caption: "When your parents try to skype for the first time."
	},
	{
		image: "10.jpg",
		caption: "Nirvana - Nevermind (1991)"
	},
	{
		image: "11.jpg",
		caption: "When you lie on your job application, but get the job anyway."
	},
	{
		image: "12.jpg",
		caption: "How to turn a bad situation into a good one."
	}
];

var title = document.createElement("h1");
var author = document.createElement("h2");
title.textContent="A Dozen Dog Memes to Lighten Your Day.";
author.textContent="Cammy Wan";
document.body.appendChild(title);
document.body.appendChild(author);


for (var i = 0; i < slides.length; i++) {
	// get a reference to each slide in the array
	var s = slides[i];
	var slide = document.createElement("div");
	var image = new Image();
	var caption = document.createElement("p");
    var page = document.createElement("h3");
	image.src = s.image;
	caption.textContent = s.caption;
    page.textContent = i+1;
    slide.appendChild(page);
	slide.appendChild(image);
	slide.appendChild(caption);
	document.body.appendChild(slide);
}