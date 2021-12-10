//import "./src/script/component/navbar.js";
// import "./src/script/component/searchbar.js";
import "./script/component/maincontent.js";
import "./script/component/report.js";
import "./script/component/faqlist.js";
// import main from "./src/script/view/main.js";
import "./style/style.css";
import "./script/component/navbar.js";
import 'regenerator-runtime'
import {main, getDataReport} from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", () => {
    main();
    getDataReport();
});