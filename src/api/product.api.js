import axios from 'axios';

const URL = 'https://app.dataweave.com/v6/app/retailer/bundles/?';
// "base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={\"search\":\"\"}&api_key=38430b87ac715c5858b7de91fb90b3f7";
export function fetchProductBYViews(params = {}) {
    params['base_view'] = 'all_products';
    params['start'] = 0;
    params['limit'] = 20;
    params['sort_on'] = '';
    params['filters'] = {'search': ''};
    params['api_key'] = '38430b87ac715c5858b7de91fb90b3f7';

    axios.get(URL, {
        params: params,
    }).then(res => console.log(res)).catch(function(error) {
        return Promise.reject(error);
    });
}