<script>
    let showingSourceCode = false;
    let active = false;

    function toggleSource() {
        showingSourceCode
            ? (showingSourceCode = false)
            : (showingSourceCode = true);
        console.log(showingSourceCode);
    }
</script>

<svelte:head>
    <title>Add Post + + :: afterGME</title>
</svelte:head>
<svelte:body />

<h2>Add Post</h2>

<div
    class="tool-bar"
    on:click={(e) => {
        active == false ? (active = true) : (active = false);
        if (active) {
            e.target.classList.add("active-tool");
        } else {
            e.target.classList.remove("active-tool");
        }
    }}
>
    <button
        on:click={(e) => {
            document.execCommand("bold");
        }}
        title="bold"
    >
        <b>B</b>
    </button>
    <button
        on:click={(e) => {
            document.execCommand("italic");
            console.log(e.target);
        }}
        title="italic"
    >
        <i>I</i>
    </button>
    <button on:click={() => document.execCommand("underline")} title="bold"
        ><i class="fa fa-underline" /></button
    >
    <button on:click={() => document.execCommand("strikeThrough")} title="bold"
        ><i class="fa fa-strikethrough" /></button
    >
    <button
        on:click={() => document.execCommand("justifyLeft")}
        title="justifyLeft"><i class="fa fa-align-left" /></button
    >
    <button
        on:click={() => document.execCommand("justifyCenter")}
        title="justifyCentre"><i class="fa fa-align-center" /></button
    >
    <button
        on:click={() => document.execCommand("justifyRight")}
        title="justifyRight"><i class="fa fa-align-right" /></button
    >

    <button
        on:click={() => document.execCommand("justifyFull")}
        title="justifyFull"><i class="fa fa-align-justify" /></button
    >
    <button on:click={() => document.execCommand("cut")} title="cut"
        ><i class="fa fa-cut" /></button
    >
    <button on:click={() => document.execCommand("copy")} title="copy"
        ><i class="fa fa-copy" /></button
    >
    <button on:click={() => document.execCommand("indent")} title="indent"
        ><i class="fa fa-indent" /></button
    >
    <button on:click={() => document.execCommand("outdent")} title="outdent"
        ><i class="fa fa-dedent" /></button
    >
    <button on:click={() => document.execCommand("subscript")} title="subscript"
        ><i class="fa fa-subscript" /></button
    >
    <button
        on:click={() => document.execCommand("superscript")}
        title="superscript"><i class="fa fa-superscript" /></button
    >
    <button on:click={() => document.execCommand("redo")} title="redo"
        ><i class="fa fa-repeat" /></button
    >
    <button on:click={() => document.execCommand("undo")} title="undo"
        ><i class="fa fa-undo" /></button
    >
    <button
        on:click={() => document.execCommand("insertUnorderedList")}
        title="Insert Unordered List"><i class="fa fa-list-ul" /></button
    >
    <button
        on:click={() => document.execCommand("insertOrderedList")}
        title="Insert Ordered List"><i class="fa fa-list-ol" /></button
    >
    <button
        on:click={() => document.execCommand("formatblock", "p")}
        title="Paragraph"><i class="fa fa-paragraph" /></button
    >
    <button
        on:click={() => document.execCommand("insertHorizontalRule")}
        title="bold">HR</button
    >
    <button
        on:click={() =>
            document.execCommand(
                "createLink",
                prompt("Enter a URL ", "https://")
            )}
        title="Add Link"><i class="fa fa-link" /></button
    >
    <button on:click={() => document.execCommand("unlink")} title="Remove Link"
        ><i class="fa fa-unlink" /></button
    >
</div>
<div contenteditable="true" id="editor" />

<style>
    [contenteditable] {
        border: 1px solid lightgray;
        min-height: 450px;
        width: 100%;
        margin: 30px auto 20px auto;
        padding: 8px;
    }
    button {
        cursor: pointer;
    }
    :global(button.active-tool) {
        background: black;
        color: white;
    }
</style>
