import { redirect, useLoaderData } from "react-router-dom";
import localforage from "localforage";

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
        <>
            Main Feed O' the DERAVERSE: USER <p>{user.username}</p>
        </>
    );
}
