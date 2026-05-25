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
    id: "wifi",
    name: "generator__content_form_section__facilities__wi-fi",
    icon: Wifi,
  },
  {
    id: "train",
    name: "generator__content_form_section__facilities__train",
    icon: Train,
  },
  {
    id: "seat",
    name: "generator__content_form_section__facilities__seating",
    icon: Seat,
  },
  {
    id: "taxi",
    name: "generator__content_form_section__facilities__taxi",
    icon: Taxi,
  },
  {
    id: "accessible",
    name: "generator__content_form_section__facilities__accessible",
    icon: Wheelchair,
  },
  {
    id: "bed",
    name: "generator__content_form_section__facilities__accomodation",
    icon: Bed,
  },
  {
    id: "toilet",
    name: "generator__content_form_section__facilities__toilet",
    icon: Wc,
  },
  {
    id: "cafe",
    name: "generator__content_form_section__facilities__coffee",
    icon: Cafe,
  },
  {
    id: "Child",
    name: "generator__content_form_section__facilities__child_friendly",
    icon: Child,
  },
  {
    id: "bar",
    name: "generator__content_form_section__facilities__bar",
    icon: Bar,
  },
  {
    id: "petFriendly",
    name: "generator__content_form_section__facilities__pet_friendly",
    icon: Dog,
  },
  {
    id: "restaurant",
    name: "generator__content_form_section__facilities__restaurant",
    icon: Restaurant,
  },
  {
    id: "parking",
    name: "generator__content_form_section__facilities__parking",
    icon: Parking,
  },
];
