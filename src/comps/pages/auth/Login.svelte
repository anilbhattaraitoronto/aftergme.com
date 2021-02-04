<script>
    import { user } from "../../../stores/authStore.js";
    import { message } from "../../../stores/messageStore.js";
    import { push } from "svelte-spa-router";

    let email = "";
    let password = "";

    function login() {
        fetch("https://meroapi.merohouse.com/api/auth/aftergme/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    console.log(data.message);
                    $message = data.message;
                } else {
                    $user = data;
                    localStorage.setItem("user", JSON.stringify(data));
                    $message = "You have successfully logged in.";
                    push("/");
                }
            })
            .catch((err) => console.log("Error is: ", err));
    }
</script>

<svelte:head>
    <title>Login ➡️:: afterGME</title>
</svelte:head>
{#if $message}
    <p>{$message}</p>
{/if}
{#if !$user}
    <form on:submit|preventDefault={login}>
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="email" bind:value={email} id="email" />
        <label for="password">Password</label>
        <input type="password" bind:value={password} id="password" />
        <input type="submit" value="Login" />
    </form>
    <p>No account yet? Please <a href="#/auth/signup">Create Account</a></p>
{/if}
