<script>
    import { user } from "../../stores/authStore.js";
    import { push } from "svelte-spa-router";
</script>

<header>
    <a href="#/"><img src="images/aftergmelogo1.png" alt="" /></a>
    <h1><a href="#/">after-GME</a></h1>
    <nav>
        <ul>
            <a href="#/" class="home-link">Home</a>
            <span
                >Account &#128315;
                <div class="drop-down">
                    {#if !$user}
                        <a href="#/auth/signup">Create Account</a>
                        <a href="#/auth/login">Login</a>
                    {:else}
                        <a href="#/auth/changepassword">Change Password</a>
                        <span
                            on:click={() => {
                                localStorage.removeItem("user");
                                $user = null;
                                push("/");
                            }}>Logout</span
                        >
                    {/if}

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
        transition: 250ms all ease-in-out;
    }
    h1::after {
        content: "wallstreetbets and future of stock trading";
        display: block;
        text-align: center;
        font-size: 0.4em;
        color: green;
        font-weight: 300;
        word-spacing: 5px;
        letter-spacing: 1px;
        padding: 8px 0;
        font-style: italic;
    }
    h1 > a {
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
        color: rgb(11, 56, 100);
    }
    .drop-down {
        position: absolute;
        top: 20px;
        right: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        transform: scale(0);
        transition: 250ms all ease-in-out;
        background: rgb(254, 254, 254);
        box-shadow: 1px 1px 0 lightgray;
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
