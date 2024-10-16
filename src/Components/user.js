import React from "react";

import {Card, CardBody, CardText} from "reactstrap";

const user=({st})=>{
    return(
        <Card>
            <CardBody>
                <CardText>id : {st.id}</CardText>
                <CardText>username : {st.username}</CardText>
                <CardText>Password : {st.password}</CardText>     
            </CardBody>
        </Card>

    ) 
}

export default user;
