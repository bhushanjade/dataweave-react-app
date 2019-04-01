//https://app.dataweave.com/v6/app/retailer/bundles/?&base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={"search":""}&api_key=38430b87ac715c5858b7de91fb90b3f7
const config = {
    'base_url': window.location.protocol + '//app.dataweave.com',
    'api_version': 'v6',
    'api_context': 'app/retailer',
}
export const API_URL = `${config.base_url}/${config.api_version}/${config.api_context}/`;
