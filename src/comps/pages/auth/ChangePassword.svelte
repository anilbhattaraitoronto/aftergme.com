<script>
    import { user } from "../../../stores/authStore.js";
    import { message } from "../../../stores/messageStore.js";
    import { push } from "svelte-spa-router";

    let password = "";
    let confirmPassword = "";
    function changePassword() {
        fetch(
            "https://meroapi.merohouse.com/api/auth/aftergme/changepassword",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": $user.accessToken,
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

    //delete user

    function deleteUser() {
        fetch("https://meroapi.merohouse.com/api/auth/aftergme/deleteuser", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": $user.accessToken,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    localStorage.removeItem("user");
                    $user = null;
                    push("/");
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
    <details>
        <summary>Do you want to remove your account?</summary>
        <p><button on:click|preventDefault={deleteUser}>Yes</button></p>
    </details>
{/if}

<style>
    details {
        line-height: 2;
        cursor: pointer;
        margin: 20px auto;
        text-align: center;
    }
    button {
        display: inline-block;
        margin-top: 20px;
        width: 150px;
        cursor: pointer;
        color: red;
        font-weight: bolder;
        background: white;
        transition: 200ms all ease-in-out;
    }
    button:hover {
        background: red;
        color: white;
    }
</style>
