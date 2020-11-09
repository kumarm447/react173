import React from 'react';
import { BrowserRouter, Route, Switch, Redirect }  from 'react-router-dom';


//import Information/view Components...
import Header from './Header.js'
import Footer from './Footer.js'

import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Blog from './Blog.js'
import Portfolios from './Portfolios.js'
import Contact from './Contact.js'
import Propsobject from './Propsobject.js'
import Pagenotfound from './Pagenotfound.js'
import Courses from './Courses';
import Trainings from './Trainings';
import Conditionalrenderings from './Conditionalrenderings'
import StateObject from './StateObject'
import Lifecycle from './Lifecycle';
import AxoisHttpCalls from './AxoisHttpCalls';
import Userprofile from './Userprofile'
import Signup from './Signup'
import EditUser from './EditUser'

//Nested_Routing Components for Training[main Routing]
import Mernstack from './courses/Mernstack.js'
import Angularjs from './courses/Angularjs'
import Reactjs from './courses/Reactjs'


/* Hooks */
import Hooks1 from './Hooks1'
import HooksApi from './HooksApi'
import HooksApiView from './HooksApiView'
import HooksApiSignup from './HooksApiSignup'
import HooksApiEdit from './HooksApiEdit'
import PaginationTask from './PaginationTask'

//React_Redux
import ReactReduxConnection from './ReactReduxConnection'


import Searchbox from './Searchbox'


const Routings=()=> 
{
    return (<>

<BrowserRouter>

               {/* navbar Component */ }
               
                <Header />   
               
               {/* navbar Component */ }
              
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/portfolios" component={Portfolios} />
                <Route path="/blog" component={Blog} /> 
                <Route path="/contact" component={Contact} />
                <Route path="/props" component={Propsobject} />
                <Route path="/courses" component={Courses} />
                <Route exact path="/trainings" component={Trainings} />
                <Route path="/trainings/mernstack" component={Mernstack} />
                <Route path="/trainings/angularjs" component={ Angularjs} />
                <Route path="/trainings/reactjs" component={Reactjs} />
                <Route path='/conditionals' component={Conditionalrenderings} />
                <Route path='/states' component={StateObject} />
                <Route path="/lifecycle" component={Lifecycle} />
                <Route exact path="/restapi" component={AxoisHttpCalls} />
                <Route path="/restapi/view/:userid" component={Userprofile} />
                <Route path="/restapi/edit/:userid" component={EditUser} />
                <Route path="/signup" component={Signup} />
                <Route path="/search" component={Searchbox} /> 
                <Route path="/reactredux" component={ReactReduxConnection} />

                {/*   Hooks */}
                <Route path="/hooks1" component={Hooks1} />
                <Route exact path="/hooksApi" component={HooksApi} />
                <Route path="/hooksApi/view/:idname" component={HooksApiView} />
                <Route path="/hooksApi/create" component={HooksApiSignup} />
                <Route path="/hooksApi/edit/:idname" component={HooksApiEdit} />
                <Route path="/pagination" component={PaginationTask} />

            
                <Redirect to="/home" />
                <Route  component={Pagenotfound} />
            </Switch>


                  {/* Footer Component */ }
               
                  <Footer /> 
               
                  {/* Footer Component */ }

                
</BrowserRouter>

    </>)
}


export default Routings