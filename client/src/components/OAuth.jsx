import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';
const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate("/");

        } catch (error) {
            console.log("Could not sign in with Google");
        }
    };

    return (
        <button
            onClick={handleGoogleClick}
            className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out font-semibold mt-4"
        >
            <FaGoogle className="mr-2" />
            Continue with Google
        </button>
    );
};

export default OAuth;
