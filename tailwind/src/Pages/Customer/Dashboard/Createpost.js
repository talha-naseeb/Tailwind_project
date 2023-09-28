import React, { useState, useEffect } from "react";

function Createpost() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [postIdCounter, setPostIdCounter] = useState(1);
  const [editPostId, setEditPostId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
      const maxId = Math.max(...storedPosts.map((post) => post.id), 0);
      setPostIdCounter(maxId + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleCancelImage = () => {
    setSelectedImage(null);
  };

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = () => {
    if ((postText.trim() !== "" || selectedImage !== null) && editPostId === null) {
      const newPost = {
        id: postIdCounter,
        text: postText,
        image: selectedImage ? URL.createObjectURL(selectedImage) : null,
      };
      setPosts([...posts, newPost]);
      setPostText("");
      setSelectedImage(null);
      setPostIdCounter(postIdCounter + 1);
    } else if (editPostId !== null) {
      const updatedPosts = posts.map((post) => (post.id === editPostId ? { ...post, text: editedText } : post));
      setPosts(updatedPosts);
      setEditPostId(null);
      setEditedText("");
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleEditPost = (postId, postText) => {
    setEditPostId(postId);
    setEditedText(postText);
  };

  return (
    <div className='min-h-screen '>
      <div className='w-full sm:w-1/2 mx-auto mt-1'>
        <div className='p-4 bg-gray-300 custom-shadow rounded-lg shadow-lg'>
          <div className='text-xl custom-shadow bg-white p-4 rounded-lg'>Create Posts</div>
          <div className='mt-3'>
            <textarea
              rows='8'
              cols='40'
              value={editPostId !== null ? editedText : postText}
              onChange={handlePostChange}
              placeholder='Write your post here...'
              className='w-full p-2 border rounded-lg focus:outline-none'
            ></textarea>
          </div>
          <input type='file' accept='image/*' onChange={handleImageChange} className='mt-2' />
          {selectedImage && (
            <div className='mt-2 flex justify-center items-center'>
              <img src={URL.createObjectURL(selectedImage)} alt='Selected' className='max-w-full max-h-32 rounded-lg' style={{ display: "block", margin: "auto" }} />
            </div>
          )}
          <button className='bg-blue-200 px-2 rounded-lg hover:bg-green-300 m-2' onClick={handlePostSubmit}>
            {editPostId !== null ? "Update" : "Post"}
          </button>
          {editPostId !== null && (
            <button onClick={() => setEditPostId(null)} className='bg-red-200 px-2 rounded-lg hover:bg-red-300 m-2'>
              Cancel Edit
            </button>
          )}
          <button onClick={handleCancelImage} className='bg-red-200 px-2 rounded-lg hover:bg-red-300 m-2'>
            Cancel
          </button>
        </div>
      </div>

      <div className='  justify-center mt-3 flex-wrap'>
        {posts.map((post) => (
          <div key={post.id} className='rounded-2xl m-1 bg-gray-300 w-full sm:w-1/2 mx-auto mt-3'>
            <div className='mt-4 text-xl p-3 custom-shadow bg-gray-300 rounded-lg'>
              {editPostId === post.id ? (
                <textarea rows='8' cols='30' value={editedText} onChange={(e) => setEditedText(e.target.value)} className='w-full p-2 border rounded-lg focus:outline-none'></textarea>
              ) : (
                <p className='custom- my-3 p-3 bg-white rounded-lg '>{post.text}</p>
              )}
              {post.image && <img src={post.image} alt='Posted' className='max-w-full  max-h-32 rounded-lg' style={{ display: "block", margin: "auto" }} />}
              {editPostId === post.id ? (
                <button className='bg-blue-200 px-2 rounded-lg hover:bg-green-300 m-2' onClick={() => handlePostSubmit()}>
                  Update
                </button>
              ) : (
                <div className='mt-2'>
                  <button onClick={() => handleEditPost(post.id, post.text)} className='bg-blue-200 text-[16px] px-2 rounded-lg hover:bg-green-300 m-2'>
                    Edit
                  </button>
                  <button onClick={() => handleDeletePost(post.id)} className='bg-red-200 text-[16px] px-2 rounded-lg hover:bg-red-300 m-2'>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Createpost;
