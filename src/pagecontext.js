import {createContext} from "react";

const PageContext = createContext();
export default PageContext;

export const fetcher = (...args) => fetch(...args).then(res => res.json())
