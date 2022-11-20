import { AllData } from "../routes/brand/brand-detail.tsx";
import { useState } from "preact/hooks";
import { BrandDetail } from "../components/brand-detail/BrandDetail.tsx";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";

interface Props {
  data: AllData;
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
      <BrandDetail
        open={visibleMenu}
        data={props.data}
        onClick={toggleFunction}
      />
      {visibleMenu ? <DrawerMenu open={open} onClick={toggleFunction} /> : null}
    </div>
  );
}
