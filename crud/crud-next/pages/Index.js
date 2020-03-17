import Header from "../components/Header";
import {Provider} from "react-redux";
import fetch from 'isomorphic-unfetch';
import store from "../src/store";
import App from "../components/crud/App";

const Index = props => (
    <Provider store={store}>
    <Header />
        <App things={props.lines} />
    </Provider>
);


Index.getInitialProps = async function() {
    const ENDPOINT_URL = 'http://localhost:3001/api/v1/things/';
    const res = await fetch(ENDPOINT_URL);
    const lines = await res.json();
    return { lines };
};

export default Index;
