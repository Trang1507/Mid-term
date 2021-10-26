
let master_data =[
    ["NHÂN VIÊN A",18,20000000,"NHÂN VIÊN"],
    ["NHÂN VIÊN B",20,30000000,"TRƯỞNG PHÒNG"],
    ["NHÂN VIÊN C",30,40000000,"GIÁM ĐỐC"],
]
for (let i=0;i<master_data.length;i=i+1){
    console.log("Xuat dữ liệu nhân viên",(i+1),master_data[i])   
}

alert("nhap them thong tin nhan vien ")
while (true){
    let name = prompt('nhap ten ')
    let age = prompt('nhap tuoi ')
    let salary = prompt('nhap salary ')
    let position = prompt('nhap position ')
    if (age > 0){
    master_data.push([name,age,salary,position])
    }
    else {
        break
    }
}

alert("cập nhật ")
while (true){

    let update_1 = parseInt(prompt ('ban muon cap nhat nhan vien '))
    let update_2 = parseInt(prompt ('ban muon cap nhat du lieu nao, name=0,age=1,salary=2,position=3'))
    let update_3 =parseInt(prompt ('dien du lieu moi'))
    if (update_1>0 && update_1<(master_data.length+1)){
        master_data[update_1-1][update_2]=update_3
    }
    else {
        break
    }
}

alert("xóa nhân viên ")
while (true){

    let update_4 = parseInt(prompt ('ban muon xoa nhan vien nào '))
    
    if (update_4>0 && update_4<(master_data.length+1)){
        delete master_data[update_4-1]
    }
    else {
        break
    }
}