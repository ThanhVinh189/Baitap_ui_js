/**
 * Bài tập 1 : Tính tiền lương nhân viên
 * ** Đầu vào:
 *      - Lấy giá trị biến từ người dùng nhập số tiền lương từ ô Input
 *      - Lấy giá trị biến từ người dùng nhập số ngày làm việc từ ô Input
 * ** Xử lý:
 *      - Tạo biến tongLuong = 0;
 *      - tongLuong = lương ngày * số ngày làm;
 * ** Đầu ra:
 *      - Tạo biến result1 lấy kết quả từ biến tongLuong vào thẻ <p>
 *      - Hiện thị kết quả result1 ra thẻ p#pInform_1
 */
document.getElementById("btnTongLuong").onclick = function () {
  const luongNgay = document.getElementById("luongNgay").value * 1;
  const soNgayLam = document.getElementById("soNgayLam").value * 1;

  let tongLuong = 0;
  tongLuong = luongNgay * soNgayLam;

  let result1 = "";
  result1 += "<p>👉 " + tongLuong + "</p>";

  const pInform_1 = document.getElementById("pInform_1");
  pInform_1.innerHTML = result1;
};
