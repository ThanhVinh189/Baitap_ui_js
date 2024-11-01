/**
 * Bài tập 3 : Quy đổi tiền
 * ** Đầu vào:
 *      - tạo biến tienViet = 23500
 *      - Lấy giá trị biến tienUSD từ người dùng nhập số tiền USD từ ô Input
 * ** Xử lý:
 *      - Tạo biến quyDoiTien = 0
 *      - Tính quyDoiTien = tienViet * tienUsd
 * ** Đầu ra:
 *      - Tạo biến result3 lấy kết quả từ biến quyDoiTien vào thẻ <p>
 *      - Hiện thị kết quả result3 ra thẻ p#pInform_3
 */
document.getElementById("btnDoiTien").onclick = function () {
  const tienViet = 23500;
  const tienUsd = document.getElementById("tienUsd").value * 1;

  let quyDoiTien = 0;
  quyDoiTien = tienViet * tienUsd;

  let result3 = "";
  result3 += "<p>👉 " + new Intl.NumberFormat("vn-VN").format(quyDoiTien) + " VNĐ" + "</p>";

  const pInform_3 = document.getElementById("pInform_3");
  pInform_3.innerHTML = result3;
};
