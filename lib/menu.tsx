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
  { id: "grain", name: "Grain", icon: Grain },
  { id: "crustaceans", name: "Crustaceans", icon: Crustaceans },
  { id: "fish", name: "Fish", icon: Fish },
  { id: "eggs", name: "Eggs", icon: Eggs },
  { id: "peanuts", name: "Peanuts", icon: Peanuts },
  { id: "soy", name: "Soy", icon: Soy },
  { id: "milk", name: "Milk", icon: Milk },
  { id: "nuts", name: "Nuts", icon: Nuts },
  { id: "celery", name: "Celery", icon: Celery },
  { id: "mustard", name: "Mustard", icon: Mustard },
  { id: "sesame", name: "Sesame", icon: Sesame },
  { id: "sulfur", name: "Sulfur & sulfites", icon: Sulfur },
  { id: "lupin", name: "Lupin", icon: Lupin },
  { id: "shellfish", name: "Shellfish", icon: Shellfish },
];
