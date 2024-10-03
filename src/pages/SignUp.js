import { useCallback, useState } from "react";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = useCallback((e) => {
    e.preventDefault();


    if(!email || !password) {
        return;
    }


    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
        updateProfile(auth.user, {displayName:name});
    })
    .catch((e) => {
        console.log(e);
    });

}, [name, email, password]
);
    return (
        <div className="max-w-md mx-auto py-12" >
            <h1 className="text-3xl text-center">Yeni Hesap Oluştur</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input className="p-4 bg-gray-200 rounded-md" type="name" placeholder="Lütfen isminizi girin" value={name} onChange={(e) => setName(e.currentTarget.value)} />

                <input className="p-4 bg-gray-200 rounded-md" type="email" placeholder="email adresinizi girin" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />


                <input className="p-4 bg-gray-200 rounded-md " type="password" placeholder="şifrenizi oluşturun" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                <button type="submit" className="p-4 bg-red-500 rounded-full" >Kayıt Ol</button>
       <Link to="/sign-in">Zaten bir hesabınız var mı? Giriş için Tıklayın</Link>

            </form>
        </div>
    )
    
};

export default SignUp;