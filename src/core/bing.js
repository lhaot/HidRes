console.log("executing bing.js");

// 隐藏搜索结果相关节点
async function execute() {
    let b_results_ol = document.getElementById("b_results");
    let results_li = b_results_ol.children;
    let numberOfHidden = 0;
    for (const result of results_li) {
        for (const b_title of result.getElementsByClassName("b_title")) {
            for (const a of b_title.getElementsByTagName("A")) {
                let isMatch = await isMatchReg(a.href)
                if (isMatch) {
                    result.hidden = true
                    numberOfHidden++
                }
            }
        }
    }
    return numberOfHidden
}

execute().then(r => {
    let hiddenSpan = document.createElement("span");
    hiddenSpan.setAttribute("class", "sb_count");
    hiddenSpan.innerText = "隐藏" + r + "条搜索结果";
    let b_tween = document.getElementById("b_tween");
    b_tween.append(hiddenSpan)
})

