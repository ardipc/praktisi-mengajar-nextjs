import React, { useEffect, useState, Fragment, Suspense } from "react";
import Spinner from "react-loading-indicators";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <ul>
        {
          posts.map((post, idx) => (
            <li key={idx}>
              <h1>{post.title}</h1>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

// React Component to render
const Detail = () => {
  return (
    <div>
      <h1>My Posts</h1>

      <Suspense fallback={<Spinner />}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Detail;