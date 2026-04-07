## Web Backend Setup & Guide

## 1. Tổng quan kiến trúc Web

Ứng dụng web hoạt động theo mô hình **Client – Server**:
* **Client**: Trình duyệt (Chrome, Safari, …)
* **Server**: Xử lý logic, dữ liệu (Node.js, Nginx, …)

Luồng hoạt động:
1. Client gửi request (HTTP)
2. Server xử lý
3. Server trả response (HTML/JSON)
4. Client hiển thị

## 2. Web Server – Nginx

### 🔹 Nginx là gì?

* Là **web server** dùng để:
  * Serve file tĩnh (HTML, CSS, JS)
  * Reverse proxy (chuyển request đến Node.js)
  * Load balancing

### 🔹 Cài đặt Nginx (MacOS - Homebrew)

bash
---------------------------------------------------------
brew install nginx
---------------------------------------------------------

### 🔹 Các lệnh cơ bản

bash
---------------------------------------------------------
# Start
brew services start nginx
---------------------------------------------------------
# Stop
brew services stop nginx
---------------------------------------------------------
# Reload config
nginx -s reload
---------------------------------------------------------
# Mở file config
open -e /opt/homebrew/etc/nginx/nginx.conf
---------------------------------------------------------
### 🔹 Cấu hình cơ bản

File: `nginx.conf`

nginx
---------------------------------------------------------
server {
    listen 8080;

    server_name localhost;

    location / {
        root /Users/yourname/project;
        index index.html;
    }
}
---------------------------------------------------------

👉 Sau khi đổi port:
http://localhost:8080

### 🔹 Một số cấu hình quan trọng

| Tính năng       | Cách làm                 |
| --------------- | ------------------------ |
| Đổi port        | `listen 3000;`           |
| Đổi thư mục web | `root /path/to/project;` |
| File mặc định   | `index index.html;`      |
| Reverse proxy   | proxy_pass               |
---
### 🔹 Reverse Proxy (quan trọng 🔥)

nginx
---------------------------------------------------------
location /api/ {
    proxy_pass http://localhost:3000;
}
---------------------------------------------------------
👉 Dùng khi:
* Frontend gọi `/api`
* Nginx chuyển sang Node.js

## 3. Node.js
### 🔹 Node.js là gì?
* Runtime chạy JavaScript phía server
* Dùng để:
  * Tạo API
  * Web server
  * Xử lý backend
### 🔹 Cài đặt Node.js
Tải tại:
[https://nodejs.org/](https://nodejs.org/)
Hoặc:
bash
---------------------------------------------------------
brew install node
---------------------------------------------------------

### 🔹 Kiểm tra

bash
---------------------------------------------------------
node -v
npm -v
---------------------------------------------------------

## 4. NPM (Node Package Manager)

### 🔹 NPM là gì?

* Công cụ quản lý thư viện cho Node.js

### 🔹 Khởi tạo project

bash
---------------------------------------------------------
npm init -y
---------------------------------------------------------

👉 Tạo file `package.json`

### 🔹 Cài đặt package

bash
---------------------------------------------------------
npm install express
---------------------------------------------------------

### 🔹 Phân loại package

| Loại            | Ý nghĩa                  |
| --------------- | ------------------------ |
| dependencies    | dùng khi chạy production |
| devDependencies | dùng khi dev             |

bash
---------------------------------------------------------
npm install nodemon --save-dev
---------------------------------------------------------

### 🔹 Global vs Local

| Kiểu          | Mô tả              |
| ------------- | ------------------ |
| Global (`-g`) | dùng toàn hệ thống |
| Local         | dùng trong project |

## 5. PNPM (Tối ưu hơn NPM) 🚀

### 🔹 Cài đặt

bash
---------------------------------------------------------
npm install -g pnpm
---------------------------------------------------------

### 🔹 Ưu điểm

* Tiết kiệm dung lượng
* Tái sử dụng package
* Tốc độ nhanh hơn npm

### 🔹 Cài package

bash
---------------------------------------------------------
pnpm add express
---------------------------------------------------------

## 6. Express.js

### 🔹 Express là gì?

* Framework Node.js để xây dựng API / Web server

### 🔹 Cài đặt

bash
---------------------------------------------------------
pnpm add express
---------------------------------------------------------

### 🔹 Ví dụ server đơn giản

js
---------------------------------------------------------
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
---------------------------------------------------------

## 7. Nodemon

### 🔹 Công dụng

* Tự restart server khi code thay đổi

### 🔹 Cài đặt

bash
---------------------------------------------------------
npm install -g nodemon
---------------------------------------------------------

hoặc (khuyến nghị):

bash
---------------------------------------------------------
npm install nodemon --save-dev
---------------------------------------------------------

### 🔹 Chạy server

bash
---------------------------------------------------------
nodemon app.js
---------------------------------------------------------

## 8. Middleware & Routing (Express)

### 🔹 Route handler

js
---------------------------------------------------------
app.get('/api', (req, res) => {
    res.json({ message: "Hello API" });
});
---------------------------------------------------------

### 🔹 Middleware

js
---------------------------------------------------------
app.use((req, res, next) => {
    console.log('Request received');
    next();
});
---------------------------------------------------------

## 9. Static Files

js
---------------------------------------------------------
app.use(express.static('public'));
---------------------------------------------------------

👉 Dùng cho:

* HTML
* CSS
* JS
* Images

## 10. Async trong Node.js

### 🔹 3 cách xử lý bất đồng bộ:

* Callback
* Promise
* Async/Await (khuyến nghị)

js
---------------------------------------------------------
async function getData() {
    const data = await fetchData();
}
---------------------------------------------------------

## 11. Event-driven (Node.js)

Node.js hoạt động theo mô hình:

* Event
* Event Loop
* Callback

👉 Giúp:

* Xử lý nhiều request cùng lúc
* Không block

## 12. SSR vs CSR

| Kiểu   | Mô tả              |
| ------ | ------------------ |
| SSR    | render trên server |
| CSR    | render trên client |
| Hybrid | kết hợp            |

## 13. URL Structure

---------------------------------------------------------
protocol://domain:port/path?query
---------------------------------------------------------

Ví dụ:

---------------------------------------------------------
http://localhost:3000/api?name=test
---------------------------------------------------------

## 14. Quy trình setup project (Chuẩn)

bash
# 1. Tạo project
mkdir my-app
cd my-app

# 2. Init
npm init -y

# 3. Cài express
pnpm add express

# 4. Cài dev tool
pnpm add nodemon -D

# 5. Tạo file app.js
```

## 15. Best Practices 🔥

* Ưu tiên cài **local package**
* Không lạm dụng global
* Dùng **pnpm** thay npm nếu có thể
* Tách:

  * routes
  * controllers
  * middleware
* Dùng `.env` để config

## 16. Bonus (Thiếu trong tài liệu – nên thêm 👍)

### 🔹 File `.env`

env
---------------------------------------------------------
PORT=3000
DB_URL=mongodb://localhost:27017
---------------------------------------------------------

Dùng:

bash
---------------------------------------------------------
npm install dotenv
---------------------------------------------------------

### 🔹 Script trong package.json

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### 🔹 Run project

```bash
npm run dev
```
