/**
 * Product Info Loader
 * Creates a way of loading product info from a JSON file
 */
window.onload = async function productInfo(productName) {
    /* Getting information from file in text/json style */
    const requestURL = "./database/products.json"
    const request = new Request(requestURL)
    const response = await fetch(request)
    const pDBText = await response.text()

    /* Parsing JSON file */
    const pDB = JSON.parse(pDBText)

    /* Using data */
    /* const product = pDB.siteProducts[0]

    console.log(product) */
    let product = pDB.siteProducts.find(product => product.name === productName)
    /* displayProduct(product) */

    if (document.getElementById("product-page") != null) {
        displayProduct(product)
    } else if (document.getElementById("main-page") != null) {
        showProducts(product)
    }
}

/**
 * Shows the info of a specific product
 * @param {object} product 
 */
function displayProduct(product) {
    /* Getting document and product-page node */
    const d = document
    const p = d.querySelector("product-page")

    /* Setting product-page node's attributes */
    /* p.setAttribute("product-name", product.name)
    p.setAttribute("product-price", product.price)
    p.setAttribute("product-description", product.description)
    p.setAttribute("product-images", product.images) */

}

/**
 * Shows the info of all products in the main page
 */
function showProducts() {
    /* Getting document and main-page node */
    const d = document
    const p = d.querySelector("main-page")

    /* Setting main-page node's attributes */
    /* p.setAttribute("product-name", product.name)
    p.setAttribute("product-description", product.description)
    p.setAttribute("product-images", product.images) */
}