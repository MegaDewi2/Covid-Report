import '../component/faqlist.js';
import '../component/searchbar.js'
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const FAQListElement = document.querySelector("faq-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchFaq(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        FAQListElement.faqs = results;
    };

    const fallbackResult = message => {
        FAQListElement.renderError(message);
    };

    onButtonSearchClicked('covid-19');
    searchElement.clickEvent = onButtonSearchClicked;
};
const getDataReport = () => {
    const contentReport = document.querySelector('report-content');
    
    const renderData = (values) => {
        contentReport.dataShow = values;
    };

    const falseData = (msg) => {
        contentReport.renderError(msg);
    };

    const getDataCovid = async () => {
        try{
            const value = await DataSource.getData();
            renderData(value);
        }
        catch (msg){
            console.log(msg)
        }
    };
    getDataCovid();
}
//export default main;
export {main, getDataReport}