import faqs from './faqs.js';
class DataSource {
    static searchFaq(keyword) {
        return new Promise((resolve, reject) => {
            const filteredFaqs = faqs.filter(faq => faq.ask.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredFaqs.length) {
                resolve(filteredFaqs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
    static getData() {
        return fetch('https://covid19.mathdro.id/api')
       .then(response => {
             return response.json();
       })
      .then(responseJson => {
             if(responseJson){
                    return Promise.resolve(responseJson)
            }else{
                   return Promise.reject('cek connection')
            }
        })
    }
}

export default DataSource;