GITHUB ACTIONS CI/CD WEBSITE - STARTER

1. Thay HỌ VÀ TÊN - MSSV trong index.html bằng thông tin của bạn.
2. Tạo Public repository devops-MSSV trên GitHub.
3. Mở Terminal/PowerShell trong thư mục này và chạy:
   git init
   git branch -M main
   git add .
   git commit -m "Create CI/CD website"
   git remote add origin https://github.com/USERNAME/devops-MSSV.git
   git push -u origin main
   Thay USERNAME và MSSV cho đúng.
4. GitHub repository > Settings > Pages > Build and deployment > Source:
   chọn GitHub Actions.
5. Mở tab Actions. Job check chạy trước; deploy chỉ chạy sau khi check thành công.
6. Thí nghiệm thất bại: xóa <title>...</title> trong index.html, commit và push.
   Xác nhận check đỏ và deploy bị skipped. Sau đó khôi phục title, đổi nội dung
   thành Phiên bản 2.0, commit và push. Xác nhận website đã cập nhật.
7. URL dự kiến: https://USERNAME.github.io/devops-MSSV/

CẢNH BÁO: Không commit hoặc push thông tin bí mật (token/password).
