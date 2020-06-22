import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="ui fluid container ldr-padding" ref="about">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column">
                            <div className="ui segment content">
                                <h2 className="ui header">MHDB Admin</h2>
                                <p>
                                    <a href="https://docs.google.com/document/d/1FOEGmWVIjyFyJlHCfkyVAfGSm_GpFbbWLy62mwFX2rw/edit#heading=h.8cj3zt7siii"> User manual </a> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Home;
