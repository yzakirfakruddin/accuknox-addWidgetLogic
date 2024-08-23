import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { createPortal } from "react-dom";

const AddWidget = forwardRef(function AddWidget(
  { CSPM, CWPP, Image, Ticket, setCSPM, setCWPP, setImage, setTicket },
  ref
) {

  const [showCSPM, setShowCSPM] = useState(false);
  const [showCWPP, setShowCWPP] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  const [checkboxCSPM, setCheckboxCSPM] = useState(CSPM);
  const [checkboxCWPP, setCheckboxCWPP] = useState(CWPP);
  const [checkboxImage, setCheckboxImage] = useState(Image);
  const [checkboxTicket, setCheckboxTicket] = useState(Ticket);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleCheckboxCSPMChange(event) {
    const { name, checked } = event.target;
    setCheckboxCSPM((prevstate) => ({
      ...prevstate,
      [name]: {
        ...prevstate[name],
        visible: checked,
      },
    }));
  }

  function handleCheckboxCWPPChange(event) {
    const { name, checked } = event.target;
    setCheckboxCWPP((prevstate) => ({
      ...prevstate,
      [name]: {
        ...prevstate[name],
        visible: checked,
      },
    }));
  }  

  function handleCheckboxImageChange(event) {
    const { name, checked } = event.target;
    setCheckboxImage((prevstate) => ({
      ...prevstate,
      [name]: {
        ...prevstate[name],
        visible: checked,
      },
    }));
  }

  function handleCheckboxTicketChange(event) {
    const { name, checked } = event.target;
    setCheckboxTicket((prevstate) => ({
      ...prevstate,
      [name]: {
        ...prevstate[name],
        visible: checked,
      },
    }));
  }

  function handleSubmit() {
    setCSPM(checkboxCSPM);
    setCWPP(checkboxCWPP);
    setImage(checkboxImage);
    setTicket(checkboxTicket);
  }

  function handleCSPM() {
    setShowCSPM(true);
    setShowCWPP(false);
    setShowImage(false);
    setShowTicket(false);
  }

  function handleCWPP() {
    setShowCSPM(false);
    setShowCWPP(true);
    setShowImage(false);
    setShowTicket(false);
  }

  function handleImage() {
    setShowCSPM(false);
    setShowCWPP(false);
    setShowImage(true);
    setShowTicket(false);
  }

  function handleTicket() {
    setShowCSPM(false);
    setShowCWPP(false);
    setShowImage(false);
    setShowTicket(true);
  }

  return createPortal(
    <dialog ref={dialog} className="add-widget">
      <div className="add-widget-head">Add Widget</div>
      <div className="add-widget-body">
        <p>Persolnalise your dashboard by adding the following widgets.</p>
        <div className="add-widget-category">
          <button onClick={handleCSPM}>CSPM</button>
          <button onClick={handleCWPP}>CWPP</button>
          <button onClick={handleImage}>Image</button>
          <button onClick={handleTicket}>Ticket</button>
        </div>
        <div className="add-widget-widgets">
          {showCSPM &&
            Object.keys(checkboxCSPM).map((key) => (
              <div key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={checkboxCSPM[key].visible}
                  onChange={handleCheckboxCSPMChange}
                />
                <label>{key}</label>
              </div>
            ))}
          {showCWPP &&
            Object.keys(checkboxCWPP).map((key) => (
              <div key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={checkboxCWPP[key].visible}
                  onChange={handleCheckboxCWPPChange}
                />
                <label>{key}</label>
              </div>
            ))}
          {showImage &&
            Object.keys(checkboxImage).map((key) => (
              <div key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={checkboxImage[key].visible}
                  onChange={handleCheckboxImageChange}
                />
                <label>{key}</label>
              </div>
            ))}
          {showTicket &&
            Object.keys(checkboxTicket).map((key) => (
              <div key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={checkboxTicket[key].visible}
                  onChange={handleCheckboxTicketChange}
                />
                <label>{key}</label>
              </div>
            ))}
        </div>
        <div className="add-widget-buttons">
          <form method="dialog">
            <button id="cancle">Cancle</button>
            <button id="confirm" onClick={handleSubmit}>Confirm</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default AddWidget;