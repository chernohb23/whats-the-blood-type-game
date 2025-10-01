function set(a,b,rh) {
    let one = Math.floor(Math.random() * 2) + 1;
    let two = Math.floor(Math.random() * 2) + 1;
    let three = Math.floor(Math.random() * 2) + 1;
    if(one === 1){
        a.src = norm;
    }
    else{
        a.src = clot;}
    if(two === 1){
        b.src = norm;
    }
    else{
        b.src = clot;}
    if(three === 1){
        rh.src = norm;
    }
    else{
        rh.src = clot;}
}
function disabled(){
    button_a_plus.disabled = true;
    button_a_minus.disabled = true;
    button_b_plus.disabled = true;
    button_b_minus.disabled = true;
    button_ab_plus.disabled = true;
    button_ab_minus.disabled = true;
    button_o_plus.disabled = true;
    button_o_minus.disabled = true;
}
function enabled(){
    button_a_plus.disabled = false;
    button_a_minus.disabled = false;
    button_b_plus.disabled = false;
    button_b_minus.disabled = false;
    button_ab_plus.disabled = false;
    button_ab_minus.disabled = false;
    button_o_plus.disabled = false;
    button_o_minus.disabled = false;
}
function answer(){
    if (a.src === clot && b.src === norm && rh.src === clot){
        return "A_plus"
    }
    else if(a.src === clot && b.src === norm && rh.src === norm){
        return "A_minus"
    }
    else if(a.src === norm && b.src === clot && rh.src === clot){
        return "B_plus"
    }
    else if(a.src === norm && b.src === clot && rh.src === norm){
        return "B_minus"
    }
    else if(a.src === clot && b.src === clot && rh.src === clot){
        return "AB_plus"
    }
    else if(a.src === clot && b.src === clot && rh.src === norm){
        return "AB_minus"
    }
    else if(a.src === norm && b.src === norm && rh.src === clot){
        return "O_plus"
    }
    else if(a.src === norm && b.src === norm && rh.src === norm){
        return "O_minus"
    }
}
function decrease(){
    time--
    timer.textContent = "Timer: "+time
    check()
}
function check(){
    if(time === 0){
        times_up()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
}
function next(){
    up_question()
    time = 10
    timer.textContent = "Timer: 10"
    stat.style.opacity = "0"
    interval = setInterval(decrease,1000)
    set(a,b,rh)
    enabled()
}
function correct(){
    stat.textContent = "Correct!"
    stat.style.opacity = "1"
    stat.style.color = "limegreen"
}
function incorrect(){
    stat.textContent = "Incorrect!"
    stat.style.opacity = "1"
    stat.style.color = "red"
}
function times_up(){
    stat.textContent = "Time's up!"
    stat.style.opacity = "1"
    stat.style.color = "red"
}
function up_points(){
    if(time === 10){
        points+= 100
        score.textContent = "Score: "+points

    }
    else if(time === 9){
        points+= 90
        score.textContent = "Score: "+points
    }
    else if(time === 8){
        points+= 80
        score.textContent = "Score: "+points
    }
    else if(time === 7){
        points+= 70
        score.textContent = "Score: "+points
    }
    else if(time === 6){
        points+= 60
        score.textContent = "Score: "+points
    }
    else if(time === 5){
        points+= 50
        score.textContent = "Score: "+points
    }
    else if(time === 4){
        points+= 40
        score.textContent = "Score: "+points
    }
    else if(time === 3){
        points+= 30
        score.textContent = "Score: "+points
    }
    else if(time === 2){
        points+= 20
        score.textContent = "Score: "+points
    }
    else if(time === 1){
        points+= 10
        score.textContent = "Score: "+points
    }
}
function show_results(){
    hide_main()
    text.style.display = "none"
    results.style.display = "block"
    final.textContent = "Score: "+points
    final.style.display = "block"
    restart.style.display = "block"
}
function up_question(){
    question++
    if(question === 21){
        show_results();
    }
    else{
        question_text.textContent = question+"/20"
    }
}
function reset(){
    clearInterval(interval)
    text.textContent = original_text
    text.style.display = "block"
    question = 1
    points = 0
    score.textContent = "Score: "+points
    question_text.textContent = question+"/20"
    play.style.display = "block"
}
function again(){
    reset()
    results.style.display = "none"
    final.style.display = "none"
    restart.style.display = "none"
}

a = document.getElementById("one");
b = document.getElementById("two");
rh = document.getElementById("three");
let score = document.getElementById("score");
timer = document.getElementById("timer");
stat = document.getElementById("status");
text = document.getElementById("text");
let question = 1;
let question_text = document.getElementById("questions");
results = document.getElementById("results");
final = document.getElementById("final");
restart = document.getElementById("restart");

let points = 0
let time = 10

button_a_plus = document.getElementById("a_plus");
button_a_minus = document.getElementById("a_minus");
button_b_plus = document.getElementById("b_plus");
button_b_minus = document.getElementById("b_minus");
button_ab_plus = document.getElementById("ab_plus");
button_ab_minus = document.getElementById("ab_minus");
button_o_plus = document.getElementById("o_plus");
button_o_minus = document.getElementById("o_minus");
button_again = document.getElementById("again");

buttons = document.getElementById("buttons")
pics = document.getElementById("pics")
names = document.getElementById("names")
game = document.getElementById("game")
play = document.getElementById("play")
start = document.getElementById("start")

norm = ""

clot = "https://lh3.googleusercontent.com/pw/AP1GczMmjUvF9_khpmutHgU7x7AzL6o8f_GQbv_OQ4lXUN7Z7" +
       "OLh29sJApzatBPYP-99zwTupYhtZoGKCeqXhInrShuk7kJqyvf8HOITtee26eKZ_C74ks0=w2400"

original_text = "Twenty blood samples will be collected and put into three different antibodies (Anti-A, Anti-B, and " +
                "Anti-Rh). Your job is to observe the reactions to determine the antigens present and select the correct " +
                "blood type of each sample. You will have 10 seconds to analyze each one. The quicker you select correctly," +
                "the more points you'll score. Whenever you're ready, press the Start button to begin."

function begin(){
    set(a,b,rh)
    interval = setInterval(decrease,1000)
    show_main();
    text.textContent = "Here is a blood sample put into the three different antibodies. Observe and select!"
    play.style.display = "none"
}

function show_main(){
    buttons.style.display = "block"
    pics.style.display = "block"
    names.style.display = "block"
    game.style.display = "block"
    timer.style.display = "block"
    question_text.style.display = "block"
}

function hide_main(){
    buttons.style.display = "none"
    pics.style.display = "none"
    names.style.display = "none"
    game.style.display = "none"
    timer.style.display = "none"
    question_text.style.display = "none"
}

start.addEventListener("click", begin)

let interval

button_a_plus.addEventListener("click", function(){
    if (answer() === "A_plus") {
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    } else {
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_a_minus.addEventListener("click", function(){
    if(answer() === "A_minus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_b_plus.addEventListener("click", function(){
    if(answer() === "B_plus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_b_minus.addEventListener("click", function(){
    if(answer() === "B_minus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_ab_plus.addEventListener("click", function(){
    if(answer() === "AB_plus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_ab_minus.addEventListener("click", function(){
    if(answer() === "AB_minus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_o_plus.addEventListener("click", function(){
    if(answer() === "O_plus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_o_minus.addEventListener("click", function(){
    if(answer() === "O_minus"){
        correct()
        disabled()
        clearInterval(interval)
        up_points()
        setTimeout(next, 1000)
    }
    else{
        incorrect()
        disabled()
        clearInterval(interval)
        setTimeout(next, 1000)
    }
})
button_again.addEventListener("click", again)

