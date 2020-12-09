const React = require('react');
const Layout = require('./Layout/Layout');

class Home extends React.Component{
    
    render() {
        return(
            <Layout>
                <div className="products">
                        <body>
                            {
                                this.props.products.map((product, index) =>{
                                    return (
                                        <div className="ind-product">
                                            <p><a href={`/fattire/${product._id}`}>{product.name}</a></p>
                                            <img className="tile-img" src={product.img}/>
                                        </div>
                                    )
                                })
                            }
                           
                        </body>
                </div>
            </Layout>
        )
    }
}
module.exports = Home;