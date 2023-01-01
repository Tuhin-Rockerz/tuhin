const fetchData = async (config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("This Is Error")
    }
};

const postElements = document.getElementById(posts);

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/photos");
    posts.map((e) => {
        const postElement = document.createElement("div");
        postElement
            .classList
            .add("posts");
        postElement.innerHTML = `
        <h4 class="post-title"></h4>${e.title}</h4>
        <img class="post-body">${e.url}</img>
        `;
        postElements.appendChild(postElement);
    });

}

loadAllData();
