import React, { useEffect } from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const mapState = (state) => ({
  currentUser : selectCurrentUser(state)
})

const HomePage = () => {
  const history = useHistory();
  const {currentUser} = useSelector(mapState);
  
  useEffect(() => {
    if(currentUser){
    if(currentUser.type === "Wholesaler"){
      history.push("wholesaler-profile")
    }
  }
  })

  return(
  <div className="homepage">
    <Directory />
  </div>
);
}

export default HomePage;
