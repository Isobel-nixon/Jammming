import React from 'react';

class Track extends React.Component{

    renderAction(isRemoval){
        return <button className='Track-action'>{isRemoval?'-':'+'}</button>
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction(true)}
            </div>
        );
    }
}

export default Track;