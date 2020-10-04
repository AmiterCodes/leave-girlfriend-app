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
            <button onClick={this.bitlify}>Bitlify</button>
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
        this.bitlify = this.bitlify.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handlePassChange = async (e) => {
        this.setState({
            pass: e.target.value,
            link:window.location.href.replace("create", "surprise") + "?name=" + this.state.name + "&password=" + e.target.value});
            
        e.preventDefault();
    }

    handleNameChange = async (e) => {
        this.setState({
            name: e.target.value,
            link:window.location.href.replace("create", "surprise") + "?name=" + e.target.value + "&password=" + this.state.pass});
            
        e.preventDefault();
    }

    async bitlify() {
        let link = this.state.link;
        
        let body = JSON.stringify({
            long_url: link
        })
        let data = await fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer dab4a184a1682a8d36ac31375710b35566940567'
            }
        });
        let b = await data.json();

        this.setState({
            link: b.link
        })
    }
}