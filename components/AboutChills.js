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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in diam at diam feugiat posuere. Aenean at lorem molestie, ullamcorper neque sed, efficitur turpis. Aliquam commodo purus ut tincidunt pharetra. Donec justo dui, maximus nec congue vel, pretium a magna. Phasellus scelerisque, risus sed ornare aliquam, turpis orci commodo nisi, at faucibus dolor dui ut tortor. Sed dictum placerat sapien eu mollis. Nam eleifend, quam vitae ornare sollicitudin, sapien quam pellentesque mi, sit amet elementum lacus ligula ac urna. Praesent neque metus, venenatis et erat quis, laoreet mattis mauris. Sed mattis quam a augue aliquet hendrerit. Mauris ac mauris augue. Mauris facilisis dignissim neque sed consequat.

                                    Proin at dui sodales, facilisis eros eget, interdum leo. Praesent gravida commodo leo, sit amet malesuada felis lobortis eget. Aenean vel enim massa. Mauris accumsan interdum sagittis. Maecenas consectetur dignissim accumsan. Nulla eleifend sem at eros maximus lacinia. Quisque nec quam nisi. Donec egestas sem id mauris pharetra, vitae porta ligula maximus. Pellentesque sed mauris ex. Phasellus iaculis turpis et nibh ullamcorper pharetra. Mauris non neque eget ex consectetur tempor. Suspendisse dignissim eget lacus non suscipit.

                                    Suspendisse hendrerit in turpis ut feugiat. Donec rutrum, erat a dictum facilisis, nisi nisi ullamcorper sapien, sit amet ultrices massa purus at neque. Sed facilisis, enim sit amet mollis interdum, ligula lorem eleifend lacus, at fringilla nunc mauris a mi. Sed lectus purus, convallis vel mi vel, luctus accumsan urna. Phasellus in felis orci. Vivamus facilisis venenatis molestie. Phasellus at sem velit. Suspendisse tincidunt mauris non elit pharetra consequat. Pellentesque venenatis ligula erat, vel congue sem vehicula nec. 
                                    <ul>
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                    </ul> 
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
