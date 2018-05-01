

var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Huawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

class NameField extends React.Component {
    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val.length>2;
    }
    onChange(e) {
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        var color = this.state.valid===true?"green":"red";
        return <p>
            <label>Имя:</label><br />
            <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }
}
class AgeField extends React.Component {

    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val>=0;
    }
    onChange(e) {
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        var color = this.state.valid===true?"green":"red";
        return <p>
            <label>Возраст:</label><br />
            <input type="number" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }
}

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var name = this.refs.nameField.state.value;
        var age = this.refs.ageField.state.value;
        if(this.refs.nameField.state.valid && this.refs.ageField.state.valid){
            alert("Имя: " + name + " Возраст: " + age);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NameField value="" ref="nameField" />
                <AgeField value="5" ref="ageField" />
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
ReactDOM.render(
    <UserForm />,
    document.getElementById("app")
);


/*

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        var name = props.name;
        var nameIsValid = this.validateName(name);
        var age = props.age;
        var ageIsValid = this.validateAge(age);
        this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};

        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateAge(age){
        return age>=0;
    }
    validateName(name){
        return name.length>2;
    }
    onAgeChange(e) {
        var val = e.target.value;
        var valid = this.validateAge(val);
        this.setState({age: val, ageValid: valid});
    }
    onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.nameValid ===true && this.state.ageValid===true){
            alert("Имя: " + this.state.name + " Возраст: " + this.state.age);
        }
    }

    render() {
        // цвет границы для поля для ввода имени
        var nameColor = this.state.nameValid===true?"green":"red";
        // цвет границы для поля для ввода возраста
        var ageColor = this.state.ageValid===true?"green":"red";
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={this.state.name}
                           onChange={this.onNameChange} style={{borderColor:nameColor}} />
                </p>
                <p>
                    <label>Возраст:</label><br />
                    <input type="number" value={this.state.age}
                           onChange={this.onAgeChange}  style={{borderColor:ageColor}} />
                </p>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
ReactDOM.render(
    <UserForm name="" age="0" />,
    document.getElementById("app")
);

*/


/*
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
);*/
