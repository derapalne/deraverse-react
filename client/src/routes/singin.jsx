import { redirect, Form } from "react-router-dom";
import localforage from "localforage";

export async function loader() {
    const user = await localforage.getItem("user");
    if (user) {
        console.log(user);
        return redirect("/");
    }
    return user;
}

export async function action({request}) {
    const formData = await request.formData();
    console.log(formData);
    const user = Object.fromEntries(formData);
    console.log(user);
    localforage.setItem("user", user);
    return redirect("/")
}

export default function SignIn() {
    return(
        <div className="formContainer">
            <h1>SIGN IN TO THE DERAVERSe</h1>
            <Form method="post">
                <div>
                    <span>Username</span>
                    <input 
                        placeholder="Username"
                        type="text"
                        name="username"
                    />
                </div>
                <button type="submit">Sign In</button>
            </Form>
        </div>
    )
}