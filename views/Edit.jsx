const React = require('react');
const Layout = require('./Layout/Layout');

class Edit extends React.Component {
    render(){
        return(
            <Layout
                
            >
                <div className="pageTitle">
                        <h1>Edit Bike</h1>
                    <div className="bigImg">
                        <p>
                            <form action={`/fattire/${this.props.product._id}?_method=PUT`} method="POST">
                                Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
                                Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br />
                                Img: <input type="text" name="img" defaultValue={this.props.product.img} /><br />
                                Price: <input type="text" name="price" defaultValue={this.props.product.price}/> <br />
                                Quantity: <input type="text" name="qty" defaultValue={this.props.product.qty}/><br/>
                                <input type="submit" name="" value="Update Product"/>
                            </form>
                        </p>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = Edit;