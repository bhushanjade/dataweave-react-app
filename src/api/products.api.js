import { API_URL } from '../config';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const GET_PRODUCT_BY_VIEW = `${API_URL}bundles/?`;
const GET_PRODUCT_INFO = `${API_URL}bundle_overview/?`;
//https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={"search":""}&api_key=38430b87ac715c5858b7de91fb90b3f7
//https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={"search":""}&api_key=38430b87ac715c5858b7de91fb90b3f7
export function getProductBy(params = {}) {
    params['api_key'] = API_KEY;

    return axios.get(GET_PRODUCT_BY_VIEW, {
        params: params,
    }).then(res => {
        return res;
    }).catch(function(error) {
        return Promise.reject(error);
    });
}

export function getProductInfo(params = {}) {
    params['api_key'] = API_KEY;
//?&api_key=38430b87ac715c5858b7de91fb90b3f7&base_view=all_products&bundle_id=5
    return axios.get(
        GET_PRODUCT_INFO,
        {
            params: params,
        }).then(res => {
        console.log('rod info', res);
        return res;
    }).catch(function(error) {
        return Promise.reject(error);
    });
}