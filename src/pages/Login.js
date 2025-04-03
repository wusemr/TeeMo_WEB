import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    /**
     * 
     * @returns 
     */
    const signInButtonHandler = async () => {
        if (!id) {
            alert("아이디를 입력하세요.")
            return
        }
        if (!password) {
            alert("비밀번호를 입력하세요.")
            return
        }

        setIsLoading(true)

        try {
            // const response = await fetch(`${process.env.REACT_APP_UBUNTU_SERVER}/api/signin`, {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ id, pw: password }),
            // })

            // if (!response.ok) {
            //     const data = await response.json()
            //     throw new Error(data.message || "로그인 실패")
            // }

            navigate("/main")
            // alert("로그인 성공!")
            setId("")
            setPassword("")
            // TODO: 페이지 이동 로직 추가
        } catch (error) {
            alert(`로그인 실패: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    /**
     * 
     */
    const signUpButtonHandler = () => {
        navigate("/signup")
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
                    onClick={signInButtonHandler}
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
                    {isLoading ? "로그인 중..." : "로그인"}
                </button>
                <a href="/signup"
                    onClick={signUpButtonHandler}
                    style={{
                    marginTop: "10px",
                    color: "#95ce67",
                    textDecoration: "none",
                    fontSize: "16px"
                }}>
                    회원가입
                </a>
            </div>
        </div>
    )
}

export default Login