import { ApiService } from "./api.service";

export class UserCard {
    user_id: number = null;
    name: string = '';
    first_name: string = '';
    last_name: string = '';
    age: number = null;
    birth_date: string = '';
    email: string = null;
    phone: string = null;
    tags: object[] = [];
    custom_vars: object[] = [];
    occupation: string = null;
    files: object[] = null;
    address: string = '';
    comment: string = null;
    status: object = null;

    constructor(user, protected API: ApiService) {
        this.user_id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.name = this.getFullName();
        this.age = user.age;
        this.birth_date = user.birth_date;
        this.email = user.email;
        // For pipe lib remove country code =(
        this.phone = user.phone && user.phone.slice(1);
        this.tags = user.tags;
        this.custom_vars = user.custom_vars || [];

        if (this.getStatus() && this.API.data.user_types && this.API.data.user_types && ~this.API.data.user_types.indexOf(this.getStatus())) {
            this.status = this.API.data.user_types.indexOf(this.getStatus())
        }
        if (this.getOccupation()) {
            this.occupation = this.getOccupation().name;
        }
        if (this.API.data.user_variables.files && this.getVariable(this.API.data.user_variables.files)) {
            let files = JSON.parse(this.getVariable(this.API.data.user_variables.files).value);
            this.files = files.map(file => {
                return {
                    link: file,
                    name: file.split('/').pop()
                }
            })
        }
        if (this.API.data.user_variables.address) {
            let address = this.API.data.user_variables.address.map(field => {
                return this.getVariable(field) && this.getVariable(field).value
            }).filter(field => field)
            this.address = address.join(', ')
        }
        if (this.getVariable(this.API.data.user_variables.comment)) {
            this.comment = this.getVariable(this.API.data.user_variables.comment).value;
        }
    }

    getFullName(): string {
        return this.first_name ? this.first_name + (this.last_name ? ' ' + this.last_name : '') : this.last_name ? this.last_name : ''
    }

    getStatus(types: object[] = this.API.data.user_types, tags: object[] = this.tags): any {
        return types
            .filter((type: any) => { return tags.find((tag: any) => tag.name == type.tag) })
            .map((type: any) => {
                type.tagInfo = tags.find((tag: any) => tag.name == type.tag)
                return type
            })[0]
    }

    getAgePlural(titles: any): string {
        let cases = [2, 0, 1, 1, 1, 2];
        return this.age + " " + titles[(this.age % 100 > 4 && this.age % 100 < 20) ? 2 : cases[(this.age % 10 < 5) ? this.age % 10 : 5]];
    }

    getVariable(name: string): any {
        return this.custom_vars.find((variable: any) => variable.name == name)
    }

    getOccupation(occupations: object[] = this.API.data.user_occupations): any {
        let occupation = occupations.find((occupation: any): boolean => {
            return this.tags.some((tag: any): boolean => {
                return tag.name == occupation.tag
            })
        })
        return occupation;
    }

}
