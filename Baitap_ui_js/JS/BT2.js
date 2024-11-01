/**
 * Bài tập 2: Tính giá trị trung bình
 * ** Đầu vào:
 *      - Tạo 5 biến num_1, num_2, num_3, num_4, num_5
 *      - Lấy giá trị biến từ người dùng nhập số từ 5 ô Input
 * ** Xử lý:
 *      - Tạo biến average = 0;
 *      - Tính average = (num_1 + num_2 + num_3 + num_4 + num_5) /5;
 * ** Đầu ra:
 *      - Tạo biến result2 lấy kết quả từ biến average vào thẻ <p>
 *      - Hiện thị kết quả result2 ra thẻ p#pInform_2
 */

document.getElementById("btnAverage").onclick = function () {
  const num_1 = document.getElementById("num_1").value * 1;
  const num_2 = document.getElementById("num_2").value * 1;
  const num_3 = document.getElementById("num_3").value * 1;
  const num_4 = document.getElementById("num_4").value * 1;
  const num_5 = document.getElementById("num_5").value * 1;

  let average = 0;
  average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

  let result2 = "";
  result2 += "<p>👉 " + average + "</p>";

  const pInform_2 = document.getElementById("pInform_2");
  pInform_2.innerHTML = result2;
};
