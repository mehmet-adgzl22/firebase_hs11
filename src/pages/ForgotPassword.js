import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from './../firebase';

const ForgotPassword =() => {

const [email, setEmail] = useState("");


const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if(!email) {
        return;
    }

    sendPasswordResetEmail(auth,email).then(()=> {
        alert("Şifre Sıfırlama e-postası Başarıyla Gönderildi ! Lütfen Mesaj Kutunuzu Kotrol Edin.")
    }).catch((e) => {
        console.log(e);
        
    });

}, [email]);

    return (
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl text-center">Parolanızı mı unuttunuz?</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <input className="p-4 bg-gray-200 rounded-md "  type="email" placeholder="email adresinizi giriniz" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input className="p-4 bg-orange-500 rounded-full" type="submit" value="Şifre Sıfırlama e-postası Gönder" />

            <Link to="/sign-in" className="ml-auto" >Oturum sayfasına geri dön</Link>
            </form>
        </div>
    )
};

export default ForgotPassword;