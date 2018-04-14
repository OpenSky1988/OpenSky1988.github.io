import React, {Component} from 'react';
import './Services.css';

class Services extends Component {

    render() {
        return (
            <section id="services">
                <div className="container">
                    <h2>Services</h2>
                    <div className="row">
                        { this.props.skillsList() }
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;