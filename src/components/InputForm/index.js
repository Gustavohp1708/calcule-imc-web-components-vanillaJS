import "./style.css"

function InputForm(label, placeHolder){
    return `
        <label for="${label}">${label}</label>
        <input type="text" id="${label}" placeholder="${placeHolder}">
    `
}

export default InputForm;