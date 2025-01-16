const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const { parse } = require('node:path');

const server = createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // Exe 1.1----------------------------------------------------
    // try {
    //     let readText = fs.readFileSync('./txt/read-this.txt');
    //     console.log('Content of txt:', readText.toString());
    // } catch (err) {
    //     console.error('Error reading files:', err);
    //     res.statusCode = 500;
    //     res.end('Error reading files');
    //     return;
    // }
    // res.end('Files read successfully');

     // Exe 1.2-----------------------------------------------------
    // try {
    //     let readAppendText = fs.readFileSync('./txt/append.txt');
    //     let readInputText = fs.readFileSync('./txt/input.txt');
    //     console.log('Content of txt:', readAppendText.toString());
    //     console.log('Content of txt:', readInputText.toString());
    // } catch (err) {
    //     console.error('Error reading files:', err);
    //     res.statusCode = 500;
    //     res.end('Error reading files');
    //     return;
    // }
    // res.end('Files read successfully');

    // Exe 1.3 ============-===========================================
    // try {
    //     let readAppendText = fs.readFileSync('./txt/append.txt');
    //     let readInputText = fs.readFileSync('./txt/input.txt');
    //     let finalText = readAppendText + readInputText;
    //     fs.writeFileSync('./txt/final.txt', finalText);
    //     let readFinalText = fs.readFileSync('./txt/final.txt');
    //     res.end('Files read and written successfully');
    //     console.log(readFinalText.toString());
    // } catch (err) {
    //     console.error('Error reading or writing files:', err);
    //     res.statusCode = 500;
    //     res.end('Error reading or writing files');
    // }


    // Exe 2.1-------------------------------------------------------------------
    // try {
    //     fs.readFile("./txt/read-this.txt", "utf8", (err, readThisData) => {
    //         if (err) {
    //             if (err.code === "ENOENT") {
    //                 console.error("Không tìm thấy tệp:", err.path);
    //             } else {
    //                 console.error("Lỗi khi đọc tệp:", err);
    //             }
    //             res.statusCode = 500;
    //             res.end('Error reading file');
    //             return;
    //         }
    //     fs.readFile("./txt/input.txt", "utf8", (err, inputData) => {
    //         if (err) {
    //             if (err.code === "ENOENT") {
    //                 console.error("Không tìm thấy tệp:", err.path);
    //             } else {
    //                     console.error("Lỗi khi đọc tệp:", err);
    //             }
    //                 res.statusCode = 500;
    //                 res.end('Error reading file');
    //                 return;
    //             }
    //     fs.readFile("./txt/append.txt", "utf8", (err, appendData) => {
    //                 if (err) {
    //                     if (err.code === "ENOENT") {
    //                         console.error("Không tìm thấy tệp:", err.path);
    //                     } else {
    //                         console.error("Lỗi khi đọc tệp:", err);
    //                     }
    //                     res.statusCode = 500;
    //                     res.end('Error reading file');
    //                     return;
    //                 }
    //                 console.log("Nội dung tệp read-this.txt:", readThisData);
    //                 console.log("------------------------------------");
    //                 console.log("Nội dung tệp input.txt:", inputData);
    //                 console.log("------------------------------------");
    //                 console.log("Nội dung tệp append.txt:", appendData);
    //                 res.end('Files read successfully');
    //             });
    //         });
    //     });
    // } catch (err) {
    //     console.error('Unexpected error:', err);
    //     res.statusCode = 500;
    //     res.end('Unexpected error');
    // }

    //Exe 2.2 --------------------------------------------------------------------------------
    // try {
    //     fs.readFile("./txt/input.txt", "utf8", (err, inputData) => {
    //         if (err) {
    //         if (err.code === "ENOENT") {
    //             console.error("Không tìm thấy tệp:", err.path);
    //         } else {
    //             console.error("Lỗi khi đọc tệp:", err);
    //         }
    //         res.statusCode = 500;
    //         res.end('Error reading file');
    //         return;
    //         }
    //     fs.readFile("./txt/append.txt", "utf8", (err, appendData) => {
    //         if (err) {
    //             if (err.code === "ENOENT") {
    //             console.error("Không tìm thấy tệp:", err.path);
    //             } else {
    //             console.error("Lỗi khi đọc tệp:", err);
    //             }
    //             res.statusCode = 500;
    //             res.end('Error reading file');
    //             return;
    //         }
    //     fs.writeFile("./txt/final1.txt", inputData + appendData, (err) => {
    //             if (err) {
    //             console.error("Lỗi khi ghi tệp:", err);
    //             res.statusCode = 500;
    //             res.end('Error writing file');
    //             return;
    //             }
    //     fs.readFile('./txt/final1.txt', 'utf8', (err, finalText) => {
    //                 if (err) {
    //                     console.error("Lỗi khi đọc tệp:", err);
    //                     res.statusCode = 500;
    //                     res.end('Error reading file');
    //                     return;
    //                 }
    //                 console.log(finalText);
    //                 res.end('Files read and written successfully');
    //             });
    //         });
    //     });
    //     });
       
    // } catch(err){
    //     console.error('Unexpected error: ', err);
    //     res.statusCode = 500;
    //     res.end('Unexpected error');
    // }

    //Exe 3 ---------------------------------------------------------------
    // Blocking code 
    // try {
    //     let data = fs.readFileSync('./txt/read-this.txt', 'utf8');
    //     console.log(data);
    //     res.end('Blocking read completed');
    // } catch (err) {
    //     console.error('Error reading file:', err);
    //     res.statusCode = 500;
    //     res.end('Error reading file');
    // }

    // // Non-blocking code 
    // fs.readFile('./txt/read-this.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Error reading file:', err);
    //         res.statusCode = 500;
    //         res.end('Error reading file');
    //         return;
    //     }
    //     console.log(data);
    //     res.end('Non-blocking read completed');
    // });

    //Exe 4 ----------------------------------------------------
    // let readFinal = fs.readFileSync('./txt/final.txt', 'utf8');
    // console.log(readFinal);
    // res.end(readFinal);

    //Exe 5: ====================================================
    // res.setHeader('content-type', 'text/html');
    // try {
    //     if (req.url === '/') {
    //         let homepage = fs.readFileSync('./templates/cart-template.html', { encoding: 'utf8' });
    //         res.end(homepage);
    //     } else if (req.url === '/overview') {
    //         let overview = fs.readFileSync('./templates/overview.html', { encoding: 'utf8' });
    //         res.end(overview);
    //     } else if (req.url === '/product') {
    //         let product = fs.readFileSync('./templates/product.html', { encoding: 'utf8' });
    //         res.end(product);
    //     } else {
    //         res.statusCode = 404;
    //         res.end('Page not found');
    //     }
    // } catch (err) {
    //     console.error('Error reading file:', err);
    //     res.statusCode = 500;
    //     res.end('Internal Server Error');
    // }


    //Exe 6 ======================================================
    res.setHeader('Content-type', 'application/json');
    let data;
    try {
        data = fs.readFileSync('./dev-data/data.json', { encoding: 'utf8' });
        console.log('Data read from file:', data);
    } catch (err) {
        console.error('Error reading data file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
    }

    let dataParse;
    try {
        dataParse = JSON.parse(data);
        console.log('Parsed data:', dataParse);
    } catch (err) {
        console.error('Error parsing JSON:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
    }

    if (req.url === '/api') {
        res.end(data);
    } else if (req.url.startsWith('/api/')) {
        const id = req.url.split('/')[2]; // Extract ID from the URL
        const product = dataParse.find(item => item.id == id); // Find the object by id

        if (product) {
            res.statusCode = 200;
            res.end(JSON.stringify(product));
        } else {
            // Handle invalid or non-existent ID
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Product not found' }));
        }
    }
    // Handle all other routes
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

