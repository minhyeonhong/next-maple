'use client'

const Desktop = ({ children }) => {
    return (
        <>
            <header>헤더</header>
            <nav>데스크탑</nav>
            <main>{ children }</main>
            <footer>푸터</footer>
        </>
    );
};

export default Desktop;