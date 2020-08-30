import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class Dishdetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    renderComments(dishComments){
        if(dishComments != null){
            const commentsList = dishComments.map(({comment,author,date})=>(
                <ul>
                    <li style={{listStyle:"none"}}>
                        {comment} <br/>
                        --{author}, {date}
                    </li>
                </ul>
            ) );
            console.log(commentsList);
           return(commentsList);    
        }
        else{
            return(
                <div></div>
            )
        }
        

    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishInfo)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.comments)}
                    
                </div>
            </div>
        );
    }
}
export default Dishdetail;