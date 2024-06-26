import { doSignOut } from "../firebase/auth";
import "./Header.css";

const Header = () => {
    const handleLogout = () => {
        doSignOut();
    }

    return (
        <header className="bg-gray-800 w-full text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Card Chasers</h1>
            <div className="flex items-center space-x-2">
                <p className="cursor-pointer hover:text-sky-600" onClick={handleLogout}>Logout</p>
            </div>
        </header>
    )
}

export default Header;