const React = require('react');
const Layout = require('./layout/Layout');

class About extends React.Component{
    
    render() {
        return(
            <Layout>
                <body>
                    <div className="aboutBody">
                        <h1>About Us</h1>
                        <img className="aboutImg" src="https://www.rei.com/events/images/csi/subProgram/21/course/89913" alt=""/>
                        <p className="lilPara">
                        We ride fat tire bikes and such...grrr, snow! Oh no, no snow on my tires...I'm amazing at cycling, is it bicycling.  Doesn't matter, I'm the best at it...look ma, no snow.  
                        </p>
                    </div>
                </body>
            </Layout>
        )
    }
}
module.exports = About;