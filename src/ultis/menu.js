import icons from "./icons"
const { MdOutlineLibraryMusic , ImRadioChecked ,LiaChartLineSolid ,BsFillMusicPlayerFill} = icons

export const slidebarMenu = [
  
    {
        path: "",
        text: "Khám Phá",
        end: true,
        icons: <ImRadioChecked size={24} />,
    },
    {
        path: "/zing-chart",
        text: "#zingchart",
        icons: <LiaChartLineSolid size={24} />,
    },
    {
        path: "/radio",
        text: "Radio",
        icons: <BsFillMusicPlayerFill size={24} />,
    },
    {
        path: "/mymusic",
        text: "Thư Viện",
        icons: <MdOutlineLibraryMusic size={24} />,
    },


]