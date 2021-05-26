const fs = require("fs");

/**
 * Promisify readFile function from fs
 * @author Emile Sabatier <contact@emilesabatier.com>
 * @param {string, URL} path - Path to the file you want to read
 * @return {void}
 */
readFile =( path )=>
    new Promise(( resolve, reject )=>
        fs.readFile( path, ( err, data )=>{
            if( err ) reject( err )
            console.log( path + ' successfully read\n' )
            resolve( data )
        })
    )

/**
 * Promisify writeFile function from fs
 * @author Emile Sabatier <contact@emilesabatier.com>
 * @param {string, URL} path - Path to where you want to write the file
 * @param {string, Buffer}  data - Data you want to write into a new file
 * @return {void}
 */
writeFile =( path, data )=>
    new Promise(( resolve, reject )=>
      fs.writeFile( path, data, ( err )=>{
        if( err ) reject( err );
        console.log( path + ' successfully written\n' )
        resolve();
      })
    );


async function main(){
    const FILE_PATH = "data.json"

    // read the file, use JSON.parse(data) to extract data
    const data = await readFile(FILE_PATH)
    
    // write the file, use JSON.stringify(data) to convert Object to JSON string before writing
    writeFile( FILE_PATH, data )
    
}
    
try{ console.log(""); main() }catch( e ){ console.error(e) }