/**
 * Bài tập 4 : Tính diện tích, chu vi hình chữ nhật
 * ** Đầu vào:
 *      - Lấy giá trị biến chieuDai từ người dùng nhập số chiều dài từ ô Input
 *      - Lấy giá trị biến chieuRong từ người dùng nhập số chiều rộng từ ô Input
 * ** Xử lý:
 *      - Tạo biến tinhDienTich = 0; và biến tinhChuVi = 0;
 *      - tinhDienTich = chieuDai * chieuRong;
 *      - tinhChuVi = (chieuDai + chieuRong) * 2;
 * ** Đầu ra:
 *      - Tạo biến result4 lấy kết quả từ biến tinhDienTich và biến tinhChuVi vào thẻ <p>
 *      - Hiện thị kết quả result4 ra thẻ p#pInform_4
 */
document.getElementById("btnDienTichChuVi").onclick = function () {
  const chieuDai = document.getElementById("chieuDai").value * 1;
  const chieuRong = document.getElementById("chieuRong").value * 1;

  let tinhDienTich = 0;
  let tinhChuVi = 0;
  tinhDienTich = chieuDai * chieuRong;
  tinhChuVi = (chieuDai + chieuRong) * 2;

  let result4 = "";
  result4 += "<p>👉 " + "Diện tích: " + tinhDienTich + " cm" + ";" + " Chu vi: " + tinhChuVi + " cm" + "</p>";
  
  const pInform_4 = document.getElementById("pInform_4");
  pInform_4.innerHTML = result4;
};
