import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './product.css';

class Product extends Component{
    render(){
        return(
                <div className='product'>
                    <img src={this.props.imgUrl} width='100px' height='100px' alt='product'></img>
                    <p className='id'>Item no: {this.props.id}</p>
                    <p className='title'>{this.props.title}</p>
                </div>
        );
    }
}

export default Product;