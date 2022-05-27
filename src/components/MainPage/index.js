import FormPage from "../FormPage";
import ImageHome from "../ImageHome";
import "./style.css"

function MainPage(){
    const $htmlImageHome = ImageHome();
    const $htmlFormPage = FormPage();
   
    return `
        <main>
            <section class="content container">
                ${$htmlImageHome}
                ${$htmlFormPage}                
            </section>
        </main>
    `
}

export default MainPage;