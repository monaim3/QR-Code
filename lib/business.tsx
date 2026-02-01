import Bar from "@/components/icons/facilities/bar";
import Bed from "@/components/icons/facilities/bed";
import Cafe from "@/components/icons/facilities/cafe";
import Child from "@/components/icons/facilities/child";
import Dog from "@/components/icons/facilities/dog";
import Parking from "@/components/icons/facilities/parking";
import Restaurant from "@/components/icons/facilities/restaurant";
import Seat from "@/components/icons/facilities/seat";
import Taxi from "@/components/icons/facilities/taxi";
import Train from "@/components/icons/facilities/train";
import Wc from "@/components/icons/facilities/wc";
import Wheelchair from "@/components/icons/facilities/wheelchair";
import Wifi from "@/components/icons/facilities/wifi";

interface Facilities {
  id: string;
  name: string;
  icon: React.ComponentType;
}

export const facilities: Facilities[] = [
  {
    id: "wi-fi",
    name: "Wi-Fi",
    icon: Wifi,
  },
  {
    id: "train",
    name: "Train",
    icon: Train,
  },
  {
    id: "seat",
    name: "Seating",
    icon: Seat,
  },
  {
    id: "taxi",
    name: "Taxi",
    icon: Taxi,
  },
  {
    id: "wheelchair",
    name: "Accessible",
    icon: Wheelchair,
  },
  {
    id: "bed",
    name: "Accommodation",
    icon: Bed,
  },
  {
    id: "wc",
    name: "Toilet",
    icon: Wc,
  },
  {
    id: "cafe",
    name: "Cafe",
    icon: Cafe,
  },
  {
    id: "Child",
    name: "Child-friendly",
    icon: Child,
  },
  {
    id: "bar",
    name: "Bar",
    icon: Bar,
  },
  {
    id: "dog",
    name: "Pet-friendly",
    icon: Dog,
  },
  {
    id: "restaurant",
    name: "Restaurant",
    icon: Restaurant,
  },
  {
    id: "parking",
    name: "Parking",
    icon: Parking,
  },
];
