import { useState } from "preact/hooks";
import { BrandData } from "../shared/server/brand.ts";
import { BrowsingHistory } from "../components/BrowsingHistroy.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";

interface Props {
  data: BrandData;
}

export default function islands(props: Props) {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, 200);
    } else {
      setOpen(true);
      setVisibleMenu(true);
    }
  };
  return (
    <div>
      <BrowsingHistory
        open={visibleMenu}
        data={props.data}
        onClick={toggleFunction}
      />
      {visibleMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
