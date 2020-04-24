import React from 'react';

class AboutChills extends React.Component {
    render() {
        return (
            <div className="ui fluid container ldr-padding" ref="about">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column">
                            <div className="ui segment content">
                                <h2 className="ui header">About</h2>
                                <div>
                                    <b>What is Affectiverse?</b> 
                                    <br/> Affectiverse is the research interface of the future. Designed to take the science of human emotion to the next level, the platform brings together research teams, ideas, articles, and technology. We designed the platform to help you discover and explore content directly related to your interests and allow collaborative research work. Scientists interact to build questions for the Affectiverse, with instant answers and publication. Out of this collective endeavor, the project aims to relate brain areas to mental functions, scientific insights to clinical treatments, and theoretical claims to empirical data. 
                                    <br/> <br/> <b>What is in Affectiverse 1.0?</b>
                                    <br/> In this first version, we chose the emotion of chills as a core focus. Chills is the feeling of cold down the spine, which human experience globally in extreme situations. Affectiverse 1.0 brings together the entire community of chills researchers in one place to explore together the existing state of knowledge across disciplines and institutions and generate new knowledge. Chills are an ideal case study as they are measurable, conscious, and universal. They link physiological mechanisms (shivering) to psychological concepts (awe, insight). Affectiverse 1.0. aggregates all existing knowledge/papers on the topic, linking teams, sensors, brain areas, stimuli, and claims. We have much to discover about this emotion: what stimuli trigger them? what sensors can be used to measure them? what biological function do they play for humans? could they be used for therapeutical applications?
                                    <br/> <br/> <b>How can you take part?</b>
                                    <br/> Affectiverse is fed by world experts, who use it to meet colleagues, discover new ideas and articles, and keep updated about recent progress in the field. You can start by taking a look at your research and its connection to other researchers in the field (discover who has been working on a similar topic for example). We created a Slack Channel (http://affectiverse.slack.com/) for researchers to build queries together and publish results. Fee free to explore the queries currently available or explore our library of films and music triggering chills. In addition to ideas, you can also find datasets and myriads of technologies to measure and intervene on chills. The most adventurous of you can also contact us to join our development team on GitHub.
                                    <div className="blue ui card item">
                                        <div className="content">
                                            <div className="header"><a href="http://vu.nl" target="_blank"><img className="ui centered medium image" src="/assets/img/piper.jpg.webp" /></a></div>
                                            <div className="meta"><a href="http://www.networkinstitute.org/" target="_blank">Department Chills  & <br/> Chills Institute</a></div>
                                            <div className="description">
                                                Chills university <br/> 
                                                Chills street <br/> 
                                                Chills City <br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui yellow card item">
                                        <div className="content">
                                            <div className="extra content">
                                                <h4 className="ui header"> Contacts: </h4>
                                                <div className="ui list">
                                                    <div className="item">
                                              tel (+33)-33-333 3333
                                                    </div>
                                                    <div className="item">
                                                        <a className="ui label animated zoomIn" href="mailto:chills@prof.chills"><i className="mail icon"></i> Prof. &nbsp; Chills &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
                                                    </div>
                                                    <div className="item">
                                                        <a className="ui label animated zoomIn" href="mailto:chills@dr.chills"><i className="mail icon"></i> Dr. &nbsp; Chills &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutChills;
