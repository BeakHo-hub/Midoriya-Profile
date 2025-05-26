<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>자바스크립트 초심자 예제</title>
</head>
<body>
  <h1>자바스크립트 입문</h1>
  <button onclick="sayHello()">클릭해보세요</button>
  <p id="message"></p>

  <script>
    function sayHello() {
      const name = "김지원 해병님";
      document.getElementById("message").textContent = name + ", 안녕하세요!";
    }
  </script>
</body>
</html>
