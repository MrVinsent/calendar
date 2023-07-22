let currentDate = document.querySelector('.current-date');
let daysTag = document.querySelector('.days');
let prevNextIcon = document.querySelectorAll('.icons span');
let date = new Date(),
currYear = date.getFullYear(),
currMonuth = date.getMonth()

let mounths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль","Август","Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
let renderCalendar = () =>{
    let firstDayofMounth = new Date(currYear, currMonuth, 0).getDay() //getting first day of mounth
    let lastDateofMounth = new Date(currYear, currMonuth + 1, 0).getDate(); // getting last date of mounth
    let lastDayofMounth = new Date(currYear, currMonuth, lastDateofMounth).getDay() //getting last day of mounth
    let lastDateofLastMounth = new Date(currYear, currMonuth, 0).getDate() // getting last date of previous mounth
    let liTag = ""

    for(let i = firstDayofMounth; i > 0; i--){ //creatting li of previous mounth last days
        liTag += `<li class="inactive">${lastDateofLastMounth - i + 1}</li>`
    }

    for(let i = 1; i <= lastDateofMounth; i++){ //creating li of all days of current mounth
        
        let isToday = i === date.getDate() && currMonuth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for(let i = lastDayofMounth; i < 7; i++){ //creating li of next mounth first days
        liTag += `<li class="inactive">${i - lastDayofMounth + 1}</li>`
    }

    currentDate.innerText = `${mounths[currMonuth]} ${currYear}`;
    daysTag.innerHTML = liTag
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () =>{
        currMonuth = icon.id === "prev" ? currMonuth - 1 : currMonuth + 1;

        if(currMonuth < 0 || currMonuth > 11){ //if current mounth is less that 0 or greater than 11
            // creating a new date of current year & mounth and pass it as date value 
            date = new Date(currYear, currMonuth);
            currYear = date.getFullYear(); // updating current year with new date
            currMonuth = date.getMonth(); // updating current mounth with new date mounth
        } else {
            date = new Date();
        }

        renderCalendar();
    })
})

