// HTML elements ko pakadna
const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const posts = document.getElementById("posts");
const darkModeBtn = document.getElementById("darkModeBtn");

// Local Storage se saved posts load karo
let savedPosts =
JSON.parse(localStorage.getItem("posts")) || [];

// Post create karne wala function
function createPost(text){

    const newPost =
    document.createElement("div");

    newPost.classList.add("post");

    newPost.innerHTML = `
        <h4>SHIVI</h4>

        <p>${text}</p>

        <button class="like-btn">
            👍 0 Likes
        </button>

        <button class="comment-btn">
            💬 Comment
        </button>

        <button class="delete-btn">
            Delete
        </button>

        <div class="comments"></div>
    `;

    posts.prepend(newPost);

    // LIKE BUTTON

    const likeBtn =
    newPost.querySelector(".like-btn");

    let likes = 0;

    likeBtn.addEventListener("click",()=>{

        likes++;

        likeBtn.textContent =
        `👍 ${likes} Likes`;

    });

    // COMMENT BUTTON

    const commentBtn =
    newPost.querySelector(".comment-btn");

    const comments =
    newPost.querySelector(".comments");

    commentBtn.addEventListener("click",()=>{

        const commentInput =
        document.createElement("input");

        commentInput.placeholder =
        "Write a comment";

        commentInput.classList.add(
            "comment-box"
        );

        comments.append(commentInput);

        commentInput.addEventListener(
            "keydown",
            (e)=>{

                if(e.key === "Enter"){

                    const comment =
                    document.createElement("div");

                    comment.classList.add(
                        "comment"
                    );

                    comment.textContent =
                    commentInput.value;

                    comments.append(comment);

                    commentInput.remove();
                }

            }
        );

    });

    // DELETE BUTTON

    const deleteBtn =
    newPost.querySelector(".delete-btn");

    deleteBtn.addEventListener("click",()=>{

        newPost.remove();

    });

}

// Purane posts load karo
savedPosts.forEach(postText=>{

    createPost(postText);

});

// New post add karo

postBtn.addEventListener("click",()=>{

    const text =
    postInput.value.trim();

    if(text === ""){
        return;
    }

    createPost(text);

    savedPosts.push(text);

    localStorage.setItem(
        "posts",
        JSON.stringify(savedPosts)
    );

    postInput.value = "";

});

// DARK MODE

darkModeBtn.addEventListener("click",()=>{

    document.body.classList.toggle(
        "dark-mode"
    );

});
