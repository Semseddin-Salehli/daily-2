function submit() {
    const d = new Date();
    let result = "";

    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let day = document.getElementById('day');

    let errYear = document.getElementById("errYear");
    let errMonth = document.getElementById("errMonth");
    let errDay = document.getElementById("errDay");


    if (year.value == null || year.value == "" || year.value == 0 ||
        month.value == null || month.value == "" || month.value == 0 ||
        day.value == null || day.value == "" || day.value == 0) {

        // controls

        if (year.value == null || year.value == "" || year.value == 0) {
            errYear.style.display = "block";
            errYear.innerText = "This field is required";
        }

        if (month.value == null || month.value == "" || month.value == 0) {
            errMonth.style.display = "block";
            errMonth.innerText = "This field is required";
        }

        if (day.value == null || day.value == "" || day.value == 0) {
            errDay.style.display = "block";
            errDay.innerText = "This field is required";
        }

        return;
    }


    let nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;
    let nowDay = d.getDate();

    let calYear = nowYear - year.value
    let calMonth = nowMonth - month.value
    let calDay = nowDay - day.value

    let yearAns = document.getElementById('year-ans');
    let monthAns = document.getElementById('month-ans');
    let dayAns = document.getElementById('day-ans');

    yearAns.innerText = calYear
    monthAns.innerText = calMonth
    dayAns.innerText = calDay
}