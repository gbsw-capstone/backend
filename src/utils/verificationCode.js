/** 인증 코드 6자리 생성 후 반환 */

const codeList = { };

const createCode = (email) => {
  const code = Math.random().toString(36).substring(2, 8);
  codeList[email] = code;

  setTimeout(() => {
    delete codeList[email];
  }, 300000);

  return code;
}

const deleteCode = (email) => {
  delete codeList[email];
}

const verifyCode = (email, code) => {
  if(codeList[email] === code) return delete codeList[email];
  return false;
}

export default { createCode, deleteCode, verifyCode };