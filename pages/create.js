import { useRouter } from "next/router";



export default class Create extends React.Component {


    render() {
        return (<>
            שם
            <br/>
                <input ref={this.name} onInput={this.handleNameChange} type="text"/>
                <br/>
            סיסמא
        
            <br/>
                <input ref={this.pass} onInput={this.handlePassChange} type="text"/>
        
                לינק:
            <code>{this.state.link}</code>
            </>)
    }

    constructor(props) {
        super(props)
        this.name = React.createRef();
        this.pass = React.createRef();
        this.state = {
            link: '',
            name: '',
            pass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handlePassChange =(e) => {
        this.setState({
            pass: e.target.value,
            link: window.location.href.replace("create", "surprise") + "?name=" + this.state.name + "&password=" + e.target.value});
            
        e.preventDefault();
    }

    handleNameChange =(e) => {
        this.setState({
            name: e.target.value,
            link: window.location.href.replace("create", "surprise") + "?name=" + e.target.value + "&password=" + this.state.pass});
            
        this.handleChange();
        e.preventDefault();
    }

    handleChange = () => {
        
    }

    
}