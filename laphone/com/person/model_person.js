const Model = require('../base/model');
const API = require('../base/api');
const foreach = require('lodash.foreach');
const cookie = require('tiny-cookie');

class ModelPerson extends Model {
    _defaults() {
        return {
            purchasesValue: 0,
            pointsValue: 0,
            history: [],
            status: '',
            statusPic: null,
            email: null,
            address:''
        };
    }

    login(opt) {
        API
            .login(opt)
            .then((resp)=>{
                this.emit(ModelPerson.EVENT_LOGGED, resp);
                this.fetch();
            })
    }

    fetch (opt) {
        opt = opt || {};
        API
            .userInfo()
            .then(
                (resp)=>{
                    if (resp.status == 'ok') {
                        Object.assign(resp, {
                            'address': cookie.get('address')
                        });
                        this.set(resp, {parse: true, updateEmpty: true, silent: true});
                        if (opt.purchase) {
                            this.fetchAddHistoryInfo();
                        } else {
                            this.emit(Model.EVENT_CHANGE);
                            this.emit(Model.EVENT_FETCH);
                        }
                    } else {
                        this.emit(ModelPerson.EVENT_ERROR_FETCH, resp);
                    }
                }
            );
    }

    getPurchasesCost() {
        return this.get('history').reduce((prev, val)=>{
            if (val.action == 'purchase') {
                return prev + val.points_delta;
            }
            return prev;
        }, 0);
    }


    fetchAddHistoryInfo () {
        var hist = this.get('history'),
            entry = null, el = hist.length,
            promises = [];

        for (var i=0, l=el; i<l; i++) {
            entry = hist[i];
            if (entry.id) {
                promises.push(API.getPurchaseInfo(entry.id));
            }
        }

        Promise.all(promises).then(values =>{
            foreach(values, (item, index)=>{
                hist[index]['price'] = item.purchase.price;
                hist[index]['products'] = item.cart.cart.positions.map((item, index)=>{
                    return {
                        price: item.new_price*1,
                        num: item.num*1,
                        points: item.points*1,
                        name: item.product.name,
                        sku: item.product.sku
                    };
                });
            });

            this.emit(Model.EVENT_CHANGE);
            this.emit(Model.EVENT_FETCH);
        });
    }

    logout() {
        API
            .logout()
            .then(()=>{
                this.emit(ModelPerson.EVENT_LOGOUTED);
            });
    }

    _parse(resp) {
        return {
            purchasesValue: resp.purchases.sum,
            pointsValue: resp.user_points.confirmed,
            history: (resp.history || []),
            status: resp.user_status.name,
            statusPic: resp.user_status.pic,
            email: resp.user.email,
            name: resp.user.name,
            pic: resp.user.pic,
            pointsConf: resp.user_points.confirmed,
            pointsTotal: resp.user_points.total,
            pointsUnConf: resp.user_points.unconfirmed,
            lastName: resp.user.last_name,
            firstName: resp.user.first_name,
            phone: resp.user.phone,
            male: (resp.user.sex === 1),
            female: (resp.user.sex === 2),
            birthDate: resp.user.birth_date,
            address: resp.address,
            middleName: resp.user.middle_name,
        };
    }

    save(data) {

        let sendData = {
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
            birthDate: data.year + '-' + ((data.month.length == 1) ? '0' + data.month : data.month) + '-' + ((data.day.length == 1) ? '0' + data.day : data.day),
            sex: data.sex*1
        };

        data['phone'] = data['phone'].replace(/\D/g, '');

        if (this.get('phone') !== data['phone']) {
            sendData['addPhone'] = data['phone'];
        } else {
            sendData['phone'] = data['phone'];
        }

        if (this.get('email') !== data['email']) {
            sendData['addEmail'] = data['email'];
        } else {
            sendData['email'] = data['email'];
        }

        API
            .userUpdate(sendData)
            .then((resp)=>{
                console.log(resp)
                if (resp && resp.status == 'ok') {
                    this.emit(ModelPerson.EVENT_SAVED, resp);
                    this.fetch();
                } else if(resp.status == "error" && resp.status_code === -200006){
                    this.emit(ModelPerson.EVENT_ERROR_SAVE, {
                        message: "Телефон введён неверно"
                    });
                } else {
                    this.emit(ModelPerson.EVENT_ERROR_SAVE, resp)
                }
            });
    }
}

ModelPerson.EVENT_LOGGED = 'model.person.logged';
ModelPerson.EVENT_LOGOUTED = 'model.person.logouted';
ModelPerson.EVENT_SAVED = 'model.person.saved';
ModelPerson.EVENT_ERROR_SAVE = 'model.person.error-save';
ModelPerson.EVENT_ERROR_FETCH = 'model.person.error-fetch';
ModelPerson.EVENT_HISTORY_FETCHED = 'model.person.history-fetch';

module.exports = ModelPerson;