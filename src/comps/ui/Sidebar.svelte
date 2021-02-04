<script>
    export let latestTitles = undefined;
</script>

<ul>
    <h2>Latest Posts</h2>
    {#each latestTitles as post}
        <div>
            <li>
                <a href="#/posts/postdetail/{post.id}/{post.slug}"
                    >{post.title}</a
                >
            </li>
            <p>{post.postedDate}</p>
        </div>
    {/each}
</ul>

<style>
    div {
        border-bottom: 1px solid lightgray;
        padding-bottom: 16px;
    }
    li {
        list-style-type: none;
    }
</style>
