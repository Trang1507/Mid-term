let n = prompt('nhap chuoi ky tu ')
n=n.toLowerCase()
let mang=[]

for (let i=0;i<n.length;i=i+1){
    mang.push(n[i])
}

mang[0]=mang[0].toUpperCase();
for (let m=0;m<mang.length;m=m+1){
    if (mang[m]===" "){
        mang[m+1]=mang[m+1].toUpperCase();
    }
}


let new_name=" ";

for (let u = 0;u<mang.length;u=u+1){
    new_name=new_name+mang[u];
}
console.log(new_name)




