let notepad = document.querySelector("#text")

// make text bold
let bold = document.querySelector(".makeBold")
bold.onclick = () => {
    notepad.style.fontWeight = "bold"
}

// make text italic
let italic = document.querySelector(".makeItalic")
italic.onclick = () => {
    notepad.style.fontStyle = "italic"
}

let alignLeft = document.querySelector(".justifyLeft")
alignLeft.onclick = () => {
    notepad.style.textAlign = "left"
}

let alignCenter = document.querySelector(".justifyCenter")
alignCenter.onclick = () => {
    notepad.style.textAlign = "center"
}

let alignJustify = document.querySelector(".justifyText")
alignJustify.onclick = () => {
    notepad.style.textAlign = "justify"
}

let alignRight = document.querySelector(".justifyRight")
alignRight.onclick = () => {
    notepad.style.textAlign = "right"
}

let upperCase = document.querySelector(".makeUpperCase")
upperCase.onclick = () => {
    notepad.style.textTransform = "uppercase"
}

let lowerCase = document.querySelector(".makeLowerCase")
lowerCase.onclick = () => {
    notepad.style.textTransform = "lowercase"
}

let capitalize = document.querySelector(".makeCapitalized")
capitalize.onclick = () => {
    notepad.style.textTransform = "capitalize"
}

let clearText = document.querySelector(".clearText")
clearText.onclick = () => {
    notepad.value = ""
}

let textColor = document.querySelector("#textColor")
textColor.oninput = () => {
    notepad.style.color = textColor.value
}

let backgrndColor = document.querySelector("#backgroundColor")
backgrndColor.oninput = () => {
    notepad.style.backgroundColor = backgrndColor.value
}

let textSize = document.querySelector("#textSize")
textSize.oninput = () => {
    notepad.style.fontSize = textSize.value + "px"
}

// Display the choosen font in dropdown
// And change the font
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault()
        let fontFamily = this.getAttribute('data-font')
        let button = document.querySelector('.dropdown-toggle')
        button.textContent = this.textContent
        button.style.fontFamily = fontFamily
        notepad.style.fontFamily = fontFamily
    })
})

let printText = document.querySelector(".printText")
printText.onclick = () => {
    let contentToPrint = notepad.value
    let printWindow = window.open('', '');
    printWindow.document.write('<html><head><title>Print Notepad</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<pre>' + contentToPrint + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}