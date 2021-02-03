<header>
    <h1><a href="#/"><img src="images/aftergmelogo1.png" alt="" /></a></h1>
    <nav>
        <ul>
            <a href="#/" class="home-link">Home</a>
            <span
                >Account &#128315;
                <div class="drop-down">
                    <a href="#/auth/login">Login</a>
                    <a href="#/auth/changepassword">Change Password</a>
                    <a href="#/posts/addpost">Add Post</a>
                </div>
            </span>
        </ul>
    </nav>
</header>

<style>
    header {
        max-width: 1100px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    img {
        width: 50px;
        border: 1px solid rgba(211, 211, 211, 0.336);
        margin-top: 6px;
    }
    .home-link {
        display: inline-block;
        margin-right: 24px;
    }
    span {
        position: relative;
        cursor: pointer;
    }
    .drop-down {
        position: absolute;
        top: 16px;
        right: 8px;
        display: flex;
        flex-direction: column;
        text-align: right;
        transform: scale(0);
        transition: 250ms all ease-in-out;
        background: lightgray;
        z-index: 20;
        width: 150px;
        margin: auto;
        text-align: center;
    }
    .drop-down > a {
        padding: 16px;
    }
    span:hover > .drop-down {
        transform: scale(1);
    }
</style>
