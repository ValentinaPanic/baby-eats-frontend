import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/currentUser'
import { getLists} from '../actions/listActions'
import ShoppingListCard from '../components/ShoppingListCard'
import ShoppingListForm from '../components/ShoppingListForm'

class ShoppingList extends React.Component {
    componentDidMount(){
        this.props.getCurrentUser()
        this.props.getLists()
     }

   render(){
       
    return (
        <div>
            <ShoppingListForm/><br/>
           <ShoppingListCard/>
        </div>
    )};
};

export default connect(null, {getCurrentUser, getLists})(ShoppingList)