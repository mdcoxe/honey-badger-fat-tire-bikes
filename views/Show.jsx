const React = require('react');
const Layout = require('./Layout/Layout');

class Show extends React.Component{
    render() {
        const quantity = this.props.product.qty;
        return(
            <Layout>
                <body>
                    <div className="showBody">
                        <div className="pageTitle">
                            <h1>
                            The {this.props.product.name} 
                            </h1>
                        </div>
                        <div className="bigImg"><img src={this.props.product.img}></img>
                        </div>
                        <div className="info">
                            <div className="desc"><p>Description: {this.props.product.description}</p></div>
                                <div className="p-q">
                                    <p>Price: ${this.props.product.price}</p>
                                    <p>Quantity: {quantity ? quantity: 'Backordered' }</p>
                                {/* add in buy button, delete, and edit button */}
                                <div className="buttons">
                                    <button className="button" >Purchase</button>
                                    <a href={`/fattire/${this.props.product._id}/edit`}><button className="button" >Edit Listing</button></a>
                                {/* Delete Form */}
                                    <form action={`/fattire/${this.props.product.id}?_method=DELETE`} method="POST">
                                        <input className="button" type="submit" value="Remove Listing"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </Layout>
        )
    }

}

module.exports = Show;