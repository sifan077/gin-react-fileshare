import React from 'react';
import {Center} from "../../components/center";
import {Button} from "./components";
import {http} from "../../shared/http";

function ClearFiles(props) {
    const clear = () => {
        http.get("/clear").then(res => {
            console.log(res.data)
            if (res.data.msg) {
                alert(res.data.msg)
            }
        }).catch((e) => Promise.reject(e));
    }
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Center className="row">
                <Button onClick={() => clear()}>清除缓存</Button>
            </Center>
        </div>
    );
}

export default ClearFiles;