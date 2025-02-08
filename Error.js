import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError()
    console.log(err);
    return(
        <>
        <h1>Opps ! </h1>
        <h2>something went wrong  and please check error !!</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
        </>
    );
};
export default Error;
