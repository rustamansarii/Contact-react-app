
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Create from './component/Create';
import Root from './component/Root';
import Read from './component/Read';
import Update from './component/Update';


function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Create />,
        },
        {
          path: "read",
          element: <Read />,
        },
        {
          path: "edit/:id",
          element: <Update />,
        },
        {
          path: "edit/:id/read",
          element: <Read  />,
        },
      ]
    },
  ]);
  

  return (
    < >
   <>
<RouterProvider router={router} />
</>

    </>
  );
}

export default App;
