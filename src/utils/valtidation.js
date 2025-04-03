/**
 * 입력하는 정보의 유효성을 검사하는 함수를 모아둔 파일입니다.
 * 
 * + 현재 테스트용으로 글자수 제한은 주석 처리함. 추후 테스트가 끝나면 글자수가 제한된 로직으로 구현하기 +
 */

/**
 * 닉네임 유효성 검증 (한글, 영어, 숫자 가능)
 * @param {string} nickname 
 * @returns {boolean}
 */
export const isValidNickname = (nickname) => {
    const nicknameRegex = /^[가-힣a-zA-Z0-9]+$/
    // const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,16}$/
    return nicknameRegex.test(nickname)
}

/**
 * 아이디 유효성 검증 (소문자 영어, 숫자만 가능)
 * @param {string} id 
 * @returns {boolean}
 */
export const isValidId = (id) => {
    const idRegex = /^[a-z0-9]+$/
    // const idRegex = /^[a-z0-9]{4,16}$/
    return idRegex.test(id)
}

/**
 * 비밀번호 유효성 검증 (영어, 숫자, 특수문자 가능)
 * @param {string} password 
 * @returns {boolean}
 */
export const isValidPassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9.,~!@#$%^&*]+$/
    // const passwordRegex = /^[a-zA-Z0-9.,~!@#$%^&*]{8,20}$/
    return passwordRegex.test(password)
}