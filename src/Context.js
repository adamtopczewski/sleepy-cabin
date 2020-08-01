import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms: rooms,
            sortedRooms: rooms,
            featuredRooms: featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.url);            

            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let {rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets} = this.state;

        // Wszystkie pokoje
        let tempRooms = [...rooms];
        // Przeszktałcanie wartości ze stringa na int
        capacity = parseInt(capacity);
        price = parseInt(price);
        // Filtrowanie po typie kabiny
        if (type !== 'all'){
            tempRooms = tempRooms.filter( room => room.type == type);
        }
        // Filtrowanie po pojemności
        if (capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity === capacity);
        }
        // Filtrowanie po cenie kabiny
        tempRooms = tempRooms.filter( room => room.price <= price);
        // Filtrowanie po wielkości kabiny 
        tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);
        // Filtrowanie po dostp. śniadania
        if(breakfast){
            tempRooms = tempRooms.filter( room => room.breakfast === true);
        }
        // Filtrowanie po obecności zwierząt
        if(pets){
            tempRooms = tempRooms.filter( room => room.pets === true);
        }
        // Ustawianie posortowanych pokoi
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state, 
            getRoom: this.getRoom, 
            handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext }