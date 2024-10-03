import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";


const ref = collection(db, 'posts')

const Posts = () => {

  const [data, isLoading] =  useCollectionData(ref);

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

    return (
        <div className="flex flex-col gap-4 mt-12 ">
            {data.map(post => (
                <div id={post.id} className="p-4 rounded-md bg-gray-200" >
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
};

export default Posts;