function openFile(readAs, onCancel, onAbort, onError, onLoad) {

    function onChange() {
        const file = input.files?.[0];

        if (!file) {
            onCancel();
            return;
        }

        const reader = new FileReader();

        reader.addEventListener("abort", onAbort);
        reader.addEventListener("error", onError);
        reader.addEventListener("load", (event) => {
            onLoad(file, event.target.result);
        });

        reader[readAs](file);
    }

    const input = document.createElement("input");

    input.type = "file";

    input.addEventListener("cancel", onCancel);
    input.addEventListener("change", onChange);

    input.click();
}
