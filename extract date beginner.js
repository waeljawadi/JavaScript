var aujourdhui = new Date().getDay();
ce_moment_la = new Date();
les_heurs    = ce_moment_la.getHours();
les_minutes  = ce_moment_la.getMinutes();
les_secondes = ce_moment_la.getSeconds();
function ampm(les_heures) 
{
if(les_heurs > 12) { pm_am = "PM"; }
else {pm_am = "AM";}
  return pm_am
}
function print_the_day(aujourdhui,les_heurs,les_minutes,les_secondes)
{
  var arraydays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var today = "Today is :  " + arraydays[aujourdhui]+".";
  var pm_or_am = ampm(les_heurs) ; 
  var formatted_date = today + "\n";
  var current_time = "Current time is : " +les_heurs +" "+pm_or_am +" : "+les_minutes+" : "+les_secondes;
  var the_final = formatted_date +" "+ current_time;
  return the_final;
}
console.log(print_the_day(aujourdhui,les_heurs,les_minutes,les_secondes));
