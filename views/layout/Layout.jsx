const React = require('react');

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>Fat-Tire Bikes</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <header>
                    <div className="header">
                        <div className="lheader">
                            <a href="/fattire">
                                <h1>Honey Badger</h1>
                                <h2>Fat-Tire Bike Shop</h2>
                            </a>  
                        </div>
                        <div className="lnav">
                            <a href="/fattire/new">Submit New Bike</a>
                        </div>
                    </div>
                </header>
                <body>
                    {this.props.children}
                    <footer>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout;