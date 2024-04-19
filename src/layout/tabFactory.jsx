import { Settings } from "../tabs/Settings";

export default function factory(node) {
    var component = node.getComponent();
    // placeholder
    if (component === "placeholder") {
        return (
            <div className="tab_content">
                <p>{node.getName()}</p>
            </div>
        );
    } else if (component === "Settings") {
        return (
            <div className="tab_content">
                <Settings />
            </div>
        );
    }
}
