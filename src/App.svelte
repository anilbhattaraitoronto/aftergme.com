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
    import Sidebar from "./comps/ui/Sidebar.svelte";
    import Footer from "./comps/ui/Footer.svelte";

    const routes = {
        "/": Home,
        "/posts/postlist": PostList,
        "/posts/featured": FeaturedPosts,
        "/posts/postdetail/:id/:slug": PostDetail,
        "/posts/categoryposts/:category": CategoryPosts,
        "/posts/addpost": AddPost,
        "/auth/signup": Signup,
        "/auth/login": Login,
        "/auth/changepassword": ChangePassword,
        "/auth/forgetpassword": ForgetPassword,
    };

    let latestTitles = [
        {
            id: 1,
            slug: "new-title",
            title: "New title",
            postedDate: new Date(),
        },
    ];
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
        <div>
            <Sidebar {latestTitles} />
        </div>
    </div>
</main>
<footer>
    <Footer />
</footer>

<style>
    header {
        background: rgb(254, 254, 254);
        width: 100%;
        margin: auto;
        position: sticky;
        top: 0;
        padding: 0 16px;
        box-shadow: 0 1px 0 lightgray;
    }
    main {
        max-width: 1100px;
        margin: auto;
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-gap: 8px;
        padding: 16px;
        min-height: 70vh;
    }
    article,
    .sidebar {
        padding: 20px;
        box-shadow: 1px -1px 0 rgb(238, 236, 236);
    }

    footer {
        max-width: 1100px;
        margin: auto;
        text-align: center;
    }
    @media (max-width: 750px) {
        main {
            grid-template-columns: 1fr;
        }
    }
</style>
