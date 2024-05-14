import Chat from "../../src/chat";
import { handleSession } from "../../src/lib/utils";

function OracleChat() {
    handleSession('OracleChat')
    return <Chat />;
}

export default OracleChat;
