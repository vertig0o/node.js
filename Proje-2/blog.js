let blog = [
  { name: "Blog 1", ID: 1 },
  { name: "Blog 2", ID: 2 },
  { name: "Blog 3", ID: 3 },
];

const listPosts = () => {
  blog.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    blog.push(newPost);
    resolve("Post eklendi.");
    reject("Post eklenemedi.");
  });
};

async function blogControl(post) {
  try {
    await addPost(post);
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

blogControl({ name: "Blog 4", ID: 4 });
