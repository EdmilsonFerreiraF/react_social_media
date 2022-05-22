const makePosts = (n) => {
    // returns n number of todo items
    // default is 15
    const num = n || 15;
    const posts = [];
    for (let i = 0; i < num; i++) {
        posts.push({
            id: i,
            userId: "6198494ec6ece6cbe6cdae4e",
            description: "post_description",
            image: "2d57d3b6-7a00-457b-9d3b-7b642cbdaf49.jpeg",
            likes: 0,
        });
    }
    return posts;
};

export const posts = makePosts(200);