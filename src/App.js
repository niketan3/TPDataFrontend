import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ModalDialog from "../src/modalform";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
function App() {
  const [toshow, settoshow] = useState([]);
  const [ghya, setghya] = useState([]);
  const [del, setdel] = useState([]);
  const [id, setid] = useState("0");
  const [tpdata, settpData] = useState([]);
  const [check, setcheck] = useState(0);
  let flag = (
    <Button style={{ margin: "4px" }} variant="success">
      Add Selected Names
    </Button>
  );

  const [flag1, setflag1] = useState(0);

  const onchange = (e) => {
    if (e.target.value != null) {
      if (e.target.name == "ID") {
        setid(e.target.value);
      }
    }
  };
  const exp = () => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.autoTable({
      html: "#my-table",
    });
    doc.save("data.pdf");
  };
 
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    orientation: "landscape",
    documentTitle: "Userdata",
  });
  const handlecheck = async (event, param1) => {
    if (flag1 == 0) {
      if (event.target.checked) {
        ghya.push(param1);
      } else {
        for (let i = 0; i < ghya.length; i++) {
          if (ghya[i] == param1) {
            ghya[i] = -1;
          }
        }
      }
    } else {
      if (event.target.checked) {
        del.push(param1);
      }
    }
  };

  const select = async (event) => {
    if (flag1 == 0) {
      for (let i = 0; i < ghya.length; i++) {
        let tp = document.getElementById("check" + ghya[i]);
        tp.checked = false;
      }
      //Add Selected Names
      setflag1(1);

      let tp = [];
      let j = 0;
      for (let i = 0; i < tpdata.length; i++) {
        if (i != ghya[j]) {
          tp[i] = tpdata[i];
          tp[i].select = false;
          tpdata[i].select = false;
        } else {
          tp[i] = tpdata[i];
          j++;
        }
      }
      settoshow(tpdata);
    }
  };
  const DeleteNames = () => {
    let tp = [];
    let j = 0;
    del.sort();
    for (let i = 0; i < tpdata.length; i++) {
      if (i == del[j]) {
        tpdata[i].select = false;
        tp.push(tpdata[i]);
        j++;
      } else {
        tp[i] = tpdata[i];
      }
    }
    
    console.log(tp);
    settoshow(tp);
  };
  if (flag1 == 0) {
    flag = (
      <Button style={{ margin: "4px" }} variant="success" onClick={select}>
        Add Selected Names
      </Button>
    );
  } else {
    flag = (
      <Button style={{ margin: "4px" }} variant="success" onClick={DeleteNames}>
        Delete Selected Names
      </Button>
    );
  }
  
  const onClickSubmit = async (event) => {

    // event.preventDefault();
    const url = "https://tpdata1.onrender.com/tp";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID: id }),
    });
    const json = await response.json();
    // console.log(json)
    for (let i = 0; i < json.length; i++) {
      json[i].select = true;
    }
    settoshow(json);
    settpData(json);
  };
  const AddNames = () => {
    setflag1(0);
    for (let i = 0; i < tpdata.length; i++) {
      tpdata[i].select = true;
    }
    settoshow(tpdata);
    for (let i = 0; i < ghya.length; i++) {
      let tp = document.getElementById("check" + ghya[i]);
      console.log(tp);
      tp.checked = true;
    }
  };
  const Search=async(event)=>{
    // console.log(id)
    event.preventDefault()
    const url = "https://tpdata1.onrender.com/tpdata";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID: id }),
    });
    const json = await response.json();
    console.log(json)
    for (let i = 0; i < json.length; i++) {
      json[i].select = true;
    }
    // console.log(json)
    settoshow(json);
    settpData(json);
  }
  let printList = (
    <Button variant="success" onClick={generatePDF}>
      PrintList
    </Button>
  );
  if (!flag1) {
    printList = null;
  } else {
    printList = (
      <Button variant="success" onClick={generatePDF}>
        PrintList
      </Button>
    );
  }
   useEffect(() => {
    onClickSubmit()
  }, [])
  let button = (
    <Button onClick={AddNames} variant="success" style={{ margin: "4px" }}>
      Add More Names
    </Button>
  );
  if (flag1 == 0) {
    button = null;
  } else {
    button = (
      <Button variant="success" onClick={AddNames} style={{ margin: "4px" }}>
        Add More Names
      </Button>
    );
  }
  let id1 = 0;
  return (
    <>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <form style={{ display: "inline-block" }} onSubmit={Search}>
          <input
            placeholder="Enter Your सेवार्थआयडी"
            name="ID"
            onChange={onchange}
          ></input>
          <Button
            style={{ margin: "4px" }}
            variant="success"
            type="submit"
            className="btn btn-primary"
          >
            Search
          </Button>
        </form>
        {printList}
      </div>
      <div
        style={{
          margin: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {flag}

        {button}
      </div>
      <div ref={conponentPDF} style={{ width: "100%" }}>
        <table id="my-table">
          <tr>
            <th>Select</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Office Name</th>
            <th>Post</th>
            <th>Employee Contact No</th>
            <th>Employee Email ID</th>
            <th>Office Email ID</th>
            <th>Divison</th>
            <th>District</th>
          </tr>
          {toshow.map((val, key) => {
            {
              id1 = "check" + key;
            }
            if (val.select) {
              return (
                <tr key={key}>
                  <td
                    className={val.शासकीयकर्मचाऱ्याचेनाव}
                    onChange={(event) => handlecheck(event, key)}
                  >
                    <input type="checkbox" id={id1}></input>
                  </td>
                  <td>{val.सेवार्थआयडी}</td>
                  <td>{val.शासकीयकर्मचाऱ्याचेनाव}</td>
                  <td>{val.कार्यालयाचेनाव}</td>
                  <td>{val.Post}</td>
                  <td>{val.संपर्कक्र}</td>
                  <td>{val.ईमेल}</td>
                  <td>{val.कार्यालयाचाईमेल}</td>
                  <td>{val.Division}</td>
                  <td>{val.District}</td>
                </tr>
              );
            }
          })}
        </table>
      </div>
    </>
  );
}

export default App;
