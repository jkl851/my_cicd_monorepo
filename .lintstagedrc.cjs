// staged 파일 대상으로 동작
// prettier는 린트에 연결해 두었기 때문에 린트만 실행
module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint'],
};