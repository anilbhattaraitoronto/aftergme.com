<script>
    import { user } from "../../../stores/authStore.js";
    function slugify(val) {
        return val.replace(/ /g, "-").toLowerCase();
    }

    console.log($user.accessToken);
    //post items
    let language;
    let imageurl;
    let title = "";
    let slug;
    let author;
    let summary;
    let content = "";

    //toolbars
    let selectedSize;
    let selectedHeading;

    console.log("slug is", slug);

    function addPost() {
        fetch("https://meroapi.merohouse.com/api/posts/aftergme/addpost", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": $user.accessToken,
            },
            body: JSON.stringify({
                language,
                imageurl,
                title,
                slug,
                author,
                summary,
                content,
            }),
        })
            .then((res) => console.log(res))

            .catch((err) => console.log("Error is: ", err));
    }
</script>

<svelte:head>
    <title>Add Post + + :: afterGME</title>
</svelte:head>
<svelte:body />
{#if $user && $user.admin_status === 1}
    <main>
        <h2>Add Post</h2>
        <label for="language">Language</label>
        <input type="text" bind:value={language} required />
        <label for="imageurl">Image Url</label>
        <input type="text" bind:value={imageurl} required />
        <label for="title">Title</label>
        <input
            type="text"
            bind:value={title}
            on:keyup={() => (slug = slugify(title))}
            required
        />
        <label for="slug">Slug</label>
        <input type="text" bind:value={slug} required />
        <label for="author">Author</label>
        <input type="text" bind:value={author} required />
        <label for="summary">Summary</label>
        <input type="text" bind:value={summary} required />
        <label>Content</label>
        <div class="tool-bar">
            <select
                bind:value={selectedHeading}
                on:change={() => {
                    document.execCommand("heading", false, selectedHeading);
                }}
            >
                <option value="H1" selected>h1</option>
                <option value="H2">h2</option>
                <option value="H3">h3</option>
                <option value="H4">h4</option>
                <option value="H5">h5</option>
                <option value="H6">h6</option>
            </select>
            <select
                bind:value={selectedSize}
                on:change={() => {
                    document.execCommand("fontSize", false, selectedSize);
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7" selected>7</option>
            </select>
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
                }}
                title="italic"
            >
                <i>I</i>
            </button>
            <button
                on:click={() => document.execCommand("underline")}
                title="bold"><i class="fa fa-underline" /></button
            >
            <button
                on:click={() => document.execCommand("strikeThrough")}
                title="bold"><i class="fa fa-strikethrough" /></button
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
            <button
                on:click={() => document.execCommand("indent")}
                title="indent"><i class="fa fa-indent" /></button
            >
            <button
                on:click={() => document.execCommand("outdent")}
                title="outdent"><i class="fa fa-dedent" /></button
            >
            <button
                on:click={() => document.execCommand("subscript")}
                title="subscript"><i class="fa fa-subscript" /></button
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
                title="Insert Unordered List"
                ><i class="fa fa-list-ul" /></button
            >
            <button
                on:click={() => document.execCommand("insertOrderedList")}
                title="Insert Ordered List"><i class="fa fa-list-ol" /></button
            >
            <button
                on:click={() => document.execCommand("formatBlock", false, "p")}
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
                        false,
                        prompt("Enter a URL ", "https://")
                    )}
                title="Add Link"><i class="fa fa-link" /></button
            >
            <button
                on:click={() => document.execCommand("unlink")}
                title="Remove Link"><i class="fa fa-unlink" /></button
            >
            <button
                on:click={() =>
                    document.execCommand(
                        "insertImage",
                        false,
                        prompt("Enter the image url: ", "https://")
                    )}
                title="image"><i class="fa fa-file-image-o" /></button
            >
        </div>
        <div contenteditable="true" id="editor" bind:innerHTML={content} />

        <div class="add-post-button">
            <button on:click={addPost}>Add New Post</button>
        </div>
    </main>

    <p>
        {@html content}
        {slug}
    </p>
{/if}

<style>
    main {
        width: 100%;
        max-width: 650px;
        margin: auto;
        padding: 8px;
        background: rgb(242, 238, 238);
    }
    h2 {
        text-align: center;
    }
    label,
    input {
        width: 100%;
        margin: auto;
    }
    label {
        margin-top: 16px;
        font-weight: bold;
        color: gray;
    }
    [contenteditable] {
        border: 1px solid lightgray;
        min-height: 450px;
        width: 100%;
        margin: 30px auto 20px auto;
        padding: 8px;
        background: white;
    }
    button {
        cursor: pointer;
    }
    :global(button.active-tool) {
        background: black;
        color: white;
    }
    p {
        padding: 8px 0;
    }
    :global(blockquote) {
        padding-left: 40px;
    }
    :global(img) {
        display: block;
        max-width: 450px;
        margin: auto;
    }
</style>
