import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'xolodilnik'},
            {id: 2, name: 'smartphon'},
            {id: 3, name: 'NoteBook'},
            {id: 4, name: 'Televizor'},
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name: 'Lenovo'},
            {id:4, name: 'Asus'},
        ]
        this._devices = [
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:2, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:3, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:4, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:5, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.cnx-software.com/wp-content/uploads/2019/08/Snapdragon-8cx-laptop.jpg.webp'},
            {id:6, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.cnx-software.com/wp-content/uploads/2019/08/Snapdragon-8cx-laptop.jpg.webp'},
            {id:7, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:8, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
            {id:9, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'},
        ]
        this._selectedType = {}
        this._selectdBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}
