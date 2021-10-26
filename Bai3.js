let array2=[]
let array3=[]
let result_2=true

while (true){
    let n = prompt('nhap n ')
    if (n != -1){
    array2.push(n)
    }    
    else {
    break
    }
}

for (let i=0;i<array2.length;i=i+1){

    for (let m=-1;m<i;m=m+1){
        if (array2[i]==array2[m]){
        array2[i]=0
        }
    }

}

for (let m=0;m<array2.length;m=m+1){
    if (array2[m] != 0){
        array3.push(array2[m])
    }

}
console.log(array3)