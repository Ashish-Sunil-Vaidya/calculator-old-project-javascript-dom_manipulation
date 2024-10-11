document.body.style.display = "flex"
document.body.style.width = "100%"
document.body.style.height = "100svh"

const body = document.createElement('div')
body.setAttribute("id", "calc_body")
body.style.width = "250px"
body.style.backgroundColor = "gray"
body.style.margin = "auto"
body.style.borderRadius = "10px"
body.style.border = "2px solid black"
document.body.appendChild(body)

const display = document.createElement('div')
display.setAttribute("id", "display")
display.style.width = "80%"
display.style.height = "70px"
display.style.backgroundColor = "lightgray"
display.style.margin = "auto"
display.style.marginTop = "10px"
display.style.textAlign = "right"
display.style.borderRadius = "5px"
display.style.border = "2px solid black"
display.style.padding = "5px"
display.style.overflowX = "auto"
document.getElementById("calc_body").appendChild(display)

const expression = document.createElement('div')
expression.setAttribute("id", "expn")
// expression.style.border = "2px solid black"
// expression.style.height = "25px"
document.getElementById("display").appendChild(expression)

const resultdisplay = document.createElement('div')
resultdisplay.setAttribute("id", "res")
// resultdisplay.style.border = "2px solid black"
// resultdisplay.style.height = "40px"
resultdisplay.style.fontSize = "25px"
resultdisplay.style.transition ="height 2s"
document.getElementById("display").appendChild(resultdisplay)

const result = document.createElement('div')
document.getElementById("res").appendChild(result)

const button_body = document.createElement("div")
button_body.setAttribute("id", "button_body")
button_body.style.margin = "10px"
button_body.style.justifyContent = "center"
button_body.style.display = "flex"
button_body.style.flexWrap = "wrap"
button_body.style.gap = "5px 5px"
document.getElementById("calc_body").appendChild(button_body)

let operators = ['+', '-', '*', '/', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '=', 'C']
let resultdata = "";
for (let i = 0; i < 18; i++) {
    const calc_butns = document.createElement('button')
    calc_butns.setAttribute("id", "butn_" + i)
    calc_butns.setAttribute("onmouseover", "changebghover(this.id)")
    calc_butns.setAttribute("onmouseout", "changebghoverout(this.id)")
    calc_butns.setAttribute("onmouseup", "changebgunclick(this.id)")
    calc_butns.setAttribute("onmousedown", "changebgclick(this.id)")
    calc_butns.setAttribute("data-val", operators[i])
    calc_butns.style.width = "53px"
    calc_butns.style.height = "53px"
    calc_butns.style.backgroundColor = "orange"
    calc_butns.style.borderRadius = "5px"
    calc_butns.innerText = operators[i]
    calc_butns.style.fontSize = "20px"
    calc_butns.style.fontFamily = "Times New Roman"
    document.getElementById("button_body").appendChild(calc_butns)
}

document.getElementById("butn_16").style.width = "111px"
document.getElementById("butn_16").style.fontSize = "30px"
document.getElementById("butn_17").style.color = "white"
document.getElementById("butn_17").style.fontSize = "20px"

function changebghover(hovering) {
    document.getElementById(hovering).style.backgroundColor = "darkorange"
}

function changebghoverout(not_Hovering) {
    document.getElementById(not_Hovering).style.backgroundColor = "orange"
}

function changebgclick(clicked) {
    document.getElementById(clicked).style.backgroundColor = "red"
    let x = document.getElementById(clicked).getAttribute("data-val")
    if (x != "=" && x != "C") {
        resultdata += x;
        result.innerText = resultdata
    }
    if (x == "C") {
        result.innerText = ""
        expression.innerText = ""
        resultdata = "";
    }
    if (x == "=") {
        console.log('resultdata', resultdata);
        expression.innerText = resultdata
        result.style.textAlign = "center"
        try {
            resultdata = eval(resultdata);
        } catch (e) {
            resultdata = "Error";
        }
        result.innerText = resultdata;
        
    }

}

function changebgunclick(unclicked) {
    document.getElementById(unclicked).style.backgroundColor = "orange"
}

