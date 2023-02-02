function funnyclassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier - ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Pta0r6Iy7/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}