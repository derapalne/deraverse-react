import app from "./app";
import "./database";


function main() {
    app.listen(app.get("port"));
    console.log("http://localhost:" + app.get("port"));
}

main();
