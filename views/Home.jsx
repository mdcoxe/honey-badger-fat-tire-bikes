const React = require('react');
const Layout = require('./layout/Layout');

class Home extends React.Component{
    
    render() {
        return(
            <Layout>
                <body>
                    <div className="homeBody">
                        <div className="homeImg"> 
                            <img src="/images/wallhaven-nmrvmk.jpg" alt=""/>
                        </div>
                        <div className="features">
                            <div className="featText">Featured Fat-Tired Bikes</div>
                                {/* {
                                    this.props.products.map((product, index) => {
                                        <div className="tribikes">
                                            <div className="ind-product">
                                                <p><a href={`/fattire/${product[0]._id}`}>{product.name}</a></p>
                                                <img className="tile-img" src={product.img}/>
                                            </div>
                                            <div className="ind-product">
                                                <p><a href={`/fattire/${product[1]._id}`}>{product.name}</a></p>
                                                <img className="tile-img" src={product.img}/>
                                            </div> 
                                            <div className="ind-product">
                                                <p><a href={`/fattire/${product[0]._id}`}>{product.name}</a></p>
                                                <img className="tile-img" src={product.img}/>
                                            </div>
                                        </div>
                                    })
                                } */}
                            </div>
                        </div>
                </body>
            </Layout>
        )
    }
}
module.exports = Home;