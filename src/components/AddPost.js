import { useState, useCallback } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


const ref = collection (db, "posts");

const AddPost = () => {

    const [body, setBody] = useState("");
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        addDoc(ref, {
            body: body,
        });
    }, [body]);


    return (
        <div className="mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" placeholder="Birşeyler yaz..." className="bg-gray-100 p-8 mt-4 rounded-md" value={body} onChange={(e) => setBody(e.currentTarget.value)} />
                <input type="submit" value="Yorum Yap" className="bg-amber-500 p-4 rounded-full mt-4 cursor-pointer" />
            </form>
        </div>
    )
};

export default AddPost;