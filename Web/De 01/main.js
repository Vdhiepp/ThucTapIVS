document.getElementById('button').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (e) {
    let file = e.target.files[0];

    //chỉ nhận file txt
    // if (!file.type.match('plain')) {
    //     alert("Vui lòng chọn một tệp .txt");
    //     return;
    // }

    //Tạo đối tượng FileReader để đọc nội dung của tệp tin
    let reader = new FileReader();

    // đếm từ trong file.txt
    // reader.onload = function(e) {
    //     let content = e.target.result;
    //     let words = content.trim().split(/\s+/).length;
    //     document.getElementById('button').innerText = `Số từ: ${words}`;
    // };

    //hiển thị tên file.txt thay cho chữ Chọn File
    let fileName = file.name;
    document.getElementById('button').innerText = fileName;

    reader.readAsText(file);
});

// Lấy tham chiếu đến phần tử chứa các phần tử .row
const container = document.querySelector('.container');

// Tạo một sự kiện click cho nút button
document.querySelector('.add').addEventListener('click', function() {
    // Sao chép nội dung của div .row
    var rowContent = document.querySelector('.second').innerHTML;
    
    // Tạo một div mới
    var newDiv = document.createElement('div');
    newDiv.classList.add('row');
    
    // Gán nội dung cho div mới từ rowContent
    newDiv.innerHTML = rowContent; 

    // Thêm đoạn mã sau vào phần tử mới được tạo
    var input = newDiv.querySelector('.inp');
    var button = newDiv.querySelector('.but');
 
    // Đặt giá trị mặc định cho button
    button.innerText = "?";

    // Chèn div mới vào sau div .row hiện tại
    document.querySelector('.row').parentNode.appendChild(newDiv);
});

// Sử dụng event delegation để xử lý sự kiện cho các phần tử .vd3 và .kbc-button
container.addEventListener('input', function(event) {
    const target = event.target;
  
    // Xử lý sự kiện cho input .yy.vd3
    if (target.classList.contains('inp')) {
        const input = target;
        const button = input.nextElementSibling;
        button.innerText = input.value;
    }
});