<script>
    import { user } from "../../../stores/authStore.js";
    import { push } from "svelte-spa-router";
    import { message } from "../../../stores/messageStore";

    let email = "";
    let fullname = "";
    let password = "";
    let confirmPassword = "";

    function signup() {
        fetch("https://meroapi.merohouse.com/api/auth/aftergme/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                fullname,
                password,
                confirmPassword,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    $message = data.message;
                } else {
                    $message = "Something went wrong. ";
                }
            })
            .catch((err) => console.log(err));
    }
</script>

<svelte:head>
    <title>Sign Up ⬅️ :: afterGME</title>
</svelte:head>

{#if $message}
    <p>{$message}</p>
{/if}

{#if !$user}
    <form on:submit|preventDefault={signup}>
        <h2>Create Account</h2>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} />
        <label for="fullname">Full Name</label>
        <input type="fullname" id="fullname" bind:value={fullname} />
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
        <label for="confirmPassword">Retype Password</label>
        <input
            type="password"
            id="confirmPassword"
            bind:value={confirmPassword}
        />
        <input type="submit" value="Create Account" />
    </form>
    <p>Already have an account? Please <a href="#/auth/login">Login</a></p>
{/if}
