const React = require('react');
const Layout = require('./layout/Layout');

class Events extends React.Component{
    
    render() {
        return(
            <Layout>
                <body>
                    <div className="eventsBody">
                        <h1>Cycling Events</h1>
                        <img className="eventsImg" src="https://1d8piv1xedxt3k9gin22z4pqb30-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/benefat-jump.jpg" alt="ahhh a spider!!!!"/>
                        <p className="lilPara">
                        Kif, I have mated with a woman. Inform the men. I don't want to be rescued. Professor, make a woman out of me. Anyone who laughs is a communist! Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions?
                        </p>
                        <p className="lilPara">
                        What are their names? Fetal stemcells, aren't those controversial? Ooh, name it after me! It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels.


                        </p>
                        <p className="lilPara">
                        I am the man with no name, Zapp Brannigan!
                        I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money. The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep.
                        </p>


                    </div>

                  
                </body>
            </Layout>
        )
    }
}
module.exports = Events;