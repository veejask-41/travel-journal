import React from "react";
import "./Main.css"
import Card from "./Card";
import Data from './Data'


export default function Main() {

    let Cards = Data.map(item => {
        return (
          <Card
            key = {item.key}
            item = {item}
          />
        )
      })

    return (
        <main>
            {Cards}
        </main>
    )
}