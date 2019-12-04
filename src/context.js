import React, { Component } from 'react'
import item from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true 
    };
    //getData

    componentDidMount(){
        let rooms = this.formatData(item)
    }

    formatData(item){
        let tempItem = item.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id}
        });
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer};