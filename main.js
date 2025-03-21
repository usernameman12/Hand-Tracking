const hands = new HandRecognizer();
function setup() {
    createCanvas(468, 312);
    frameRate(30);
    hands.showVideo(50);
}
function draw() {   
    clear();
    hands.predict();
    hands.drawLandmarks(true);
    let gesture = detectGesture();
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(gesture, width / 2, height - 30);
}
function detectGesture() {
    if (hands.hasRightHand()) {
        let thumb = hands.rightFingerExtended(Finger.Thumb);
        let index = hands.rightFingerExtended(Finger.Index);
        let middle = hands.rightFingerExtended(Finger.Middle);
        let ring = hands.rightFingerExtended(Finger.Ring);
        let pinky = hands.rightFingerExtended(Finger.Pinky);
        let palmPosition = hands.getRightLandmark(Landmarks.Wrist);
        let palmDirection = detectPalmDirection(palmPosition);
        if (thumb && index && !middle && !ring && !pinky) return "Pointing";
        if (thumb && index && middle && ring && pinky) return "Open Palm ✋";
        if (!thumb && index && middle && !ring && !pinky) return "Peace Sign ✌️";
        if (!thumb && !index && !middle && !ring && !pinky) return "Fist ✊";
        if (thumb && !index && !middle && !ring && pinky) return "Rock On 🤘";
        if (!thumb && index && !middle && !ring && pinky) return "Call Me 🤙";
        if (thumb && index && middle && !ring && !pinky) return "Three Fingers Up";
        if (!thumb && index && middle && ring && pinky) return "Four Fingers Up";
        if (thumb && index && !middle && ring && pinky) return "Spock Live Long 🖖";
        if (!thumb && !index && middle && ring && pinky) return "Middle Finger Up 🖕";
        if (!thumb && !index && !middle && ring && pinky) return "Two Pinkies Up";
        if (thumb && !index && middle && ring && pinky) return "Thumbs Up 👍";
        if (!thumb && index && middle && !ring && pinky) return "Thumbs Down 👎";
        if (thumb && index && middle && ring && !pinky) return "Claw Shape";
        if (thumb && !index && !middle && ring && pinky) return "Horns";
        if (!thumb && !index && middle && ring && !pinky) return "Wave";
        if (thumb && !index && middle && !ring && !pinky) return "Shaka 🤙";
        if (!thumb && !index && !middle && !ring && pinky) return "Little Finger Up";
        if (thumb && index && middle && !ring && pinky) return "OK Gesture 👌";
        if (!thumb && index && !middle && ring && pinky) return "Gun Sign 🔫";
        if (!thumb && index && middle && ring && !pinky) return "Stop ✋";
        if (thumb && !index && middle && !ring && pinky) return "Hang Loose 🤙";
        if (!thumb && !index && !middle && ring && pinky) return "Victory";
        if (thumb && index && !middle && !ring && pinky) return "L-Shape";
        if (!thumb && index && !middle && !ring && !pinky) return "One Finger Up ☝️";
        if (thumb && !index && middle && ring && !pinky) return "Palm Holding";
        if (!thumb && !index && !middle && !ring && pinky) return "Little Finger Alone";
        if (thumb && index && middle && !ring && pinky) return "C Shape Hand";
        if (!thumb && !index && middle && ring && pinky) return "Robot Hand";
        return palmDirection;
    }
    return "No Hand Detected";
}
function detectPalmDirection(palm) 
    if (palm.y < height / 3) return "Palm Up";
    if (palm.y > (2 * height) / 3) return "Palm Down";
    if (palm.x < width / 3) return "Palm Left";
    if (palm.x > (2 * width) / 3) return "Palm Right";
    return "Neutral Palm";
}
