import { useContext } from "react";
import Context from "../Context";
import { ConfigForms } from "react-user-config";

export function Settings() {
    const { schemas, config, set_config } = useContext(Context);
    return (
        <div className="tab_content">
            <ConfigForms schemas={schemas} config={config} set_config={set_config} />
        </div>
    );
}
