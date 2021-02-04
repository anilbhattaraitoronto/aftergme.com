<script>
    import { user } from "../../../stores/authStore.js";
    import { push } from "svelte-spa-router";
    import { message } from "../../../stores/messageStore.js";

    let email = "";

    function requestPasswordReset() {
        fetch(
            "https://meroapi.merohouse.com/api/auth/aftergme/passwordresetlink",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                $message = data.message;
                push("/");
            })
            .catch((err) => console.log("Error is: ", err));
    }
</script>

<svelte:head>
    <title>Forgot Pw? :: afterGME</title>
</svelte:head>
<form on:submit|preventDefault={requestPasswordReset}>
    <h2>Forgot password? Request reset link.</h2>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} />
    <input type="submit" value="Send the request" />
</form>
