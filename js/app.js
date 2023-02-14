const endDate = "5 Febuary 2023 10:49:40 PM"
document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock(){
const end = new Date(endDate)
const now = new Date()
const diff = (end - now)/1000;
console.log(diff);
if(diff<0) return;
console.log(diff);
inputs[0].value = Math.floor(diff/3600 / 24);
inputs[1].value =Math.floor(diff/3600 %24)
inputs[2].value =Math.floor(diff/60%60)
inputs[3].value =Math.floor(diff%60)

}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)