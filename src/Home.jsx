import React from "react"

export function Home(){

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return(
        <>
        <h2>Заглушка</h2>
        <button onClick={logout}>Log out</button>
        </>
    )
}