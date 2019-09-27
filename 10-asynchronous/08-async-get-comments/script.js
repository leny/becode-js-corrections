/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const posts = await window.lib.getPosts();

        const postsComments = await Promise.all(
            posts.map(post => window.lib.getComments(post.id)),
        );

        postsComments.forEach((comments, i) => {
            posts[i].comments = comments;
        });

        console.log(posts);
    });
})();
