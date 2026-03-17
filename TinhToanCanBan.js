function cong(a, b){
    return a + b;
}
console.log("Bắt đầu!");
let kq = cong(6, 8);
console.log("Kết quả",kq);
console.log("Kết thúc");

function xuLyDaySo(){
    console.log("Bắt đầu đếm...");
    for(let i = 0; i <= 5; i++){
        console.log("Đếm:", i);
    }
    console.log("Xử lý xong");
}
xuLyDaySo();
console.log("Tiếp tục công việc khác!");

function chanLuong(){
    console.log("Bắt đầu tác vụ cần nhiều thời gian xử lý");
    let batDau = Date.now();
    while((Date.now) - batDau < 5000){
            xuLyDaySo();
    }
    console.log("Tác vụ chạy 5 giây hoàn tất");
}
console.log("Trước khi chạy tác vụ");
chanLuong();
console.log("Sau khi chạy tác vụ");

// Hàm ẩn danh
const Xuly = function(x, y){
    return x + y;
}
console.log(Xuly(2,4));
//
setTimeout(function(){
    console.log("Đã hết 3 giây (sau 3 giây)");
}, 3000)
console.log("Đang chờ");
//Hàm mũi tên
setTimeout(()=>{
    console.log("Đã hết 4 giây (sau 4 giây)");
}, 4000)
console.log("Đang chờ");
//Truyền tham số
const number = [0,1,2,3,4];
number.forEach(num=>console.log(num));
// this
function Person(){
    this.age = 0;
    setInterval=>(()=>{
        this.age++;
        console.log(this.age);
    }, 1000);
}
const p = new Person();
//callback
const
numbers = [1,2,3,4,5];
numbers.forEach(num => console.log(num * num));
//Gọi API
function 
getUser(userID, callack){
    fetch('https://jsonplaceholder.typicode.com/users/${userId}')
    .then(response => response.json)
    .then(data=>callback(null,data))
    .catch(error=>callback(error.null))
}
getUser(1, function(error, user){
    if(error){
        console.error("lỗi", error);
    }
    else{
        console.log("Tên người dùng", user.name);
    }
});
//tùy chỉnh logic
function
xuLyMang(arr, callback){
    for(let i = 0; i<arr.length; i++){
        arr[i] = callback(arr[i]);
    }
    return arr;
}
const numberr = [1,2,3];
const binhPhuong = xuLyMang(numberr, x=>x*x);
console.log("nhan2")
//