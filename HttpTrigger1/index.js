const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv")
dotenv.config();
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let salt;
    let hashedPassword
    try {
        salt = await bcryptjs.genSalt(12);
    hashedPassword = await bcryptjs.hash(req.body.name, salt);
    console.log("generated pass " + hashedPassword)
    } catch (error) {
        
    }
    const responseMessage = name
        ? "Hello, " + name + " your password for function 1 is " + hashedPassword + " env " + process.env.MYDIGIT : "Please supply the required value";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}