import "../styles/message.css";

const Message = ({ Class, Message }) => {
    return (
        <div>
            <p className={Class}>{Message}</p>
        </div>
    );
};

export default Message;