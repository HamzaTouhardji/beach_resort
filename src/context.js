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
    //getData 2 heure 17 min

    componentDidMount(){
        // this.getData
        let rooms = this.formatData(item)
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading: false
        });
    }

    formatData(item){
        let tempItem = item.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let rooms = {...item.fields, images, id}

            return rooms;
        });
        return tempItem;
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