import ButtonCalc from "../ButtonCalc";
import InputForm from "../InputForm";
import TitleForm from "../TitleForm";
import "./style.css";

function FormPage(){
    return `
        <div class="form-container">
            <form class="form" action="">
                ${TitleForm()}
                ${InputForm("Peso", "Informe seu peso (Kg)")}
                ${InputForm("Altura", "Informe sua altura em metros")}
                ${ButtonCalc()}
                ${InputForm("Resultado", "")}
            </form>
        </div>
    `
}

export default FormPage;