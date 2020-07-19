//Generic sequence-of-trials
//If that's all you want, all you need to edit is the makeTrial object and the responseListener. Give maketrial an appropriate constructor that accept the key trial properties, a drawMe function, and something that will hit responseListener.
//then put a list of trial-property-setter entries in 'stim' and you're golden.

function shuffle(a) { //via https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var trials = [];
var trialindex = 0;

function responseListener(aresponse){//global so it'll be just sitting here available for the trial objects to use. So, it must accept whatever they're passing.
    console.log("responseListener heard: "+aresponse); //diag
    
    trials[trialindex].response = aresponse;
    trials[trialindex].responseTime= Date.now();
    
    // $.post('/response',{myresponse:JSON.stringify(trials[trialindex])},function(success){
    // 	console.log(success);//For now server returns the string "success" for success, otherwise error message.
    // });
    
    //can put this inside the success callback, if the next trial depends on some server-side info.
    trialindex++; //increment index here at the last possible minute before drawing the next trial, so trials[trialindex] always refers to the current trial.
    clear_pause_next();
}

function clear_pause_next(){
    console.log("in")
    //position next button using same viewport dimensions thing as stim drawing.
    //nice to recalc as often as possible in case size changes? Probably there's a better way?
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const buttontop = vh / 2 - 50;
    const buttonleft = vw / 2 - 50;
    
    document.getElementById("uberdiv").innerHTML = "<button style='position:absolute; top:"+buttontop+"px; left:"+buttonleft+"px' onclick = nextTrial()>Next</button>";
//    setTimeout(nextTrial,1000);
}

function nextTrial(){
    if(trialindex<trials.length){
	trials[trialindex].drawMe("uberdiv");
    }else{
	$.post("/finish",function(data){window.location.replace(data)});
    }
}

// a trial object should have a drawMe function and a bunch of attributes.
//the data-getting process in 'dashboard.ejs' & getData routes creates a csv with a col for every attribute, using 'Object.keys' to list all the properties of the object. Assumes a pattern where everything interesting is saved to the trial object, then that is JSONified and saved as a response.
//Note functions are dropped by JSON.
//Also note this means you have to be consistent with the things that are added to each trial before they are saved, maybe init with NA values in the constructor.

function makeOption(prob, pay, role, itemtype){
    this.prob = prob;
    this.pay = pay;
    this.itemtype = itemtype;
    this.role = role;
}

function makeTrial(targ, comp, decoy, bg, pres_order){
    this.targ = targ;
    this.comp = comp;
    this.decoy = decoy;
    this.bg = bg;

    this.pres_order = pres_order;
    
    this.ppntID = localStorage.getItem("ppntID");
    this.drawMe = function(targdiv){
	this.drawTime = Date.now();

function trial_drawstring(targ, comp, decoy, pres_order){
function stim_drawstring(left, top, img, prob, pay){
    return(
	"<span class='stimplacer' style='left:"+left+"px; top:"+top+"px'>"+
"<figure class='img-set'>"+
  "<img src='img/"+img+".png'"+
	    "width='100' height='100'"+
	    "onclick = responseListener(['"+prob+"','"+pay+"'])"+
    ">"+
  "<figcaption>"+prob+" chance<br>"+
    "of winning $"+pay+""+
    "</figcaption>"+
    "</figure>"+
	    "</span>"
    )
}
    
    //cross-browser thingamibob via https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const imgsize = 100; //magic number :-( re-center imgs, [top / left] refs upper left corner

    draw_cords = [
	[
	    vh / 3 - imgsize,//const position1_top 
	    vw / 3 - imgsize,//const position1_left 
	],
	[
	    vh / 3 -imgsize,//const position2_top 
	    vw * 2 / 3 -imgsize,//const position2_left 
	],
	[
	    vh *2 / 3 -imgsize/2,//const position3_top 
	    vw / 2 -imgsize,//const position3_left 
	]
    ]

    return(
	stim_drawstring(draw_cords[pres_order[0]][1], draw_cords[pres_order[0]][0], targ.itemtype, targ.prob, targ.pay)+
	    stim_drawstring(draw_cords[pres_order[1]][1], draw_cords[pres_order[1]][0], comp.itemtype, comp.prob, comp.pay)+
	    stim_drawstring(draw_cords[pres_order[2]][1], draw_cords[pres_order[2]][0], decoy.itemtype, decoy.prob, decoy.pay)
    )
    
}
	document.getElementById("uberdiv").innerHTML = trial_drawstring(this.targ, this.comp, this.decoy, this.pres_order);
    }
}


//****************************************************************************************************
//Stimuli
//var stim = shuffle(["Does this question have a correct answer?","What is the correct answer to this question?"]);
//trials = stim.map(function(x){return new makeTrial(x)});

trials = [
    new makeTrial(
	targ = new makeOption(prob=.1, pay=10, role="targ", itemtype="urn"),
	comp = new makeOption(prob=.2, pay=20, role="comp", itemtype="ticket"),
	decoy = new makeOption(prob=.3, pay=30, role="decoy", itemtype="urn"),
	bg = "urn",
	shuffle([0,1,2])),
    new makeTrial(
	targ = new makeOption(prob=.4, pay=40, role="targ", itemtype="ticket"),
	comp = new makeOption(prob=.5, pay=50, role="comp", itemtype="ticket"),
	decoy = new makeOption(prob=.6, pay=100, role="decoy", itemtype="urn"),
	bg = "urn",
	shuffle([0,1,2]))
]

//nextTrial();

trials[0].drawMe()

// document.getElementById("uberdiv").innerHTML = trial_drawstring(
//     new makeOption(prob=.1, pay=10, role="targ", itemtype="urn"),
//     new makeOption(prob=.2, pay=20, role="comp", itemtype="ticket"),
//     new makeOption(prob=.3, pay=30, role="decoy", itemtype="urn"),
//     [2,1,0]
// )
