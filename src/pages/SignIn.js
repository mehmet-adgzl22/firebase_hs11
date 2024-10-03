import { useState, useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



const handleSubmit = useCallback ((e) => {
    e.preventDefault();

    if(!email || !password) {
        return;
    }
    signInWithEmailAndPassword(auth, email, password).catch((e) => {
        console.log(e);
        
    });
},
 [email, password]); 


    return (
        <div className="max-w-md mx-auto py-12">
            <h1  className="text-3xl text-center">Üyelik Girişi</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input className="p-4 bg-gray-200 rounded-md" type="email" placeholder="email adresinizi girin" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <input className="p-4 bg-gray-200 rounded-md" type="password" placeholder="email şifrenizi girin" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                <Link to="/forgot-password" className="ml-auto text-decoration-line: underline" >Şifremi unuttum</Link>
                <button type="submit" className="p-4 bg-green-600 rounded-full">Giriş Yap</button>
                <Link to="/sign-up" className="text-center" >Hesabınız mı yok? Kayıt için Tıklayın</Link>
            </form>
        </div>
    );
};

export default SignIn;