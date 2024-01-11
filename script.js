const selectDate = document.getElementById('date-input');
selectDate.max = new Date().toISOString().split('T')[0];
const calculate = document.querySelector('.btn');

calculate.addEventListener('click',()=>{
    const selectedDate =  selectDate.value;
    const birthdate  =  new Date(selectedDate);

    const y1 = birthdate.getFullYear();
    const m1 = birthdate.getMonth() + 1;
    const d1 =  birthdate.getDay();

    const today =  new Date();
    const y2 = today.getFullYear();
    const m2 = today.getMonth() + 1;
    const d2 = today.getDay();

    let y3 , m3 , d3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    };

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = correctDay(y1,m1) + d2 - d1;
        
    };

    if(m3<0){
        m3 = 11;
        y3--;
    };

    function correctDay(year , month){
        return new Date(year , month , 0).getDate();
    };

    document.querySelector('.p').innerHTML = 
    `You are <span class = 'span'>${y3}</span> years, <span class = 'span'>${m3}</span> months and <span class = 'span'>${d3}</span> days old.`
    document.getElementById('icon').style.display = "block";
});

