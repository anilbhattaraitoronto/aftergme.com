<script>
    import Router from "svelte-spa-router";
    import Home from "./comps/Home.svelte";
    import PostList from "./comps/pages/posts/PostList.svelte";
    import PostDetail from "./comps/pages/posts/PostDetail.svelte";
    import CategoryPosts from "./comps/pages/posts/CategoryPosts.svelte";
    import FeaturedPosts from "./comps/pages/posts/FeaturedPosts.svelte";
    import AddPost from "./comps/pages/posts/AddPost.svelte";
    import Signup from "./comps/pages/auth/Signup.svelte";
    import Login from "./comps/pages/auth/Login.svelte";
    import ChangePassword from "./comps/pages/auth/ChangePassword.svelte";
    import ForgetPassword from "./comps/pages/auth/ForgetPassword.svelte";
    //UI components
    import Nav from "./comps/ui/Nav.svelte";
    import Footer from "./comps/ui/Footer.svelte";

    const routes = {
        "/": Home,
        "/posts/postlist": PostList,
        "/posts/featured": FeaturedPosts,
        "/posts/postdetail/:slug/:id": PostDetail,
        "/posts/categoryposts/:category": CategoryPosts,
        "/posts/addpost": AddPost,
        "/auth/signup": Signup,
        "/auth/login": Login,
        "/auth/changepassword": ChangePassword,
        "/auth/forgetpassword": ForgetPassword,
    };
</script>

<svelte:head>
    <title>$ Welcome:: afterGME</title>
</svelte:head>
<header>
    <Nav />
</header>
<main>
    <article>
        <Router {routes} />
    </article>
    <div class="sidebar">
        <h2>Sidebar</h2>
    </div>
</main>
<footer>
    <Footer />
</footer>

<style>
    header {
        background: lightgray;
        width: 100%;
        margin: auto;
        position: sticky;
        top: 0;
    }
    main {
        max-width: 1100px;
        margin: auto;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 8px;
        padding: 20px;
    }

    footer {
        max-width: 1100px;
        margin: auto;
    }
    footer {
        text-align: center;
    }
    @media (max-width: 600px) {
        main {
            grid-template-columns: 1fr;
        }
    }
</style>
