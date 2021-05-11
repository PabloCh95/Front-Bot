//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin.js';
import LayoutHome from '../layouts/LayoutHome.js';

//admin pages
import AdminHome from '../pages/Admin/Index.js';
import Login from '../pages/Admin/Login/Index.js';

//home pages
import Home from '../pages/Home.js';

//others
import Error404 from '../pages/Error404.js';

const routes=[
    {
      path:'/admin',  
      component:LayoutAdmin,
      exact:false,
      routes:[
          {
              path:"/admin",
              component: AdminHome,
              exact: true
          },
          {
              path:"/admin/login",
              component: Login,
              exact: true
          },
          {
              component:Error404,
          }
      ]
   },
   {
       path:'/',
       component:LayoutHome,
       exact:false,
       routes:[
           {
            path:'/',
            component:Home,
            exact:true,
           },
           {
              component:Error404,
           }
       ],
   }
]

export default routes;