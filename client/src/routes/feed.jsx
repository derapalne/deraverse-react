import { redirect, useLoaderData } from "react-router-dom";
import localforage from "localforage";
import axios from "axios";

export async function loader() {
    const user = await localforage.getItem("user");
    if (!user) {
        return redirect("/signin");
    }
    return user;
}

export default function Feed() {
    const user = useLoaderData();
    return (
        <div>
            <h1>Main Feed O' the DERAVERSE</h1>
            <p>USER: {user.username}</p>
            <p>{axios.get("https://localhost:4000/api/post")}</p>
        </div>
    );
}
