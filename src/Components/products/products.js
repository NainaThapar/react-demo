import React, { Component } from 'react';
import axios from 'axios';

import Product from '../product/product';
class Products extends Component{
    state = {
        products: [],
        albumId: [1],
        num:1,
        error: false,
        errormsg: ''
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({products: response.data});
        }) 
        .catch(error =>{this.setState({error: true, errormsg: error})
    })
    }

    loadMore = () => {
        const a = this.state.num + 1;
        this.state.albumId.push(a);
        this.setState({
            num: a,
            albumId: this.state.albumId
        })
    }

    

    render() {
        let products = this.state.products.map(product => {
            return (this.state.albumId.map(val => {
                return (product.albumId===val?<Product id={product.id} title={product.title} imgUrl={product.url} key={product.id}/>:null);
            }))
                
        })
    
        return(
            (this.state.error ? <div>Network problem</div>:
            <div> 
                <h1>products</h1>
                <section className='Products'>
                   {products}
                </section>
                <button onClick={this.loadMore}>Load More..</button>
            </div>)
            
        );
    }
}

export default Products;
