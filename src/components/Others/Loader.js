import '../../styles/Loader.css'

export default function Loader() {
    return (
        <div className="spinner">
            <p>loading...</p>
            <div className="spinner-area spinner-first"></div>
            <div className="spinner-area spinner-second"></div>
            <div className="spinner-area spinner-third"></div>
        </div>
    );
}