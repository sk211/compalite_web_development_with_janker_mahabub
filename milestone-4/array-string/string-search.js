const products = [
    'dell hardcode i29 200gb laptop',
    'iphone 1tb camrera flashliht phone',
    'dell yello laptop with black phone',
    "1x59 lenovo commercial yoga laptop",
    "Dell lg supernova Laptop",
    "HTC low price phone",
    'Dell purple color phone'
]
const searching = 'Dell';
const output = []
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product)
    }
}

for (const product of products) {
    if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
        // output.push(product)
    }
}

// start with 
for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product)
    }
}
console.log(output);