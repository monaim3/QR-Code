import Celery from "@/components/icons/menu/celery";
import Crustaceans from "@/components/icons/menu/crustaceans";
import Eggs from "@/components/icons/menu/eggs";
import Fish from "@/components/icons/menu/fish";
import Grain from "@/components/icons/menu/grain";
import Milk from "@/components/icons/menu/milk";
import Mustard from "@/components/icons/menu/mustard";
import Nuts from "@/components/icons/menu/nuts";
import Peanuts from "@/components/icons/menu/peanuts";
import Sesame from "@/components/icons/menu/sesame";
import Soy from "@/components/icons/menu/soy";
import Sulfur from "@/components/icons/menu/sulfur";
import Lupin from "@/components/icons/menu/lupin";
import Shellfish from "@/components/icons/menu/shellfish";

export interface Allergens {
  id: string;
  name: string;
  icon: React.ComponentType;
}

export const allergens: Allergens[] = [
  { id: "grain", name: "public__allergens__icons__cereals", icon: Grain },
  { id: "crustaceans", name: "public__allergens__icons__crustaceans", icon: Crustaceans },
  { id: "fish", name: "public__allergens__icons__fish", icon: Fish },
  { id: "eggs", name: "public__allergens__icons__eggs", icon: Eggs },
  { id: "peanuts", name: "public__allergens__icons__peanuts", icon: Peanuts },
  { id: "soy", name: "public__allergens__icons__soy", icon: Soy },
  { id: "milk", name: "public__allergens__icons__milk", icon: Milk },
  { id: "nuts", name: "public__allergens__icons__nuts", icon: Nuts },
  { id: "celery", name: "public__allergens__icons__celery", icon: Celery },
  { id: "mustard", name: "public__allergens__icons__mustard", icon: Mustard },
  { id: "sesame", name: "public__allergens__icons__sesame", icon: Sesame },
  { id: "sulfur", name: "public__allergens__icons__sulfur_sulfites", icon: Sulfur },
  { id: "lupin", name: "public__allergens__icons__lupin", icon: Lupin },
  { id: "shellfish", name: "public__allergens__icons__shellfish", icon: Shellfish },
];
