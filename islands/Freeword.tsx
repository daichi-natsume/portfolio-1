import { useState } from "preact/hooks";
import { AllData } from "../routes/search-genre.tsx";
import { Freeword } from "../components/Freeword.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";
import { NarrowDown } from "../components/common/narrow-down/NarrowDown.tsx";

interface Props {
  data: AllData;
}

export default function islands(props: Props) {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visibleNarrowDown, setVisibleNarrowDown] = useState(false);
  const sec = 200;

  const DrawerToggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, sec);
    } else {
      setOpen(true);
      setVisibleMenu(true);
    }
  };

  const NarrowToggleFunction = () => {
    if (display) {
      setDisplay(false);
      setTimeout(() => {
        setVisibleNarrowDown(false);
      }, sec);
    } else {
      setDisplay(true);
      setVisibleNarrowDown(true);
    }
  };

  return (
    <div>
      {visibleNarrowDown || visibleMenu ? null : (
        <Freeword
          open={visibleMenu}
          display={visibleNarrowDown}
          data={props.data}
          onClick={DrawerToggleFunction}
          onClickButton={NarrowToggleFunction}
        />
      )}

      {visibleNarrowDown
        ? <NarrowDown open={display} onClickButton={NarrowToggleFunction} />
        : null}

      {visibleMenu
        ? <DrawerMenu open={open} onClick={DrawerToggleFunction} />
        : null}
    </div>
  );
}
