export default function Header() {
    return (
        <header className="bg-[#10316b] flex flex-col justify-center items-center shadow-md">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} width={200} alt="logo schoolpass" />
        </header>
    )
}
