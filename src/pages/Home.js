import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {auth} from "../firebase";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";


const Home = () => {

    const [user, isLoading] =useAuthState(auth);

    const handleSignOut = useCallback(() => {
        signOut(auth);
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return <div className="max-w-md py-12 mx-auto">
        <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl my-3">Kullanıcı Bilgileri</h1>
      <p>Kullanıcı Adı: {user.displayName}</p>
      <p>E-mail Adresi: {user.email}</p>
      </div>
           <button className="p-2 bg-red-500 rounded-full" onClick={handleSignOut}>Çıkış Yap</button>
        </div>
        <AddPost />
        <Posts />
         </div>
};

export default Home;