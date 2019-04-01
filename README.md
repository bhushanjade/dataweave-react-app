This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [React App Powered by Dataweave API](https://dataweave-product-listing.herokuapp.com/)
### Packages USED :
- [axios](https://github.com/axios/axios) => FOR API requests.
- [API](Dataweave API)[https://app.dataweave.com/]
    - End Points Used :
        - `bundles` => Get products by view (Only 2 views 1. All Products & 2.Margin gain opportunities)
        - `bundle_overview` => Get Selected product/bundle details.                            
### Configuration 
- Create `.env` file & add 
    ```
    REACT_APP_API_KEY=<API_KEY>
    ```

# Features In Current Version:
1. User Can select product from following views
    - All Products
    - Margin Gain Opportunities
2. Can Search & filter 
3. On selection of product detailed information is shown.

# Future/TODO Implementation:

Some of the things that I want to implement in the future version are:

1. Refactor reduant things
2. Load more handling.. showing all products till now. Currently shows only 20 per page
3. Scroll the product detail page to view port as user scrolls down.

```
\---src
    |   config.js => API URL etc set here.
    |   index.css
    |   app.css
    +---api
    |       products.api.js => API calls.
    |
    \---components => All react components 
        |   DashBoard.js => Dashboard holds all components
        |
        +---product-info => Detailed Product page. Right bar
        |       product-info.css
        |       ProductInfo.js
        |
        +---product-listing => product listing page. middle sidebar
        |       product-card.css
        |       ProductCard.js
        |       ProductFilter.js
        |       ProductListing.js
        |       ProductListingCard.js
        |       ProductSearch.js => Search Component
        |       ProductSort.js => Sort Component
        |
        +---product-views => Product Views Component. Left Bar
        |       ProductView.js
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
