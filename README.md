# WEBSITE ĐẤU GIÁ TRỰC TUYẾN*

Thành viên:
* [x] **1412193** - Nguyễn Thái Học - NguyenThaiHoc1 - 70%
* [ ] **1412169** - Hồ Thảo Hiền - HoThaoHien - 30%
* [ ] **1412175** - Trần Hiệp - tranhiepqna
* [ ] **1412240** - Bùi Đình Khánh - khanhbui1412240

URL: **URL hosting của đề tài**

Báo cáo: **https://github.com/HoThaoHien/project-3h1k.github.io/blob/master/README.md**

Làm việc nhóm:
* [X] Có sử dụng GIT.
* [X] Sử dụng GIT theo Centralized Workflow.
* [X] Sử dụng GIT theo Feature Branch Workflow.
* [X] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Trang web dùng để bán hàng online và đấu giá trực tuyến 

## Lập trình server
### MVC
* [X] MVC
* [X] Config
* [X] REST routing
* [X] Layout & partial

### Lập trình dữ liệu
* [X] Thêm
* [X] Xóa
* [X] Sửa
* [X] Tìm kiếm

### Xử lý lỗi
* [X] Xử lý lỗi trong cùng trang web
* [X] Xử lý lỗi dùng trang web riêng
   * [X] 401
   * [X] 404
   * [X] 500

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [ ] Facebook API
* [X] Google API

## Lập trình client
* [X] Kiểm tra dữ liệu
* [X] Animation
* [X] Thao tác DOM
* [X] AJAX

## Bảo mật
* [X] Chứng thực 
* [X] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau
   * [X] Không cho phép thao tác vào trang web khi không có quyền
   * [X] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau
   * [X] Thể hiện lỗi khi không truy xuất được trang khi không có quyền

## Chức năng đã thực hiện
* [X] Lọc sản phẩm: 
   * [X] Top 5 sản phẩm có nhiều lượt ra giá nhất
   * [X] Top 5 sản phẩm có giá cao nhất
   * [X] Top 5 sản phẩm gần kết thúc

* [X] Xem thông tin sản phẩm
   * [X] Thể hiện đầy đủ 3 hình ảnh
   * [X] Có mô tả html
   * [X] Thể hiện đầy đủ các thông tin của sản phẩm: tên, giá hiện tại, giá mua ngay (nếu có), người bán & điểm đánh giá (url), người đang giữ giá cao nhất & điểm đánh giá (url), thời điểm đăng, thời điểm kết thúc
   
* [X] Tìm kiếm sản phẩm
   * [X] Tìm theo tên and/or Tìm theo danh mục
   * [X] Phân trang kết quả
    ```
    Có số trang cụ thể
    Không có số trang
    ```
   * [X] Sắp xếp theo ý người dùng
    ```
    Thời gian kết thúc giảm dần
    Giá tăng dần
    ```
   * [X] Những sản phẩm mới đăng trong vòng N phút sẽ có thể hiện khác các sản phẩm còn lại
   * [X] Thể hiện đủ các thông tin: 1 hình ảnh, tên sản phẩm, giá hiện tại, người dùng đang giữ giá (mã hoá), giá mua ngay (nếu có), thời gian còn lại, số lượt ra giá hiện tại
* [X] Đăng ký
   * [X] reCaptcha
   * [X] Mật khẩu được mã hoá bằng MD5.
* [X] Đăng nhập
* [X] Đăng xuất 
* [X] Chức năng người dùng sau khi đăng nhập (với vai trò là người mua):
   * [X] Lưu 1 sản phẩm vào danh sách yêu thích (Watch List)
   ```
   View tìm sản phẩm
   View xem chi tiết sản phẩm
   ```
   * [X] Ra giá 1 sản phẩm
  ```
  View xem chi tiết sản phẩm
  Hệ thống kiểm tra điểm đánh giá (+/+-) hơn 80% thì mới cho phép ra giá
  Hệ thống đề nghị giá hợp lệ (thường là giá hiện tại + bước giá do người bán thiết lập)
  Hệ thống yêu cầu xác nhận
  ```
   * [X] Xem lịch sử đấu giá của sản phẩm
   * [X] Quản lý hồ sơ cá nhân
   ```
   Đổi thông tin email, họ tên, mật khẩu (có yêu cầu nhập mật khẩu cũ)
   Xem điểm đánh giá và chi tiết các lần “được” đánh giá & đoạn nhận xét mà người đánh giá gửi
   Xem danh sách sản phẩm yêu thích của mình
   Xem danh sách sản phẩm mà mình đang tham gia đấu giá
   Xem danh sách sản phẩm mà mình đã thắng (giá cao nhất).Được phép đánh giá người bán +1 hoặc -1, gửi kèm 1 đoạn nhận xét
    ```
   * [X] Xin được bán trong vòng 7 ngày

* [X] Chức năng người dùng sau khi đăng nhập (với vai trò là người bán):

   * [X] Đăng 1 sản phẩm lên đấu giá
    ```
    Nhập đủ thông tin: tên sản phẩm, tối đa 3 ảnh, giá khởi điểm, bước giá, giá mua ngay (nếu cần), thời gian đăng, mô tả (html)
    Có tự động gia hạn ko? Nếu có, khi có lượt đấu giá mới trước khi kết thúc 5 phút, sản phẩm tự động gia hạn thêm 10p.
    ```
   * [X] Xem chi tiết sản phẩm
   ```
   Cập nhật thông tin sản phẩm đã đăng
   Chỉ cho phép thêm thông tin mô tả ( Xem lịch sử ra giá => kick người mua ra khỏi sản phẩm)
   Người mua bị kick không tham gia đấu giá sản phẩm này được nữa
   Nếu người mua bị kick đang giữ giá, sản phẩm chuyển cho người mua có giá lớn nhất
   ```
   * [X] Quản lý hồ sơ cá nhân
   ```
   Xem danh sách sản phẩm mình đang đăng & còn hạn
   Xem danh sách sản phẩm đã có người mua (Được phép đánh giá +1 hoặc -1 người chiến thắng, có gửi kèm 1 đoạn nhận xét)
   ```
    
* [X] Chức năng người dùng sau khi đăng nhập (với vai trò là quản trị viên):
   * [X] Duyệt yêu cầu xin được bán của người dùng
   ```
   Xem danh sách người mua xin được bán
   Sắp xếp theo thời gian xin tăng dần
   ```
  
   * [X] Quản trị danh sách người dùng
   ```
   Xoá người dùng
   Reset mật khẩu người dùng
   ```
   * [X] Quản trị danh sách danh mục
   ```
   Thêm
   Xoá
   Sửa
  ```
* [X] Thao tác của hệ thống

   * [X] Với mỗi giao dịch “quan trọng”, hệ thống gửi 1 email cho các bên liên quan nhằm thông báo
   ```
   Ra giá thành công, giá sản phẩm được cập nhật
		Gửi người bán
		Gửi người ra giá
		Gửi người giữ giá trước đó (nếu có)
   Người mua bị kick
   Đấu giá kết thúc, không có người mua
  		Người bán
   Đấu giá kết thúc
		Người bán
		Người thắng
   ```









## Demo

Link ảnh GIF demo ứng dụng:

![Video Walkthrough](demo.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
