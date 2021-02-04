<script>
    import { user } from "../../../stores/authStore.js";
    import { message } from "../../../stores/messageStore.js";
    import { push } from "svelte-spa-router";

    let password = "";
    let confirmPassword = "";
    console.log(JSON.parse($user).accessToken);
    async function changePassword() {
        await fetch(
            "https://meroapi.merohouse.com/api/auth/aftergme/changepassword",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": JSON.parse($user).accessToken,
                },
                body: JSON.stringify({ password, confirmPassword }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    $message = data.message;
                    localStorage.removeItem("user");
                    $user = null;
                    push("/auth/login");
                }
            })

            .catch((err) => console.log("Error is: ", err));
    }
</script>

<svelte:head>
    <title>Change Password ↩️:: afterGME</title>
</svelte:head>
{#if $user}
    <form on:submit|preventDefault={changePassword}>
        <h2>Change Password</h2>
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
        <label for="confirmPassword">Retype Password</label>
        <input
            type="password"
            id="confirmPassword"
            bind:value={confirmPassword}
        />
        <input type="submit" value="Change Password" />
    </form>
{/if}
