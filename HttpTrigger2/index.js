const bcrypt = require("bcrypt");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let salt;
    let hashedPassword
    try {
        salt = await bcrypt.genSalt(12);
    hashedPassword = await bcrypt.hash(req.body.name, salt);
    } catch (error) {
        
    }
    const responseMessage = name
        ? "Hello, " + name + "your password for function 2 is " + hashedPassword : "Please supply the required value";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}