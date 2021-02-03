<script>
    import Router from "svelte-spa-router";
    import Home from "./comps/pages/Home.svelte";

    const routes = {
        "/": Home,
    };
</script>

<main>
    <nav>
        <a href="#/">Home</a>
    </nav>
    <Router {routes} />
</main>

<style>
    main {
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
</style>
