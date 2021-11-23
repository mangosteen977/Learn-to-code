// fetch로 json불러올 수도 있다.
export let js = function () {
    fetch("../ajax/news.json").then(function (aa) {
        return aa.json();
    }).then(function (bb) {
        console.log(bb)
    }).catch(function (error) { console.log(error) })

    fetch("../ajax/news.json").then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
}