const React = require('react');
const Layout = require('./layout/Layout');

class New extends React.Component {
    render(){
        return(
            <Layout>
                <div className="pageTitle">
                        <h1>Submit a New Bike</h1>
                    <div className="bigImg">
                        <p>
                            <form action="/fattire" method="POST">
                                Name: <input type="text" name="name" /><br/>
                                Description: <input type="text" name="description" /><br />
                                Img: <input type="text" name="img" /><br />
                                Price: <input type="text" name="price" value="0"/> <br />
                                Quantity: <input type="text" name="qty" /><br/>
                                <input type="submit" name="" value="Create Product"/>
                            </form>
                        </p>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = New;