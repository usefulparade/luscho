var c;
var t1;
var t2;

function setup(){
    c = createCanvas(windowWidth, windowHeight);
    c.parent("canvas");
    t1 = 0;
    t2 = 0;
}

function draw(){
    background(0,0,0);
    stroke(255,255,255);
    //ellipse(width/2, height/2, 100, 100);

    if (mouseIsPressed){
        //ellipse(mouseX, mouseY, 100, 100);
    }

    t1+=1;
    t2+=2;
    sinWave(t1, t2, width/2, (1.8*height)/3);
}

function mousePressed(){
    ellipse(mouseX, mouseY, 100, 100);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function sinFunc(t1_, t2_){
    return (sin(t1_ / 30) * 50) * (cos(t2_ / 200) * 2);
}

function sinWave(t1_, t2_, x_, y_){
    push();
    strokeWeight(5);
    noFill();
    translate(x_, y_);
        beginShape();
        for (i=-width/2;i<width/2;i++){
            vertex(i, sinFunc(i + t1_, i + t2_));
        }
        endShape();
    pop();
}