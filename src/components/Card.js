import React from 'react';
import { connect } from 'react-redux';
import { deleteCard, fetchUser } from '../actions/cardActions'

class Card extends React.Component {

//     state = {user: ''}

//    componentDidMount(){
//         let user = this.props.match.params.user;
//         this.setState({
//             user //user: user
//         })
//    }

    componentDidMount() {
        this.props.fetchUser();
    }

    onButtonClick = () => {
        let id = this.props.card.id;
        this.props.deleteCard(id);
        this.props.history.push('/cards');
    }

   render(){
        // const { user } = this.state;
        console.log(this.props);
        const { title , body } = this.props.card;

        const { users } = this.props;

        return (
            <>
                <div 
                    className='ui raised very padded text container segment'
                    style={{marginTop:'80px'}} 
                >
                    <h3 className='ui header'>{ title }</h3>
                    <p>{ body }</p>
                    <button
                        className='ui primary right floated button'
                        onClick={this.onButtonClick}
                    >
                        Delete
                    </button>
                </div>

                {
                    users && users.map(user => {
                        return (
                            <div 
                                className='ui raised very padded text container segment'
                                style={{marginTop:'80px'}}
                                key={user.id} 
                            >
                                <h3 className='ui header'>{ user.name }</h3>
                                <p>{ user.email }</p>
                            </div>	
                        )
                    })
                }
            </>
        )
   }
}

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user;

    return {
        card: state.cards.find(card => card.title === title),
        users: state.users
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteCard: (id) => { dispatch({ type: 'DELETE_CARD', id }) }
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUser: () => { dispatch(fetchUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);