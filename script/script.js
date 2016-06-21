
var title = document.querySelector(".title"),
    days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    meDays = document.querySelector(".measure-days"),
    meHours = document.querySelector(".measure-hours"),
    meMinutes = document.querySelector(".measure-minutes"),
    meSeconds = document.querySelector(".measure-seconds"),
    goal = new Date();

goal.setMonth(goal.getMonth() + 1);
goal.setDate(1);
goal.setHours(0, 0, 0, 0);

function getWord(num,arr){
  var res;
if (num%100>=11 && num%100<=14){
  res=arr[2];
  return res;
}
else{
  num=num%10;
  switch (num) {
  case (1): res=arr[0];break;
  case (2):
  case (3):
  case (4): res=arr[1];break;
  default: res=arr[2];
                }
return res;
    }
}

function countdown () {
var now = new Date(),
    sec = 1000,
    min = sec*60,
    hour = min*60,
    day = hour*24,
    ms = goal-now,
    d = Math.floor(ms/day),
    h = Math.floor(ms%day/hour),
    m = Math.floor(ms%day%hour/min),
    s = Math.floor(ms%day%hour%min/sec);

if (goal>now){

  days.innerHTML = d;
  meDays.innerHTML = getWord(d,["день","дня","дней"]);

  hours.innerHTML = h;
  meHours.innerHTML = getWord(h,["час","часа","часов"]);

  minutes.innerHTML=m;
  meMinutes.innerHTML = getWord(m,["минута","минуты","минут"]);

  seconds.innerHTML = s;
  meSeconds.innerHTML = getWord(s,["секунда","секунды","секунд"]);
            }
}
  setInterval(countdown, 1000);
