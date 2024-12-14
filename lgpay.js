let currentPage = 1;
function nextPage1() {
  document.getElementById('text1').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('text2').classList.remove('fade-out');
  }, 500);
}
function nextPage2() {
  document.getElementById('text2').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    document.getElementById('text2').classList.remove('fade-out');
  }, 500);
}
function nextPage3() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'block';
}
function nextPage4() {
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'block';
}
function alipayPayment() {
  document.getElementById("page5").style.display = "none";
  document.getElementById("page6").style.display = "block";
}
function wechatPayment() {
  document.getElementById("page5").style.display = "none";
  document.getElementById("page7").style.display = "block";
}
function lgPayment() {
  document.getElementById("page5").style.display = "none";
  document.getElementById("page6").style.display = "block";
  setTimeout(() => {
    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "block";
  }, 1000);
}
function lgLogin() {
  const username = document.getElementById('lgUsername').value;
  const password = document.getElementById('lgPassword').value;
  // 使用fetch API获取文本数据（实际应用中需处理跨域等问题）
  fetch('https://Apk-development-LGKJ.github.io/lgpay.html')
    .then(response => response.text())
    .then(data => {
          const lines = data.split('\n');
          for (let i = 0; i < lines.length; i++) {
              const userInfo = lines[i].split(' ');
              if (userInfo[1] == username && userInfo[2] == password) {
                  if (userInfo[5] == "00") {
                      document.getElementById('page7').style.display = 'none';
                      document.getElementById('page8').style.display = 'book';
                      setTimeout(() => {
                          document.getElementById('page8').style.display = 'none';
                          // 这里可以添加登录成功后进入的新页面相关逻辑
                      }, 700);
                  } else {
                      alert('账号已被封禁');
                  }
                  return;
              }
          }
          alert('账号或密码错误');
      });
}
function registerPage() {
  document.getElementById('page7').style.display = 'none';
  document.getElementById('page8').style.display = 'block';
}
function downloadApp() {
  window.location.href = "https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1734182755071/LG%20%E8%B4%A6E5%8F%B7%E6%B3%A8E5868C.apk";
}
function backToLogin() {
  document.getElementById('page8').style.display = 'none';
  document.getElementById('page7').style.display = 'block';
}
