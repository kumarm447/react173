import React, { Component } from 'react'
import Errorboundary from './Errorboundary';
import Child from './Child.js'

class Propsobject extends Component {

    render() {
       return (<>

           

            <Errorboundary>
               <Child heroName={"kumar"} />
           </Errorboundary>

           <Errorboundary>
               <Child heroName={"vijay"} />
           </Errorboundary>
           
           <Errorboundary>
               <Child heroName={"abc"} />
           </Errorboundary>

         </>)

    }

}

export default Propsobject 
