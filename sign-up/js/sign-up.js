function check(){
  // 입력한 내용을 사라지지 않게 유지하는 함수
  event.preventDefault();
  const userId = document.querySelector("#uid");
  const email = document.querySelector("#email");
  const password = document.querySelector('#pwd1');
  const confirmPassword = document.querySelector('#pwd2');
  const path = document.querySelector('#path');
  const memo = document.querySelector('#memo');
  const mail_y = document.querySelector('#mail_y');
  const mailling = document.getElementsByName('mailling');

  // 1. 아이디가 4자~10자 사이인지 확인
  if(userId.value.length < 4 || userId.value.length > 10){
    alert('아이디는 4자~10자 사이입니다.');
    uderId.foucs();
  }

  // 2. 이메일이 비었는지 확인
  if(email.value.length == 0) {
    alert('이메일이 비었습니다. 입력해 주세요');
    // 비우고 
    email.value = '';
    // 포커스 주기
    email.focus();
  }

  // 3. 비밀번호와 비밀번호 확인 두 값이
  // 같은지 확인
  if(password.value !== confirmPassword.value){
    alert('비밀번호가 다릅니다. 확인하세요');
    confirmPassword.value='';
    confirmPassword.focus;
  }

  // 메일 수신 여부를 검사 -> 리턴값 결정
  let mailReceive;

  mailling.forEach((x) => {
    if(x.checked){
      mailReceive = x.value;
    }
  });

  // alert(uderId.value);
  console.log('User-ID : ' + userId.value);
  console.log('Email : ' + email.value);
  console.log('Password : ' + password.value);
  console.log('가입경로 : ' + path.value);
  console.log('메모 : ' + memo.value);
  console.log('mailReceive : ' + mailReceive);
  console.log('OK');
}