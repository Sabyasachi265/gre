var prediction = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera')

function Toez(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="soya" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version :', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PFOWS9EE9/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    dataname = "Prediction : "+ prediction;
    var utterthis = SpeechSynthesisUtterance(dataname);
    synth.speak(utterthis);
}

function Vs(){
    img = document.getElementById('soya');
    classifier.classify(img, Gotresult);
}

function Gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("wow").innerHTML = results[0].label;
        prediction = results[0].label;
    
        if(prediction == "victory"){
            document.getElementById("new").innerHTML = "&#128522;";
    }
}
}