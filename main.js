function Sound() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    model1= ml5.soundClassifier(" https://teachablemachine.withgoogle.com/models/NnvgGjnvE/model.json", model_loaded());
}
function model_loaded() {
    console.log("The Model Has Been Loaded");
    model1.classify(results_1);
}
function results_1(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_r = Math.floor(Math.random()*255) +1;
        random_g = Math.floor(Math.random()*255) +1;
        random_b = Math.floor(Math.random()*255) +1;
    }
}