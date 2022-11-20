import { useState } from "preact/hooks";
import { AllData } from "../routes/index.tsx";
import { Top } from "../components/index/Top.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";

interface Props {
  data: AllData;
}

export default function islands(props: Props) {
  const [open, setOpen] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);

  const toggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setDrawerMenu(false);
      }, 200);
    } else {
      setOpen(true);
      setDrawerMenu(true);
    }
  };
  return (
    <div>
      <Top open={drawerMenu} data={props.data} onClick={toggleFunction} />
      {drawerMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
