/**
 * Bài tập 5 : Tính tổng 2 ký số
 * ** Đầu vào:
 *      - Lấy giá trị biến number từ người dùng nhập số từ ô Input
 * ** Xử lý:
 *      - Tạo biến sum = 0;
 *      - Lấy số ở hàng đơn vị và số ở hàng chục từ biến number
 *      - Hàm lấy số hàng đơn vị : let so_hang_dv = number % 10;
 *      - Hàm lấy số hàng chục (lấy số nguyên) : let so_hang_chuc = Math.floor(number / 10);
 *      - sum = so_hang_dv + so_hang_chuc;
 * ** Đầu ra:
 *      - Tạo biến result5 lấy kết quả từ biến sum vào thẻ <p>
 *      - Hiện thị kết quả result5 ra thẻ p#pInform_5
 */
document.getElementById("btnNumber").onclick = function () {
  const number = document.getElementById("number").value * 1;

  sum = 0;
  let so_hang_dv = number % 10;
  let so_hang_chuc = Math.floor(number / 10);

  sum = so_hang_dv + so_hang_chuc;

  let result5 = "";
  result5 += "<p>👉 " + sum + "</p>";

  const pInform_5 = document.getElementById("pInform_5");
  pInform_5.innerHTML = result5;
};
