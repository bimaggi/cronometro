(function(win,doc){
'use strict'
let $timer= doc.querySelector('[data-js="timer"]')
let $start=doc.querySelector('[data-js="start"]')
let $stopr=doc.querySelector('[data-js="stop"]') 
let $reset= doc.querySelector('[data-js="reset"]')
let interval;

$start.addEventListener('click',startTimer,false)
$stopr.addEventListener('click',stopTimer,false)
$reset.addEventListener('click',resetTimer,false)

function startTimer(){
    $timer.value = +$timer.value + 1;         
    interval=setTimeout(startTimer, 1000) 
    
}
function stopTimer(){
    clearTimeout(interval)

}
function resetTimer(){
    $timer.value = 0
    stopTimer()
}

}(window,document))