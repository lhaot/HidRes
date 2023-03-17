let regexArea = document.getElementById("regex_area")

function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        regexStorage: document.querySelector("#regex_area").value
    });
    console.log(browser.storage.local.get("regexStorage"))
}

function restoreOptions() {

    function onError(error) {
        alert(`Error: ${error}`);
    }

    function setCurrentChoice() {
        browser.storage.local.get("regexStorage").then(value => {
            if ("regexStorage" in value) {
                document.querySelector("#regex_area").value = value.regexStorage
            } else {
                document.querySelector("#regex_area").value = ""
            }
        }).catch(onError)
    }

    setCurrentChoice()
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
