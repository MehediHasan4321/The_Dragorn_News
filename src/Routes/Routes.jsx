import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main/Main";
import Catagory from "../Loyout/Home/Catagory/Catagory";
import NewsLayout from "../Loyout/NewsLayout/NewsLayout";
import News from "../Loyout/Pages/News/News";
import Login from "../Loyout/Pages/LogIn/Login";
import Regeister from "../Loyout/Pages/Regeister/Regeister";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/catagory/:id',
                element:<Catagory/>,
                loader: ({params})=> fetch(`https://the-dragon-news-server-mehedihasan4321.vercel.app/catagory/${params.id}`)
            }
            
        ]
    },
    {
        path:'news',
        element:<NewsLayout/>,
        children:[
            {
                path:':id',
                element:<PrivetRoute><News/></PrivetRoute>,
                loader:({params})=>fetch(`https://the-dragon-news-server-mehedihasan4321.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Regeister/>
    }
])

export default routes