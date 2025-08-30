// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
	"https://weddingring.nekoweb.org/",
	"https://dreamvalley.nekoweb.org/",
	"https://sana.arataka.moe/",
	"https://candyflossunicorn.neocities.org/",
	"https://zhongvie.neocities.org/",
	"https://mrszenigata.nekoweb.org/",
	"https://spettri.neocities.org/home",
	"https://melody-nomas.neocities.org/",
];

//the name of the ring
var ringName = "Yumejoshi Ring";

/* the unique ID of the widget. two things to note:
     1) make sure there are no spaces in it - use dashes or underscores if you must
     2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = "weddingring";

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = "https://weddingring.nekoweb.org/";

//should the widget include a random button?
var useRandom = true;

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
	if (thisSite.startsWith(sites[i])) {
		//we use startswith so this will match any subdirectory, users can put the widget on multiple pages
		thisIndex = i;
		break; //when we've found the site, we don't need to search any more, so stop the loop
	}
}

function randomSite() {
	otherSites = sites.slice(); //create a copy of the sites list
	otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
	randomIndex = Math.floor(Math.random() * otherSites.length);
	location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
	tag.insertAdjacentHTML(
		"afterbegin",
		`
<style>
@font-face {
	font-family: "Rainy Hearts";
	src: url(https://files.catbox.moe/r4oudq.ttf) format(truetype);
}

#weddingring {
	margin: 0 auto;
	padding: 10px; /* creates some space around the widget */
	color: rgb(173, 96, 100);
	background-image: linear-gradient(to bottom, #fff9f9, #f7dae1);
	background-size: cover;
	height: fit-content;
	width: 300px;
	margin: 5px auto; /* centers the widget */
	padding: 10px; /* creates some space between the links and text inside the widget */
	border-radius: 15px;
	font-size: 15px;
}
h2 {
	font-size: 90%;
	text-align: center;
	margin: 0;
	margin-bottom: 4px;
	font-family: "MS Gothic";
	text-shadow:
		-1px -1px 0 #fff,
		1px -1px 0 #fff,
		-1px 1px 0 #fff,
		1px 1px 0 #fff;
}

.title {
	letter-spacing: 1px;
}
.title a {
	text-decoration: none;
	color: inherit;
	text-shadow: inherit;
	transition-duration: 0.4s;
}
.title a:hover {
	letter-spacing: 5px;
}

.mainbox1 {
	columns: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}

.mainbox2 {
	columns: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
}

.yume-icon {
	width: fit-content !important;
	margin: 0 auto;
	padding: 6px;
}
.yume-icon img {
	filter: brightness(130%) saturate(60%);
}

