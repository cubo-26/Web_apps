'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;


//Cấu hình Express để phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(__dirname + '/public'));
// Định nghĩa một route cơ bản để trả về một thông điệp khi truy cập vào đường dẫn gốc (http://localhost:9000/)
app.get('/', (req, res) => {
  const MSSV = req.query.MSSV;
  const Hoten = req.query.Hoten;
  const DTB = req.query.DiemTrungBinh;
    res.send("Chao ban " + Hoten + " co MSSV: " + MSSV + " va diem trung binh la: " + DTB + " chuc ban hoc tot");
});
//Khởi tạo web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;

// =======================================================================================================

// gọi module events
const events = require('events');
// tạo ra một EventEmitter
const eventEmitter = new events.EventEmitter();
// đăng ký tên sự kiện, gắn với hàm lắng nghe và
// xử lý sự kiện tương ứng - xuLythongBao là event handler
eventEmitter.on('hetGio', xuLyThongBao);
eventEmitter.on('batDau', xyLyVaoLop);

function xyLyVaoLop(tb) {
    console.log(tb);
}
// định nghĩa hàm xuLyThongBao
function xuLyThongBao(tb) {
    console.log(tb);
}
// phát ra sự kiện, kèm theo thông điệp
setTimeout(()=> {
    eventEmitter.emit('batDau','Vào lớp học thôi nào!!!!!!!')
}, 5000);
setTimeout(()=> {
    eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
}, 10000);
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});

//viết theo hàm mũi tên
setTimeout(() => {
    eventEmitter.emit('batDau', 'Vào lớp học thôi nào!!!!!!!');
}, 5000);
setTimeout(() => {
    eventEmitter.emit('hetGio', 'Hết giờ học rồi, về thôi!!!!!!!');
}, 10000); 
// =======================================================================================================

//Express/ get request
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
 
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
// =======================================================================================================

// Express / Route handle
// Nối tiếp Route handler
app.get('/profile', (req, res, next) =>
{
      console.log('Kiểm tra quyền truy cập...');
      req.user = { name: "Ti"}; // Giả lập thêm dữ liệu
      next(); // Chuyển tiếp
    },
    (req, res) => { 
res.send(`Chào bạn: ${req.user.name}`);
    }
  );
 
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
// =======================================================================================================

// Express / Middleware
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});