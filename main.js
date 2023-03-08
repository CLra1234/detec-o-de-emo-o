var prediction1=''
var predicition2=''

Webcam.set({
    width:350,
    height:300,
    imageFormat:"png",
    pngQuality:90
})
var camera=document.getElementById("camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src=' " + data_uri+"'/>"
    })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',modelLoaded);

function speak(){
    var synth=window.speechSynthesis
    speakData1="a primeira previsão é "+prediction1
    speakData2="a segunda previsão é "+predicition2

utterThis=new SpeechSynthesisUtterance(speakData1+speakData2)
synth.speak(utterThis)
}
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if (error) {
    console.log(error)
} else {
console.log(results)
    prediction1=results[0].label
    prediction2=results[1].label
    speak()
    if(results[0].label=="feliz"){
        document.getElementById("updateEmoji").innerHTML="&#128522"
    }
    if(results[0].label=="triste"){
        document.getElementById("updateEmoji").innerHTML="&#128532"
    }
    if(results[0].label=="irritado"){
        document.getElementById("updateEmoji").innerHTML="&#128542"
    }
    if(results[1].label=="feliz"){
        document.getElementById("updateEmoji2").innerHTML="&#128522"
    }
    if(results[1].label=="triste"){
        document.getElementById("updateEmoji2").innerHTML="&#128532"
    }
    if(results[1].label=="irritado"){
        document.getElementById("updateEmoji2").innerHTML="&#128548"
    }
}
}