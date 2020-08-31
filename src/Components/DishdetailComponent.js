import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}


function RenderComments({comments}) {
    const coments = comments.map(comment => {
        return (
            
                <li key={comment.id}>
                    <h5>{comment.comment}</h5><br/>
                    <h5>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'

                    }).format(new Date(Date.parse(comment.date)))}
                    </h5><br/>
                </li>
           
           
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <div className="container">
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {coments}
                </ul>
            </div>
        </div>
    )
}


    

    
    const DishDetail = (props) => {

        const dish = props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        return (
            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );
    }

export default DishDetail;