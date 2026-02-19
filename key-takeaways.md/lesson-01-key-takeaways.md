# 1. Playwright là gì?
- Là một framework
- Tiền thân là puppeteer được MS tài trợ và phát triển
- Ra đời 31/01/2020

https://playwright.dev/docs/auth

**Ưu điểm**
- Cross browser -> viết 1 lần nhưng sử dụng được cho các browser: chrome, edge, firefox, safari
- Cross Platform
- Tính năng "xịn xò"
    - auto waiting, auto retry, assertion giúp giảm flaky tests (lúc pass, lúc fail)
- Report đầy đủ thông tin
    - Pass/ Fail theo từng browser
    - Chi tiết từng thời điểm "gọi API nào", "response nào trả về", "ứng với dòng code nào"
- Code gen: thao tác để sinh ra code

## 2. Vì sao học Playwright?

- Dễ cài đặt
- Cú pháp đơn giản dễ học
- Framework trending

## 3. NVM

- NodeJS: công cụ để chạy code
- NVM: để chuyển đổi qua các version của NodeJS
- Git: quản lý source code
- GitHub: chia sẻ code và làm việc nhóm

## 4. Cấu hình GIT

- Config username
- Config email
- Config branch default

```bash
// config username
git config --global user.name "username"

// config email
git config --global user.email "email"

// Config branch default
git config --global init.defaultBranch main

```
**Ý nghĩa**: để đưa được thông tin lên git thì mình phải thông báo cho git biết mình là ai, mình đưa lên nhánh nào của git.

## 5. Cài đặt VS

- Install Extension: Playwright Test for VSCode
- Đổi terminal default
  - Ctrl Shift P: hiển thị hộp thoại
  - Tìm kiếm -> Terminal Default
  - Chọn -> Terminal: Select Default Profile
  - Chọn -> Git Bash
  - Kiểm tra lại -> Terminal/ New Terminal (kiểm tra bash)

## 6. Kết nối Code với GitHub

Đưa code lên Github thông qua bước xác thực: **SSH Key**
## SSH Key là gì

- **id_rsa**: cần giữ bí mật
- **id_rsa.pub**: có thể gửi cho người khác
- Giúp xác thực đăng nhập trở nên dễ dàng hơn

## Tạo SSH Key

- Mở Git Bash
- Gõ lệnh

```bash
ssh-keygen -t rsa -b 4096 -C "your email"
```
Lưu ý: trong trường hợp nếu đã có SSH Key thì không ghi đè mà hãy chọn N để từ chối gen key mới.

Lấy nội dung SSH Key
```bash
cat ~/.ssh/id_rsa.pub
```
Lên Git -> My Profile/ Setting -> SSH Key and GPG Keys -> Add New SSH Key

## 7. demo-1
- Tạo new folder demo-1
- Click chuột phải trong folder demo-1 -> select Open with Git Bash here
- Run command để khởi tạo playwright trong thư mục
```bash
npm init playwright@latest
```
Gõ liên tục đến khi ra được phần happy hacking

**Ý nghĩa các thư mục**
- node_modules -> thư viện
- tests -> code test
- playwright.config.ts -> file cấu hình (để cấu hình chụp ảnh, video, chạy bao nhiêu worker)

**Push code lên GIT**
```bash
// khởi tạo repo local
git init

// tạo repo github liên kết với repo local
git remote add origin <url>

//thêm file vào staging
git add .

// commit file
git commit -m "message"

// push code
git push origin main
```

**Invite Collaborator**
- Settings -> Collaborators -> Add People