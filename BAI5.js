let date = parseInt(prompt('nhap ngay '))
let month = parseInt(prompt('nhap thang '))
let year = parseInt(prompt('nhap nam '))
let result3=true;

if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    if (date>0 && date<32){
        console.log('ngay hop le ')
       
    }
    else {
        console.log('ngay khong hop le ')
        result3=false;
    }
}
else if (month==4||month==6||month==9||month==11){
    if (date>0 && date<31){
        console.log('ngay hop le ')
        
    }
    else {
        console.log('ngay khong hop le ')
        result3=false;
    }
}

else if (month==2){
    if ( (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        if (date>0 && date <30){
            console.log('ngay hop le ')
            
        }
        else {
            console.log('ngay khong hop le ')
            result3=false;
        }
    }
    else {
        if (date>0 && date<29){
            console.log('ngay hop le')
            
        }
        else {
            console.log('ngay khong hop le ')
            result3=false
        }
    }

}
else {
    console.log('ngay khong hop le ')
    result3=false
}
console.log(date,month,year)
date=date+1;

if (result3===true){
    if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        if (date>31){
        date=1;month=month+1;
        }
    }
    else if (month==2){
         if ( (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            if (date>29){
                date=1;month=month+1
            }
         }
         else {
            if (date>28){
                date=1;month=month+1
            }
         }

    }
    else {
        if (date>30){
            date=1;month=month+1;
        }
    }
    if (month>12){
    month=1;year=year+1
    }
    console.log('ngay tiep theo la '+date+"/"+month+"/"+year)
}

else {
    console.log('khong co ngay tiep theo ')
}