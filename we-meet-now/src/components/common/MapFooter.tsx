import CalendarIcon from "../../assets/CalendarIcon";
import ChatIcon from "../../assets/ChatIcon";
import FriendIcon from "../../assets/FriendIcon";
import ListIcon from "../../assets/ListIcon";
import MapIcon from "../../assets/MapIcon";

const iconData = [
  { id: 1, component: <FriendIcon /> },
  { id: 2, component: <ChatIcon /> },
  {
    id: 3,
    component: <MapIcon width="39" height="38" color="#000000" />,
  },
  { id: 4, component: <CalendarIcon /> },
  {
    id: 5,
    component: <ListIcon width="38" height="37" color="#000000" />,
  },
];

const MapFooter = () => {
  return (
    <footer className="fixed bottom-0 z-10 flex w-[385px] gap-2 p-3 bg-white justify-between">
      {iconData.map((icon) => (
        <div key={icon.id}>{icon.component}</div>
      ))}
    </footer>
  );
};

export default MapFooter;
