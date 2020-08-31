import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{

    renderComments(comments) {
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

    renderDish(dish) {
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

    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishId = this.renderDish(dish)
        const commentDish = this.renderComments(dish.comments)
        return (
            <div className='row'>
                {dishId}
                {commentDish}
            </div>
        )
    }
}

export default DishDetail;