<header>
    <a href="#/"><img src="images/aftergmelogo1.png" alt="" /></a>
    <h1><a href="#/">after GME</a></h1>
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
        align-items: center;
        text-align: center;
    }
    h1 {
        text-align: center;
    }
    h1::after {
        content: "wallstreetbets and future stock trading";
        display: block;
        text-align: center;
        font-size: 0.4em;
        color: red;
        font-weight: 300;
        word-spacing: 5px;
        letter-spacing: 1px;
    }
    img {
        width: 60px;
        border: 1px solid rgba(211, 211, 211, 0.336);
    }
    .home-link {
        display: inline-block;
        margin-right: 24px;
    }
    span {
        position: relative;
        cursor: pointer;
        text-align: center;
    }
    .drop-down {
        position: absolute;
        top: 16px;
        right: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
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
    @media (max-width: 600px) {
        h1 {
            display: none;
        }
    }
</style>
