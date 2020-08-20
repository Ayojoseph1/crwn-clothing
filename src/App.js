import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
      const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              
              id: snapShot.id,
              ...snapShot.data()
            })
        })
       
      }
      setCurrentUser( userAuth );
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage} />      
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App) ;
