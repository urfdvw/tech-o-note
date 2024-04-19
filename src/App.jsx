// React
import { useState, useEffect, useCallback } from "react";
// Style
import "./App.css";
// Features
import { useFileSystem, backupFolder } from "react-local-file-system";
import DarkTheme from "react-lazy-dark-theme";
import { useConfig } from "react-user-config";
import schemas from "./schemas";
// context
import Context from "./Context";
// layout
import * as FlexLayout from "flexlayout-react";
import layout from "./layout/layout.json";
import factory from "./layout/tabFactory";

function App() {
    // main directory for folderView
    const { openDirectory, directoryReady, statusText: directoryStatusText, rootDirHandle } = useFileSystem();
    // config
    const { config, set_config, ready: configReady } = useConfig(schemas);
    // flex layout
    const [flexModel, setFlexModel] = useState(FlexLayout.Model.fromJson(layout));
    // confirm leave
    useEffect(() => {
        // https://stackoverflow.com/a/47477519/7037749
        if (directoryReady) {
            window.onbeforeunload = function (e) {
                var dialogText = "Are you sure to leave?"; // TODO: not shown up yet
                e.returnValue = dialogText;
                return dialogText;
            };
        }
    }, [directoryReady]);
    // If config initialization not done, don't continue.
    if (!configReady) {
        return;
    }

    // theme config
    var dark = null;
    if (config.global.theme === "light") {
        dark = false;
    } else if (config.global.theme === "dark") {
        dark = true;
    }

    return (
        <Context.Provider
            value={{
                flexModel: flexModel,
                openDirectory: openDirectory,
                directoryReady: directoryReady,
                directoryStatusText: directoryStatusText,
                rootDirHandle: rootDirHandle,
                schemas: schemas,
                config: config,
                set_config: set_config,
            }}
        >
            <div className="techonote">
                <DarkTheme dark={dark} />
                <div className="techonote-header">head</div>
                <div className="techonote-body">
                    <FlexLayout.Layout model={flexModel} factory={factory} />;
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
