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
                        <nav role="navigation">
  <ul>
    
    <li>Menu
      <ul class="dropdown">
        <li><a href="/">Home</a></li>
        <li><a href="/fattire/">Inventory</a></li>
        <li><a href="/aboutus/">About Us</a></li>
        <li><a href="/events/">Events</a></li>
        <li><a href="/fattire/new/">Submit a Bike</a></li>
      </ul>
    </li>
  </ul>
</nav>
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