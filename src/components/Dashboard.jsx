import { useRef, useState } from "react";

import AddWidget from "./AddWidget.jsx";

export default function Dashboard() {
  const dialog = useRef();

  const initialdata = {
    CSPM: {
      CSPMwidget1: {
        Title: "cspm1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      CSPMwidget2: {
        Title: "cspm2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      CSPMwidget3: {
        Title: "cspm3",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
    },
    CWPP: {
      CWPPwidget1: {
        Title: "cwpp1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      CWPPwidget2: {
        Title: "cwpp2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      CWPPwidget3: {
        Title: "cwpp3",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
    },
    Image: {
      Imagewidget1: {
        Title: "image1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      Imagewidget2: {
        Title: "image2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      Imagewidget3: {
        Title: "image3",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
    },
    Ticket: {
      Ticketwidget1: {
        Title: "ticket1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      Ticketwidget2: {
        Title: "ticket2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
      Ticketwidget3: {
        Title: "ticket3",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse",
        visible: false,
      },
    },
  };

  const [dataCSPM, setDataCSPM] = useState(initialdata.CSPM);
  const [dataCWPP, setDataCWPP] = useState(initialdata.CWPP);
  const [dataImage, setDataImage] = useState(initialdata.Image);
  const [dataTicket, setDataTicket] = useState(initialdata.Ticket);

  function handleAddWidget() {
    dialog.current.open();
  }

  function handleTest() {
    console.log(dataCSPM, dataCWPP, dataImage, dataTicket);
  }

  return (
    <>
      <AddWidget
        ref={dialog}
        CSPM={dataCSPM}
        setCSPM={setDataCSPM}
        CWPP={dataCWPP}
        setCWPP={setDataCWPP}
        Image={dataImage}
        setImage={setDataImage}
        Ticket={dataTicket}
        setTicket={setDataTicket}
      />
      <section className="dashboard">
        <p>Dashboard</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
        explicabo, nemo adipisci eius non quibusdam itaque? Vel explicabo ipsam,
        doloremque, nobis beatae nihil quo dolores iusto corrupti asperiores
        error!
        <button onClick={handleAddWidget}>Add Widget</button>
        <button onClick={handleTest}>Test</button>
      </section>
    </>
  );
}