const hands = new HandRecognizer();
function setup() {
    createCanvas(468, 312);
    frameRate(30);
    hands.showVideo(50);
}
function draw() {
    hands.predict();
    hands.drawLandmarks(true);
}
