function insert(input) {
    document.getElementById("viewInput").value += input
}

function del() {
    let inp = document.getElementById("viewInput").value
    document.getElementById("viewInput").value = inp.substring(0, inp.length - 1)
}

function c() {
    document.getElementById("viewInput").value = ""
}

function hasil() {
    document.getElementById("viewInput").value = eval(document.getElementById("viewInput").value)
}