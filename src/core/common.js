console.log("executing common.js")

async function isMatchReg(string) {
    return browser.storage.local.get("regexStorage").then(value => {
        let regexStorage = value.regexStorage
        let regexes = regexStorage.split("\n")
        for (const i in regexes) {
            if (Object.hasOwnProperty.call(regexes, i)) {
                const regex = regexes[i];
                if (!!string.match(regex)) return true;
            }
        }
        return false;
    })
}
