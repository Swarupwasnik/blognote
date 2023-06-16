import Post from "../post/Post";
import "../posts/posts.css";

export default function Posts({posts}) {
    return (
      <>
      <div className="book">
      { posts && posts .map((p) => (
<>
<Post key={p.id} post={p}/>
</>
      )
    )}
     


      
      </div>
      </>
    );
  }