import { useState, useEffect } from "react";

export default function RandomColor(){
    const [typeOfcolor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorutility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomHexColor(){
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';

        for(let i = 0; i<6; i++){
            hexColor += hex[randomColorutility(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
        const r = randomColorutility(256);
        const g = randomColorutility(256);
        const b = randomColorutility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if(typeOfcolor==="hex"){
            handleCreateRandomHexColor();
        }
        else{
            handleCreateRandomRgbColor();   
        }}, [typeOfcolor]);

    return (
        <div
            style={{
                width: "100vw", 
                height: "100vh",
                background: color, 
                textAlign: "center",
            }}
        >
            <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
            <button onClick={()=> setTypeOfColor("rgb")}>Create RGB color</button>
            <button 
                onClick ={
                    typeOfcolor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    color: "#ffff",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <h3>{typeOfcolor == "rgb" ? "RGB COLOR": "HEX COLOR"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )

}