.yume-icon2 {
	margin: 0 auto;
	padding: 6px;
	text-align: center;
	transition: all 0.5s;
}
.yume-icon2 img {
	transition: all 0.7s;
	transition: 0.7s ease;
	-webkit-mask-image: url(https://dl.dropbox.com/s/2kih8ox9q2czjeg/pngfind.com-kawaii-transparent-png-621355.png);
	-webkit-mask-size: 100%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	width: 95px;
}
.yume-icon2 img:hover {
	transition: all 0.7s;
	border-radius: 15px;
	-webkit-mask-image: url(https://dl.dropbox.com/s/2kih8ox9q2czjeg/pngfind.com-kawaii-transparent-png-621355.png);
	-webkit-mask-size: 220%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.yume-desc {
	border-width: 10px;
	border-style: solid;
	border-image: url("https://weddingring.nekoweb.org/onionring/laceborder.gif") 8 fill round;
	background-clip: padding-box;
	background-color: #fff3f6;
	padding: 9px;
	margin-top: 5px;
	font-family: "MS Gothic";
	height: 70px;
}
.yume-desc p {
	font-weight: bold;
	font-size: 82%;
}

.yume-links {
	padding: 2px;
	margin-top: px;
	text-align: center;
}

.yume-links a {
	color: inherit;
	font-family: "MS PGothic";
	font-weight: bold;
}

/* index css? if it works? */

#index {
	width: auto;
	height: auto;
	margin: 10px;
}
</style>
<div>
<div class='title'>
<a href="https://weddingring.nekoweb.org"><h2>${ringName}</h2></a>
</div>

<div class='mainbox1'>
<div class='yume-icon'>
<img src=https://weddingring.nekoweb.org/onionring/tomoheart.gif width='70px'/>
</div>

<div class='yume-desc'>

<span style='text-shadow: -1px -1px 0 #ffd0d0, 1px -1px 0 #ffd0d0,
          -1px 1px 0 #ffd0d0, 1px 1px 0 #ffd0d0; '>
Looks like you're not in yet...
<br>Try refreshing the page or contact the owner of the Wedding Ring.
</span>

</div>
</div>

</div>

  `,
	);
} else {
	//find the 'next' and 'previous' sites in the ring. this code looks complex
	//because it's using a shorthand version of an if-else statement to make sure
	//the first and last sites in the ring join together correctly
	previousIndex = thisIndex - 1 < 0 ? sites.length - 1 : thisIndex - 1;
	nextIndex = thisIndex + 1 >= sites.length ? 0 : thisIndex + 1;

	indexText = "";
	//if you've chosen to include an index, this builds the link to that
	if (useIndex) {
		indexText = `<a href='${indexPage}'>about</a> `;
	}

	randomText = "";
	//if you've chosen to include a random button, this builds the link that does that
	if (useRandom) {
		randomText = `<a href='javascript:void(0)' onclick='randomSite()'>| randomize!</a> `;
	}

	//this is the code that displays the widget - EDIT THIS if you want to change the structure
	tag.insertAdjacentHTML(
		"afterbegin",
		`
    <style>
    @font-face {
	font-family: "Rainy Hearts";
	src: url(https://files.catbox.moe/r4oudq.ttf) format(truetype);
}

#weddingring {
	margin: 0 auto;
	padding: 10px; /* creates some space around the widget */
	color: rgb(173, 96, 100);
	background-image: linear-gradient(to bottom, #fff9f9, #f7dae1);
	background-size: cover;
	height: fit-content;
	width: 300px;
	margin: 5px auto; /* centers the widget */
	padding: 10px; /* creates some space between the links and text inside the widget */
	border-radius: 15px;
	font-size: 15px;
}
h2 {
	font-size: 90%;
	text-align: center;
	margin: 0;
	margin-bottom: 4px;
	font-family: "MS Gothic";
	text-shadow:
		-1px -1px 0 #fff,
		1px -1px 0 #fff,
		-1px 1px 0 #fff,
		1px 1px 0 #fff;
}

.title {
	letter-spacing: 1px;
}
.title a {
	text-decoration: none;
	color: inherit;
	text-shadow: inherit;
	transition-duration: 0.4s;
}
.title a:hover {
	letter-spacing: 5px;
}

.mainbox1 {
	columns: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}

.mainbox2 {
	columns: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
}

.yume-icon {
	width: fit-content !important;
	margin: 0 auto;
	padding: 6px;
}
.yume-icon img {
	filter: brightness(130%) saturate(60%);
}

.yume-icon2 {
	margin: 0 auto;
	padding: 6px;
	text-align: center;
	transition: all 0.5s;
}
.yume-icon2 img {
	transition: all 0.7s;
	transition: 0.7s ease;
	-webkit-mask-image: url(https://dl.dropbox.com/s/2kih8ox9q2czjeg/pngfind.com-kawaii-transparent-png-621355.png);
	-webkit-mask-size: 100%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	width: 95px;
}
.yume-icon2 img:hover {
	transition: all 0.7s;
	border-radius: 15px;
	-webkit-mask-image: url(https://dl.dropbox.com/s/2kih8ox9q2czjeg/pngfind.com-kawaii-transparent-png-621355.png);
	-webkit-mask-size: 220%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
}

.yume-desc {
	border-width: 10px;
	border-style: solid;
	border-image: url("https://weddingring.nekoweb.org/onionring/laceborder.gif") 8 fill round;
	background-clip: padding-box;
	background-color: #fff3f6;
	padding: 9px;
	margin-top: 5px;
	font-family: "MS Gothic";
	height: 70px;
}
.yume-desc p {
	font-weight: bold;
	font-size: 82%;
}

.yume-links {
	padding: 2px;
	margin-top: px;
	text-align: center;
}

.yume-links a {
	color: inherit;
	font-family: "MS PGothic";
	font-weight: bold;
}

/* index css? if it works? */

#index {
	width: auto;
	height: auto;
	margin: 10px;
}
    </style>
    <a href="https://weddingring.nekoweb.org"><div class="title"><h2>${ringName}</h2></a>
    </div>

    <div class="mainbox2">
          <div class="yume-icon2">
      <img id="lover" src="https://weddingring.nekoweb.org/onionring/defaultlove.png/">
    </div>
    <div class="yume-desc">
   <p>
     this <span id="yumewm">[webmaster title]</span> is 
     <span id="yumeaction">[action]</span>&nbsp;<span id="yumeship">[their f/o]</span>
   </p>
    </div>
    </div>

    <div class='yume-links'>
    <a href='${sites[previousIndex]}'>&LeftArrow; backward</a>
   &hearts;
   <a href='javascript:void(0)' onclick='randomSite()'>???</a>
   &hearts;
    <a href='${sites[nextIndex]}'>forward &rightarrow;</a>
    </div>

  </div>`,
	);
}
