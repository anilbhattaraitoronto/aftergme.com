<script>
</script>

<svelte:head>
    <title>Add Post + + :: afterGME</title>
</svelte:head>
<svelte:body />

<h2>Add Post</h2>

<div class="tool-bar">
    <button on:click={() => document.execCommand("bold")} title="bold">
        <b>B</b>
    </button>
    <button on:click={() => document.execCommand("italic")} title="italic">
        <i>I</i>
    </button>
</div>
<div contenteditable="true" />

<style>
    [contenteditable] {
        border: 1px solid lightgray;
        height: 450px;
        width: 100%;
        margin: auto;
        padding: 20px;
    }
</style>
