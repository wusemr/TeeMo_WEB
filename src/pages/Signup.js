import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { isValidNickname, isValidId, isValidPassword } from "../utils/valtidation.js"

const Signup = () => {
    const navigate = useNavigate()

    const [nickname, setNickname] = useState("")
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState(null)
    const [profilePreview, setProfilePreview] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fileInputRef = useRef(null)

    /**
     * 프로필 사진 파일 선택 처리
     * @param {*} e 
     */
    const handleProfileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setProfilePic(file)
            setProfilePreview(URL.createObjectURL(file))
        }
    }

    /**
     * 프로필 사진 클릭 처리
     */
    const handleImageClick = () => {
        fileInputRef.current.click()
    }

    /**
     * 프로필 사진 삭제 처리
     */
    const handleImageRemove = () => {
        setProfilePic(null)
        setProfilePreview(null)
        fileInputRef.current.value = ""
    }

    /**
     * 회원가입 처리
     */
    const signUpHandler = async () => {
        if (!nickname) {
            alert("닉네임을 입력하세요.")
            return
        }
        if (!isValidNickname(nickname)) {
            alert("닉네임은 한글, 영어, 숫자만 사용할 수 있습니다.")
            return
        }
        if (!id) {
            alert("아이디를 입력하세요.")
            return
        }
        if (!isValidId(id)) {
            alert("아이디는 영어(대문자 제외)와 숫자만 사용할 수 있습니다.")
            return
        }
        if (!password) {
            alert("비밀번호를 입력하세요.")
            return
        }
        if (!isValidPassword(password)) {
            alert("비밀번호는 영어, 숫자, 특수문자(.,~!@#$%^&*)만 사용할 수 있습니다.")
            return
        }
        if (!profilePic) {
            alert("프로필 사진을 선택하세요.")
            return
        }

        setIsLoading(true)

        try {
            alert("회원가입 성공!")
            navigate("/")
        } catch (error) {
            alert(`회원가입 실패: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <img src="/images/app_logo.png" alt="App Logo" style={{ width: "150px", marginBottom: "20px" }} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
                {
                    profilePreview ? (
                        <div
                            style={{
                                width: "200px",
                                height: "230px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={profilePreview}
                                alt="프로필 사진"
                                onClick={handleImageClick}
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    border: "none"
                                }}
                            />
                            <button
                                onClick={handleImageRemove}
                                style={{
                                    padding: "7px 12px",
                                    backgroundColor: "#00000000",
                                    color: "#555555",
                                    border: "none",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    cursor: "pointer"
                                }}
                            >
                                사진 삭제
                            </button>
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "200px",
                                height: "230px",
                                flexDirection: "column"
                            }}
                        >
                            <button
                                onClick={handleImageClick}
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "100%",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    backgroundColor: "#f0f0f0",
                                    border: "2px dashed #ccc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#555"
                                }}
                            >
                                사진 추가
                            </button>
                        </div>
                    )
                }
                {/* 숨겨진 파일 업로드 input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleProfileChange}
                    style={{ display: "none" }}
                />
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="닉네임"
                    style={{
                        width: "250px",
                        padding: "10px",
                        margin: "10px 0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px"
                    }}
                />
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디"
                    style={{
                        width: "250px",
                        padding: "10px",
                        margin: "10px 0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px"
                    }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    style={{
                        width: "250px",
                        padding: "10px",
                        margin: "10px 0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px"
                    }}
                />
                <button
                    onClick={signUpHandler}
                    disabled={isLoading}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: isLoading ? "#ccc" : "#95ce67",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "18px",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                >
                    {isLoading ? "회원가입 중..." : "회원가입"}
                </button>
                <a href="/login"
                    style={{
                        marginTop: "10px",
                        color: "#95ce67",
                        textDecoration: "none",
                        fontSize: "16px"
                    }}>
                    로그인 화면으로
                </a>
            </div>
        </div>
    )
}

export default Signup