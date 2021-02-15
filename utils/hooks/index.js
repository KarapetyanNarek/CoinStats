import { useEffect } from "react";

function useOutsideClickEvent(ref, handleOutsideClick, exceptionPart) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      exceptionPart && exceptionPart.current
        ? !exceptionPart.current.contains(event.target) && handleOutsideClick()
        : handleOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default useOutsideClickEvent;
